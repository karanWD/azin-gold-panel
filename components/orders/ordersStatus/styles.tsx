import { Box, BoxProps, styled } from '@mui/material'
import { ORDER_STATUSES } from '../../../enums/OrderStatuses'
import { Statuses } from '../../../data/Statuses'

interface StatusType extends BoxProps {
  type: 'TEXT' | 'CONTAINED'
  status: ORDER_STATUSES
}

export const StyledStatus = styled(Box)<StatusType>(({ theme, type, status }) => ({
  backgroundColor: type === 'TEXT' ? 'transparent' : Statuses[status].bg(theme),
  border: `1px solid ${type === 'TEXT' ? 'transparent' : Statuses[status].border(theme)}`,
  borderRadius: type === 'TEXT' ? '0' : '8px',
  color: Statuses[status].color(theme),
  padding: '4px 8px',
}))
