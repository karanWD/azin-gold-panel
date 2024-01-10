import { ORDER_STATUSES } from '../enums/OrderStatuses'

export const Statuses = {
  [ORDER_STATUSES.REGISTERED]: {
    text: 'ثبت شده',
    color: (theme) => theme.palette.txt.brandSecondary,
    bg: (theme) => theme.palette.bg.secondary.tonal,
  },
  [ORDER_STATUSES.PROGRESS]: {
    text: 'درحال آماده سازی',
    color: (theme) => theme.palette.txt.warning,
    bg: (theme) => theme.palette.bg.warning.tonal,
  },
  [ORDER_STATUSES.READY]: {
    text: 'آماده شده',
    color: (theme) => theme.palette.txt.tertiary,
    bg: (theme) => theme.palette.bg.tertiary.tonal,
  },
  [ORDER_STATUSES.DELIVERED]: {
    text: 'تحویل شده',
    color: (theme) => theme.palette.txt.success,
    bg: (theme) => theme.palette.bg.success.tonal,
  },
  [ORDER_STATUSES.CANCELED]: {
    text: 'لغو شده',
    color: (theme) => theme.palette.txt.error,
    bg: (theme) => theme.palette.bg.error.tonal,
  },
}
