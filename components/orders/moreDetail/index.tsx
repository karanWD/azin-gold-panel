import React, { FC, useState } from 'react'
import { StyledMoreDetail } from './styles'
import { Button, Modal, Popover, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import ChangeOrderTotalStatusModal from '../changeOrderTotalStatusModal'

type Props = {
  userId: string
  orderId: string
  trackingId: string
  updateHandler: () => void
}

const MoreDetail: FC<Props> = ({ orderId, userId, trackingId, updateHandler }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <StyledMoreDetail>
      <Button className="more-button" variant="text" onClick={handleClick}>
        <Image src={'/icons/more.svg'} alt={'جزئیات'} layout="fill" />
      </Button>
      <Popover
        className="popover-container"
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          '.MuiPopover-paper': {
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '8px',
            borderRadius: '8px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
          },
        }}>
        <Link href={`/orders/${userId}/${trackingId}`}>جزئیات سفارش</Link>
        <Typography variant="button2" onClick={() => setOpenModal(true)}>
          تغییر وضعیت
        </Typography>
      </Popover>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <ChangeOrderTotalStatusModal
          closeHandler={() => setOpenModal(false)}
          updateHandler={updateHandler}
          orderId={orderId}
          userId={userId as string}
        />
      </Modal>
    </StyledMoreDetail>
  )
}

export default MoreDetail
