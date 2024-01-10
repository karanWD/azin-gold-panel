import { StyledProductsPage } from './styles'
import { NextPage } from 'next'
import useFetch from '../../hooks/useFetch'
import { useCallback, useEffect, useState } from 'react'
import { ApiRoutes } from '../../enums/ApiRoutes'
import PageHeader from '../../components/reusable/pageHeader'
import { Typography } from '@mui/material'
import MoreDetail from '../../components/orders/moreDetail'
import ChangeStatusProduct from '../../components/products/changeStatusProducts'
import PageBody from '../../components/UI/body'
import HandleDate from '../../components/reusable/handelDate'

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

const ProductsPage: NextPage = () => {
  const { response, loading, request } = useFetch()
  const [page, setPage] = useState<number>(1)

  const fetchProductsList = (page: number) => {
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
      wage: <Typography variant="body3">{item.wage + ' گرم '}</Typography>,
      features: <Typography variant="body3">{item.numbersOfFeatureGroups}</Typography>,
      status: (
        <ChangeStatusProduct
          updateHandler={() => fetchProductsList(page)}
          status={item.isActive}
          productId={item._id}
        />
      ),
      more: (
        <MoreDetail
          userId={item._id}
          orderId={item._id}
          trackingId={item.tracking}
          updateHandler={() => fetchProductsList(page)}
        />
      ),
    }))
  }, [])

  return (
    <StyledProductsPage>
      <PageHeader title="محصولات" />
      <PageBody
        data={formatData(response?.products)}
        totalPages={response?.totalPages}
        page={page}
        setPage={setPage}
        loading={loading}
        tableHeading={tableHeading}
      />
    </StyledProductsPage>
  )
}

export default ProductsPage
