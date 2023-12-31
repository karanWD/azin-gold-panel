import React from 'react';
import {StyledOrderInfo} from "./styles";
import {Box, Typography} from "@mui/material";

const OrderInfo = ({data}) => {
  return (
    <StyledOrderInfo>
      <Box className="order-info-columns">
        <OrderInfoItem title="نام مشتری:" value={"تست"}/>
        <OrderInfoItem title="شماره موبایل:" value={"تست"}/>
        <OrderInfoItem title="تاریخ تحویل:" value={new Date(data.updatedAt).toLocaleDateString("fa-ir") ?? "--"}/>
      </Box>
      <Box className="order-info-columns">
        <OrderInfoItem title="تعداد سفارش:" value={data.totalQuantity+" عدد "}/>
        <OrderInfoItem title="وزن کل حدودی:" value={data.totalWeight+" گرم "}/>
        <OrderInfoItem title="وزن کل حدودی با اجرت:" value={data.totalWeightWithWage+" گرم "}/>
      </Box>
      <Box className="order-info-columns"></Box>
    </StyledOrderInfo>
  );
};

export default OrderInfo;


export const OrderInfoItem = ({title, value}) => {
  return (
    <Box className="order-info-item-container">
      <Typography className="order-info-item-title">{title}</Typography>
      <Typography className="order-info-item-value">{value}</Typography>
    </Box>
  )
}