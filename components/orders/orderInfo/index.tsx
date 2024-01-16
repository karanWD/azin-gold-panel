import React, { FC } from 'react'
import { StyledOrderInfo } from './styles'
import { Box, Typography } from '@mui/material'
import { OrderDetailResponse } from '../../../types'

type Props = {
  data: OrderDetailResponse
}
const OrderInfo: FC<Props> = ({ data }) => {
  return (
    <StyledOrderInfo>
      <Box className="order-info-columns">
        <OrderInfoItem title="نام مشتری:" value={data.name} />
        <OrderInfoItem title="شماره موبایل:" value={data.mobile} />
        <OrderInfoItem
          title="تاریخ تحویل:"
          value={new Date(data.order.updatedAt).toLocaleDateString('fa-ir') ?? '--'}
        />
      </Box>
      <Box className="order-info-columns">
        <OrderInfoItem title="تعداد سفارش:" value={data.order.totalQuantity + ' عدد '} />
        <OrderInfoItem title="وزن کل حدودی:" value={data.order.totalWeight + ' گرم '} />
        <OrderInfoItem title="وزن کل حدودی با اجرت:" value={data.order.totalWeightWithWage + ' گرم '} />
      </Box>
      <Box className="order-info-columns"></Box>
    </StyledOrderInfo>
  )
}

export default OrderInfo

type OrderInfoProps = {
  title: string
  value: string
}
export const OrderInfoItem: FC<OrderInfoProps> = ({ title, value }) => {
  return (
    <Box className="order-info-item-container">
      <Typography variant="body3" className="order-info-item-title">
        {title}
      </Typography>
      <Typography variant={'body3'} className="order-info-item-value">
        {value}
      </Typography>
    </Box>
  )
}
