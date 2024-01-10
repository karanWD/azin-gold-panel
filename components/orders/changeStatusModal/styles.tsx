import { Box, BoxProps, styled } from '@mui/material'

export const StyledChangeStatusModal = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette['white'],
  width: '718px',
  borderRadius: '16px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '24px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  '.change-status-modal-header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '.change-status-modal-footer': {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  '.change-status-products-container': {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '12px',
  },
  '.change-status-products': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '.product-image-container': {
    border: `1px solid ${theme.palette.txt.disabled}`,
    borderRadius: '8px',
    padding: '2px',
  },
  '.product-quantity': {
    width: '78px',
    input: {
      textAlign: 'center',
    },
  },
  '.weight-container': {
    color: theme.palette.txt['tertiary'],
  },
  '.select-status-container': {
    width: '320px',
    direction: 'rtl',
  },
}))
