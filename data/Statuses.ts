import { ORDER_STATUSES } from "../enums/OrderStatuses";

export const Statuses = {
  [ORDER_STATUSES.REGISTERED]: {
    text: "ثبت شده",
    color: "info",
  },
  [ORDER_STATUSES.PROGRESS]: {
    text: "درحال آماده سازی",
    color: "warning",
  },
  [ORDER_STATUSES.READY]: {
    text: "آماده شده",
    color: "default",
  },
  [ORDER_STATUSES.DELIVERED]: {
    text: "تحویل شده",
    color: "success",
  },
  [ORDER_STATUSES.CANCELED]: {
    text: "لغو شده",
    color: "error",
  },
};
