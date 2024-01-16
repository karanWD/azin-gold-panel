import React, { FC, useState } from 'react'
import { StyledChangeStatusModal } from './styles'
import { Box, Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'
import { Statuses } from '../../../data/Statuses'
import useFetch from '../../../hooks/useFetch'
import { ApiRoutes } from '../../../enums/ApiRoutes'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { OrdersSubProduct } from '../../../types'

interface Props {
  selectedItems: {
    orderId: string
    groupId: string
    currentStatus: string
    items: Array<OrdersSubProduct>
  } | null
  closeHandler: () => void
  updateHandler: () => void
}

const generateOptions = (): { text: string; value: string }[] =>
  Object.entries(Statuses).map(([key, value]) => ({
    text: value.text,
    value: key,
  }))

const ChangeStatusModal: FC<Props> = ({ selectedItems, closeHandler, updateHandler }) => {
  const router = useRouter()
  const query = router.query
  const options = generateOptions()
  const [newStatus, setNewStatus] = useState<string>(options[0].value)
  const [finalValues, setFinalValues] = useState(selectedItems)
  const { loading, request } = useFetch()

  const handleChange = (event) => {
    setNewStatus(event.target.value as string)
  }

  const countHandler = (id, count) => {
    const temp = [...finalValues.items]
    temp.find((item) => item._id === id).quantity = +count
    setFinalValues((prevState) => ({
      ...prevState,
      items: temp,
    }))
  }

  const submitHandler = () => {
    request({
      method: 'PATCH',
      url: ApiRoutes.ADMIN_ORDERS + '/' + query.userId + '/' + finalValues.orderId + '/' + finalValues.groupId,
      data: {
        currentGroupStatus: finalValues.currentStatus,
        newStatus: newStatus,
        subProducts: finalValues.items.map((item) => ({
          id: item._id,
          quantity: item.quantity,
        })),
      },
    }).then(() => {
      toast.success('وضعیت با موفقیت بروزرسانی شد')
      updateHandler()
    })
  }

  return (
    <StyledChangeStatusModal>
      <Box className="change-status-modal-header">
        <Typography>تغییر وضعیت محصولات</Typography>
        <CloseIcon fontSize="medium" onClick={closeHandler} />
      </Box>
      <Box className="change-status-modal-body">
        <Typography>وضعیت</Typography>
        <FormControl>
          <Select className="select-status-container" size={'small'} value={newStatus} onChange={handleChange}>
            {generateOptions().map((item, index) => (
              <MenuItem key={'OPTION_ITEM_' + index} value={item.value}>
                {item.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box className="change-status-products-container">
        {finalValues?.items?.map((item, index) => (
          <Box className="change-status-products" key={'PRODUCT_ITEM_' + index}>
            <Box display="flex" gap="8px" alignItems="center">
              <Image
                className="product-image-container"
                src={item.thumbnail}
                alt={item.title}
                width={36}
                height={36}
                layout="fixed"
              />
              <Typography>{item.title}</Typography>
              <Typography className="weight-container">({item.weight} گرم )</Typography>
            </Box>
            <Box display="flex" gap="16px" alignItems="center">
              <TextField
                className="product-quantity"
                onChange={(e) => {
                  countHandler(item._id, e.target.value)
                }}
                InputProps={{ inputProps: { min: 1, max: item.totalQuantity } }}
                value={item.quantity}
                size="small"
                type="number"
              />
              <Typography>از </Typography>
              <Typography>{item.totalQuantity}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box className="change-status-modal-footer">
        <Button color="primary" variant="contained" onClick={submitHandler} disabled={loading}>
          ثبت
        </Button>
      </Box>
    </StyledChangeStatusModal>
  )
}

export default ChangeStatusModal
