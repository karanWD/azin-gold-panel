import {ORDER_STATUSES} from "../enums/OrderStatuses";
import { DISPLAY_MODES } from "../enums/DisplayModes";

export const Statuses = {
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
  [DISPLAY_MODES.DEFAULT]: {
    text: "عادی",
  },
  [DISPLAY_MODES.COLOR]: {
    text: "رنگ",
  },
  [DISPLAY_MODES.EXPANDABLE]: {
    text: "دارای عکس",
  },
  [DISPLAY_MODES.PRODUCT]: {
    text: "شمارنده",
  }
};