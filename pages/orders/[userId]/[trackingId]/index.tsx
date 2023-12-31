import React, {useEffect} from 'react';
import {StyledOrderDetailPage} from "./styles";
import {useRouter} from "next/router";
import useFetch from "../../../../hooks/useFetch";
import {ApiRoutes} from "../../../../enums/ApiRoutes";
import OrderHeader from "../../../../components/orders/orderHeader";
import OrderInfo from "../../../../components/orders/orderInfo";

const OrderDetailPage = () => {
  const router = useRouter()
  const {response, loading, error, request} = useFetch()
  const {trackingId, userId} = router.query


  useEffect(() => {
    trackingId && userId &&
    request({url: ApiRoutes.ADMIN_ORDERS + "/" + userId + "/" + trackingId})
  }, [trackingId])

  return (
    response && !loading &&
    <StyledOrderDetailPage>
      <OrderHeader trackingId={trackingId as string}/>
      <OrderInfo data={response}/>
    </StyledOrderDetailPage>
  );
};

export default OrderDetailPage;
