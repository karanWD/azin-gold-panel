import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import {ORDER_STATUSES} from "../../../enums/OrderStatuses";
import {theme} from "../../../theme";
import {StyledStatus} from "./styles";

const Statuses = {
  [ORDER_STATUSES.REGISTERED]: {
    text: "ثبت شده",
    color: "info"
  },
  [ORDER_STATUSES.PROGRESS]: {
    text: "درحال آماده سازی",
    color: "warning"
  },
  [ORDER_STATUSES.READY]: {
    text: "آماده شده",
    color: "default"
  },
  [ORDER_STATUSES.DELIVERED]: {
    text: "تحویل شده",
    color: "success"
  },
  [ORDER_STATUSES.CANCELED]: {
    text: "لغو شده",
    color: "error"
  },
}

type statusColor = "info"|"error"|"success"|"default"|"warning"

type Props = {
  status: ORDER_STATUSES,
  type:"TEXT"|"CONTAINED"
}
const OrdersStatus: FC<Props> = ({status,type}) => {
  return (
    <StyledStatus type={type} status={Statuses[status].color as statusColor}>
      {Statuses[status].text}
    </StyledStatus>
  );
};

export default OrdersStatus;
