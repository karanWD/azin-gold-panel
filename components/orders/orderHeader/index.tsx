import React, {FC, useState} from 'react';
import {Box, Button, Modal, Typography} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import OrdersStatus from "../ordersStatus";
import {ORDER_STATUSES} from "../../../enums/OrderStatuses";
import {useRouter} from "next/router";
import ChangeOrderTotalStatusModal from "../changeOrderTotalStatusModal";


type Props = {
  trackingId:string
  orderId:string
  updateHandler:()=>void
  status:ORDER_STATUSES
}
const OrderHeader:FC<Props> = ({status,trackingId,orderId,updateHandler}) => {
  const router = useRouter()
  const {userId }=router.query
  const title = "سفارش " + trackingId
  const [openModal,setOpenModal]=useState<boolean>(false)
  return (
    <Box className="order-header-container">
      <Box>
        <Typography component="span" className="back-button" onClick={() => router.push("/orders")}>
          <EastIcon/>
          بازگشت به لیست
        </Typography>
        <Box className="order-detail-header">
          <Typography className="order-detail-title">
            {title}
            <OrdersStatus status={status} type={"CONTAINED"}/>
          </Typography>

        </Box>
      </Box>
      <Button color="primary" variant="contained" onClick={()=>setOpenModal(true)}>
        تغییر وضعیت سفارش
      </Button>
      <Modal
        open={openModal}
        onClose={()=>setOpenModal(false)}
      >
        <ChangeOrderTotalStatusModal
          closeHandler={()=>setOpenModal(false)}
          updateHandler={updateHandler}
          orderId={orderId}
          userId={userId as string}
        />
      </Modal>
    </Box>
  );
};

export default OrderHeader;