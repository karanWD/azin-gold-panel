import { StyledPropertyPage } from './styles'
import { NextPage } from 'next'
import useFetch from '../../hooks/useFetch'
import { useCallback, useEffect, useState } from 'react'
import { ApiRoutes } from '../../enums/ApiRoutes'
import PageHeader from '../reusable/pageHeader'
import { Typography } from '@mui/material'
import MoreDetail from './moreDatail'
import HeaderFeatures from './headerFeatures'
import FeaturesItem from './featuresItem'
import DisplayMode from './displayMode'
import SearchBar from './searchBar'
import PageBody from '../reusable/body'
import AddFeatureModal from './addFeatureModal'
import { HandleDate } from '../../modules'
import PaginationWrapper from '@/components/reusable/pagination'

const tableHeading: string[] = ['ردیف', 'عنوان', 'نوع ویژگی', 'مقادیر', 'تاریخ ایجاد ', 'تاریخ بروز رسانی', 'جزئیات']

const FeaturesComponents: NextPage = () => {
  const { response, loading, request } = useFetch()
  const [page, setPage] = useState<number>(1)

  const fetchFeaturesList = (page) => {
    request({
      url: ApiRoutes.ADMIN_FEATURES + `?page=${page}`,
      // for filters
      //status=CANCELED&fromDate=2023-12-25T00:00:00Z&toDate=2023-12-28T00:00:00Z&name=م&tracking=87
    })
  }

  useEffect(() => {
    fetchFeaturesList(page)
  }, [page])

  const formatData = useCallback((data) => {
    if (!data) return null
    return data.map((item) => ({
      index: <Typography variant="body3">{item.index}</Typography>,
      title: <HeaderFeatures header={item.header} />,
      featureType: <DisplayMode modes={item.displayMode} />,
      features: <FeaturesItem modes={item.features} />,
      createdAt: <Typography variant="body3"> {HandleDate(item.createdAt)}</Typography>,
      updatedAt: <Typography variant="body3">{HandleDate(item.updatedAt)}</Typography>,
      more: <MoreDetail featureId={item._id} />,
    }))
  }, [])

  return (
    <StyledPropertyPage>
      <PageHeader title="ویژگی‌ها">
        <AddFeatureModal />
      </PageHeader>
      <SearchBar />
      <PageBody data={formatData(response?.featureGroups)} loading={loading} tableHeading={tableHeading} />
      <PaginationWrapper page={page} total={response?.totalPages} onChange={(value) => setPage(value)} />
    </StyledPropertyPage>
  )
}

export default FeaturesComponents
