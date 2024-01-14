import React, { useEffect } from 'react'
import { StyledOrderDetailPage } from './styles'
import { useRouter } from 'next/router'
import useFetch from '../../../../hooks/useFetch'
import { ApiRoutes } from '../../../../enums/ApiRoutes'
import OrderHeader from '../../../../components/orders/orderHeader'
import OrderInfo from '../../../../components/orders/orderInfo'
import OrderCategories from '../../../../components/orders/orderCategories'
import OrderDetailSkeleton from '../../../../components/orders/orderDetailSkeleton'

const OrderDetailPage = () => {
  const router = useRouter()
  const { response, loading, request } = useFetch()
  const { trackingId, userId } = router.query

  const fetchOrderDetail = () => {
    request({ url: ApiRoutes.ADMIN_ORDERS + '/' + userId + '/' + trackingId })
  }

  useEffect(() => {
    trackingId && userId && fetchOrderDetail()
  }, [trackingId])

  return response && !loading ? (
    <StyledOrderDetailPage>
      <OrderHeader
        status={response.order.status}
        trackingId={trackingId as string}
        orderId={response.order._id}
        updateHandler={fetchOrderDetail}
      />
      <OrderInfo data={response} />
      <OrderCategories
        data={response.order.products}
        orderId={response.order._id}
        updateHandler={fetchOrderDetail}
      />
    </StyledOrderDetailPage>
  ) : (
    <OrderDetailSkeleton />
  )
}

export default OrderDetailPage
