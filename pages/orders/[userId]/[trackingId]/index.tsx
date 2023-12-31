import React, {useEffect} from 'react';
import {StyledOrderDetailPage} from "./styles";
import {useRouter} from "next/router";
import {Box, Button, Typography} from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import OrdersStatus from "../../../../components/orders/ordersStatus";
import {ORDER_STATUSES} from "../../../../enums/OrderStatuses";
import useFetch from "../../../../hooks/useFetch";
import {ApiRoutes} from "../../../../enums/ApiRoutes";

const OrderDetailPage = () => {
  const router = useRouter()
  const {response, loading, error, request} = useFetch()
  const {trackingId, userId} = router.query
  const title = "سفارش " + trackingId


  useEffect(() => {
    trackingId && userId &&
    request({url: ApiRoutes.ADMIN_ORDERS + "/" + userId + "/" + trackingId})
  }, [trackingId])

  return (
    response && !loading &&
    <StyledOrderDetailPage>
      <Box>
        <Typography component="span" className="back-button" onClick={() => router.push("/orders")}>
          <EastIcon/>
          بازگشت به لیست
        </Typography>
        <Box className="order-detail-header">
          <Typography className="order-detail-title">
            {title}
            <OrdersStatus status={"REGISTERED" as ORDER_STATUSES}/>
          </Typography>

        </Box>
      </Box>
      <Button color="primary" variant="contained">
        تغییر وضعیت سفارش
      </Button>
    </StyledOrderDetailPage>
  );
};

export default OrderDetailPage;
