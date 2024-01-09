import { ORDER_STATUSES } from "../enums/OrderStatuses";

export const Statuses = {
  [ORDER_STATUSES.REGISTERED]: {
    text: "ثبت شده",
    color: (theme) => theme.palette.text.brand,
    bg: (theme) => theme.palette.background.brand.secondary.tonal,
  },
  [ORDER_STATUSES.PROGRESS]: {
    text: "درحال آماده سازی",
    color: (theme) => theme.palette.text.warning,
    bg: (theme) => theme.palette.background.warning.tonal,
  },
  [ORDER_STATUSES.READY]: {
    text: "آماده شده",
    color: (theme) => theme.palette.text.tertiary,
    bg: (theme) => theme.palette.background.tertiary.tonal,
  },
  [ORDER_STATUSES.DELIVERED]: {
    text: "تحویل شده",
    color: (theme) => theme.palette.text.success,
    bg: (theme) => theme.palette.background.success.tonal,
  },
  [ORDER_STATUSES.CANCELED]: {
    text: "لغو شده",
    color: (theme) => theme.palette.text.error,
    bg: (theme) => theme.palette.background.error.tonal,
  },
};
