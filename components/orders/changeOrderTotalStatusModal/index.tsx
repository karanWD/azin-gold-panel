import React, { FC, useState } from 'react'
import { StyledChangeOrderTotalStatus } from './styles'
import { Box, MenuItem, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Statuses } from '../../../data/Statuses'
import useFetch from '../../../hooks/useFetch'
import { ApiRoutes } from '../../../enums/ApiRoutes'
import { toast } from 'react-toastify'
import Button from '@/components/UI/button'
import SelectBox from '@/components/UI/select'

type Props = {
  closeHandler: () => void
  updateHandler: () => void
  userId: string
  orderId: string
}

const generateOptions = (): { text: string; value: string }[] =>
  Object.entries(Statuses).map(([key, value]) => ({
    text: value.text,
    value: key,
  }))

const ChangeOrderTotalStatusModal: FC<Props> = ({ closeHandler, updateHandler, userId, orderId }) => {
  const options = generateOptions()
  const [newStatus, setNewStatus] = useState<string>(options[0].value)
  const { loading, request } = useFetch()

  const submitHandler = () => {
    request({
      method: 'PATCH',
      url: ApiRoutes.ADMIN_ORDERS + '/' + userId + '/' + orderId + '/',
      data: {
        status: newStatus,
      },
    }).then(() => {
      toast.success('وضعیت با موفقیت بروزرسانی شد')
      updateHandler()
    })
  }

  return (
    <StyledChangeOrderTotalStatus>
      <Box className="change-status-modal-header">
        <Typography variant="title4">تغییر وضعیت سفارش</Typography>
        <CloseIcon fontSize="medium" onClick={closeHandler} />
      </Box>
      <Box className="change-status-modal-body">
        <Typography variant="body3">وضعیت</Typography>
        <SelectBox changeHandler={(value) => setNewStatus(value)} value={newStatus}>
          {generateOptions().map((item, index) => (
            <MenuItem key={'OPTION_ITEM_' + index} value={item.value}>
              <Typography variant={'button2'}>{item.text}</Typography>
            </MenuItem>
          ))}
        </SelectBox>
      </Box>
      <Box className="change-status-modal-footer">
        <Button format={'primary'} size={'large'} width="fit-content" onClick={submitHandler} loading={loading}>
          ثبت
        </Button>
      </Box>
    </StyledChangeOrderTotalStatus>
  )
}

export default ChangeOrderTotalStatusModal
