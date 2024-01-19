import { ORDER_STATUSES } from '../enums/OrderStatuses'

export const Statuses = {
  [ORDER_STATUSES.REGISTERED]: {
    text: 'ثبت شده',
    color: (theme) => theme.palette.txt.brand,
    bg: (theme) => theme.palette.bg.secondary.tonal,
    border: (theme) => theme.palette.outline.brandSecondary,
  },
  [ORDER_STATUSES.PROGRESS]: {
    text: 'درحال آماده سازی',
    color: (theme) => theme.palette.txt.warning,
    bg: (theme) => theme.palette.bg.warning.tonal,
    border: (theme) => theme.palette.outline.warning,
  },
  [ORDER_STATUSES.READY]: {
    text: 'آماده شده',
    color: (theme) => theme.palette.txt.brandTertiary,
    bg: (theme) => theme.palette.bg.tertiary.tonal,
    border: (theme) => theme.palette.outline.brandTertiary,
  },
  [ORDER_STATUSES.DELIVERED]: {
    text: 'تحویل شده',
    color: (theme) => theme.palette.txt.success,
    bg: (theme) => theme.palette.bg.success.tonal,
    border: (theme) => theme.palette.outline.success,
  },
  [ORDER_STATUSES.CANCELED]: {
    text: 'لغو شده',
    color: (theme) => theme.palette.txt.error,
    bg: (theme) => theme.palette.bg.error.tonal,
    border: (theme) => theme.palette.outline.error,
  },
}
