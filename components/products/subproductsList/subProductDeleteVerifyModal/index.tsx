import React, { FC } from 'react'
import { StyledSubproductsDeleteVerifyMoadal } from '@/components/products/subproductsList/subProductDeleteVerifyModal/styles'
import { Box, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'
import Button from '@/components/UI/button'

type Props = {
  verifyHandler: () => void
  closeHandler: () => void
}
const SubproductsDeleteVerifyMoadal: FC<Props> = ({ verifyHandler, closeHandler }) => {
  return (
    <StyledSubproductsDeleteVerifyMoadal>
      <Box className="header">
        <Typography variant="title4">حذف اطلاعات</Typography>
        <Close onClick={closeHandler} />
      </Box>
      <Typography variant="body3" className="description">
        آیا از حذف اطلاعات محصول مطمین هستید؟ در صورت حذف باید اطلاعات این سطر را مجددا وارد کنید.
      </Typography>
      <Box className="actions">
        <Button size="large" format={'primary'} onClick={verifyHandler}>
          حذف
        </Button>
        <Button size="large" format={'outline_primary'} onClick={closeHandler}>
          منصرف شدم
        </Button>
      </Box>
    </StyledSubproductsDeleteVerifyMoadal>
  )
}

export default SubproductsDeleteVerifyMoadal
