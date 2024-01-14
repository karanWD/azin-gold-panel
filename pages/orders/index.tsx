import { NextPage } from 'next'
import useFetch from '../../hooks/useFetch'
import React, { useCallback, useEffect, useState } from 'react'
import { ApiRoutes } from '../../enums/ApiRoutes'
import OrdersStatus from '../../components/orders/ordersStatus'
import { StyledOrderPage } from './styles'
import PageHeader from '../../components/reusable/pageHeader'
import { Modal, Typography } from '@mui/material'
import MoreDetail from '../../components/reusable/moreDetail'
import PageBody from '../../components/UI/body'
import HandleDate from '../../components/reusable/handelDate'
import ChangeOrderTotalStatusModal from '@/components/orders/changeOrderTotalStatusModal'
import Link from 'next/link'

const tableHeading: string[] = [
  'ردیف',
  'تاریخ ثبت سفارش',
  'شماره سفارش',
  'نام کاربر',
  'وضعیت',
  'وزن کل',
  'وزن کل با اجرت',
  'تعداد',
  'جزئیات',
]

const OrdersPage: NextPage = () => {
  const { response, loading, request } = useFetch()
  const [page, setPage] = useState<number>(1)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const fetchOrderList = (page) => {
    request({ url: ApiRoutes.ADMIN_ORDERS + `?page=${page}` })
  }

  useEffect(() => {
    fetchOrderList(page)
  }, [page])

  const formatData = useCallback((data) => {
    if (!data) return null
    return data.map((item) => ({
      index: <Typography variant="body3">{item.index}</Typography>,
      createdAt: <Typography variant="body3"> {HandleDate(item.order.createdAt)}</Typography>,
      tracking: <Typography variant="body3">{item.order.tracking}</Typography>,
      username: <Typography variant="body3">{item.name}</Typography>,
      status: <OrdersStatus status={item.order.status} type={'TEXT'} />,
      weight: <Typography variant="body3">{item.order.totalWeight + ' گرم '}</Typography>,
      weightWithWage: (
        <Typography variant="body3">{item.order.totalWeightWithWage + ' گرم '}</Typography>
      ),
      count: <Typography variant="body3">{item.order.totalQuantity + ' عدد '}</Typography>,
      more: (
        <MoreDetail>
          <Link href={`/orders/${item._id}/${item.tracking}`}>جزئیات سفارش</Link>
          <Typography variant="button2" onClick={() => setOpenModal(true)}>
            تغییر وضعیت
          </Typography>
        </MoreDetail>
      ),
    }))
  }, [])

  return (
    <StyledOrderPage>
      <PageHeader title="سفارشات" />
      <PageBody
        data={formatData(response?.orders)}
        totalPages={response?.totalPages}
        page={page}
        setPage={setPage}
        loading={loading}
        tableHeading={tableHeading}
      />
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <ChangeOrderTotalStatusModal
          closeHandler={() => setOpenModal(false)}
          updateHandler={() => fetchOrderList(page)}
          orderId={response?.orders?.orderId}
          userId={response?.orders?._id as string}
        />
      </Modal>
    </StyledOrderPage>
  )
}
export default OrdersPage
