import React, { FC, useState } from 'react'
import { Box, Modal } from '@mui/material'
import OrdersStatus from '../ordersStatus'
import { ORDER_STATUSES } from '../../../enums/OrderStatuses'
import { useRouter } from 'next/router'
import ChangeOrderTotalStatusModal from '../changeOrderTotalStatusModal'
import BackToList from '@/components/reusable/backToList'
import { StaticRoutes } from '../../../enums/StaticRoutes'
import Button from '@/components/UI/button'

type Props = {
  trackingId: string
  orderId: string
  updateHandler: () => void
  status: ORDER_STATUSES
}
const OrderHeader: FC<Props> = ({ status, trackingId, orderId, updateHandler }) => {
  const router = useRouter()
  const { userId } = router.query
  const title = 'سفارش ' + trackingId
  const [openModal, setOpenModal] = useState<boolean>(false)
  return (
    <Box className="order-header-container">
      <Box className="order-title-container">
        <BackToList title={title} link={StaticRoutes.ORDERS} />
        <OrdersStatus status={status} type={'CONTAINED'} />
      </Box>
      <Button width={'fit-content'} size="large" format={'primary'} onClick={() => setOpenModal(true)}>
        تغییر وضعیت سفارش
      </Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <ChangeOrderTotalStatusModal
          closeHandler={() => setOpenModal(false)}
          updateHandler={updateHandler}
          orderId={orderId}
          userId={userId as string}
        />
      </Modal>
    </Box>
  )
}

export default OrderHeader
