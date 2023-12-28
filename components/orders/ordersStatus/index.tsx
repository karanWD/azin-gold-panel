import React, {FC} from 'react';
import {Typography} from "@mui/material";
import {ORDER_STATUSES} from "../../../enums/OrderStatuses";
import {theme} from "../../../theme";

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

type Props = {
  status: ORDER_STATUSES
}
const OrdersStatus: FC<Props> = ({status}) => {
  return (
    <Typography color={theme.palette.state[Statuses[status].color]}>
      {Statuses[status].text}
    </Typography>
  );
};

export default OrdersStatus;
