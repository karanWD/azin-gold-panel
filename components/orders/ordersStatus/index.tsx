import React, { FC } from 'react'
import { ORDER_STATUSES } from '../../../enums/OrderStatuses'
import { StyledStatus } from './styles'
import { Statuses } from '../../../data/Statuses'
import { Typography } from '@mui/material'

type Props = {
  status: ORDER_STATUSES
  type: 'TEXT' | 'CONTAINED'
}
const OrdersStatus: FC<Props> = ({ status, type }) => {
  return (
    <StyledStatus type={type} status={status}>
      <Typography variant="body3">{Statuses[status].text}</Typography>
    </StyledStatus>
  )
}

export default OrdersStatus
