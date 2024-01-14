import { FC, MouseEvent, useState } from 'react'
import { StyledMoreDetail } from './styles'
import { Box, Button, Popover, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  featureId: string
}

const MoreDetail : FC<Props> = ({ featureId }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
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
            cursor: 'pointer',
          },
        }}>
          <Box>
            <Link href={`/features/${featureId}`}>
              <Typography className="pointer-item" variant="button2">
                ویرایش
              </Typography>
            </Link>
          </Box>
      </Popover>
    </StyledMoreDetail>
  )
}

export default MoreDetail
