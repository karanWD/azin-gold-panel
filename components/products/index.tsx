import { StyledProductsPage } from './styles'
import { NextPage } from 'next'
import useFetch from '../../hooks/useFetch'
import { useCallback, useEffect, useState } from 'react'
import { ApiRoutes } from '../../enums/ApiRoutes'
import PageHeader from '../reusable/pageHeader'
import { Box, Typography } from '@mui/material'
import ChangeStatusProduct from '../products/changeStatusProducts'
import PageBody from '../reusable/body'
import { HandleDate } from '../../modules'
import PaginationWrapper from '@/components/reusable/pagination'
import MoreDetail from './moreDetail'
import { StaticRoutes } from 'enums/StaticRoutes'
import Link from 'next/link'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

const tableHeading: string[] = [
  'ردیف',
  'نام محصول',
  'تاریخ ایجاد ',
  'تاریخ بروز رسانی',
  'اجرت',
  'تعداد ویژگی',
  'فعال/غیرفعال',
  'جزئیات',
]

const ProductsComponents: NextPage = () => {
  const { response, loading, request } = useFetch()
  const [page, setPage] = useState<number>(1)

  const fetchProductsList = (page) => {
    request({
      url: ApiRoutes.ADMIN_PRODUCTS + `?page=${page}`,
      // for filters
      //status=CANCELED&fromDate=2023-12-25T00:00:00Z&toDate=2023-12-28T00:00:00Z&name=م&tracking=87
    })
  }

  useEffect(() => {
    fetchProductsList(page)
  }, [page])

  const formatData = useCallback((data) => {
    if (!data) return null
    return data.map((item) => ({
      index: <Typography variant="body3">{item.index}</Typography>,
      title: <Typography variant="body3">{item.title}</Typography>,
      createdAt: <Typography variant="body3"> {HandleDate(item.createdAt)}</Typography>,
      updatedAt: <Typography variant="body3">{HandleDate(item.updatedAt)}</Typography>,
      wage: <Typography variant="body3">{item.wage + ' % '}</Typography>,
      features: <Typography variant="body3">{item.numbersOfFeatureGroups}</Typography>,
      status: <ChangeStatusProduct status={item.isActive} productId={item._id} />,
      more: <MoreDetail productId={item._id} />,
    }))
  }, [])

  return (
    <StyledProductsPage>
      <PageHeader title="محصولات">
        <Link href={StaticRoutes.CREATE_PRODUCT}>
          <Box className="add-product-button">
            <AddCircleOutlineIcon />
            <Typography variant="button1">افزودن محصول</Typography>
          </Box>
        </Link>
      </PageHeader>
      <PageBody data={formatData(response?.products)} loading={loading} tableHeading={tableHeading} />
      <PaginationWrapper page={page} total={response?.totalPages} onChange={(value) => setPage(value)} />
    </StyledProductsPage>
  )
}

export default ProductsComponents
