import React, {FC} from 'react';
import {Box, Button, Typography} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import OrdersStatus from "../ordersStatus";
import {ORDER_STATUSES} from "../../../enums/OrderStatuses";
import {useRouter} from "next/router";


type Props = {
  trackingId:string
}
const OrderHeader:FC<Props> = ({trackingId}) => {
  const router = useRouter()
  const title = "سفارش " + trackingId
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
            <OrdersStatus status={"REGISTERED" as ORDER_STATUSES} type={"CONTAINED"}/>
          </Typography>

        </Box>
      </Box>
      <Button color="primary" variant="contained">
        تغییر وضعیت سفارش
      </Button>
    </Box>
  );
};

export default OrderHeader;