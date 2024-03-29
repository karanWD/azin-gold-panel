import React, { FC, useState } from 'react'
import { StyledOrderCategories } from './styles'
import OrderCategoryName from './orderCategoryName'
import { Box, Modal } from '@mui/material'
import OrderProducts from '../orderProducts'
import ChangeStatusModal from '../changeStatusModal'
import { OrderProductsStatus, OrdersSubProduct } from '../../../types'
import { ORDER_STATUSES } from '../../../enums/OrderStatuses'
import Button from '@/components/UI/button'

type Props = {
  data: OrderProductsStatus
  orderId: string
  updateHandler: () => void
}
type SelectedItems = {
  orderId: string
  groupId: string
  currentStatus: string
  items: Array<OrdersSubProduct>
} | null

const OrderCategories: FC<Props> = ({ data, orderId, updateHandler }) => {
  const [selectedItems, setSelectedItems] = useState<SelectedItems>(null)
  const [openModal, setOpenModal] = useState<boolean>(false)

  const changeHandler = (isChecked: boolean, selectedData: OrdersSubProduct, id: string, key: string): void => {
    if (isChecked) {
      const temp = {
        groupId: id,
        orderId: orderId,
        currentStatus: key,
      }
      setSelectedItems((prevState) => ({
        ...temp,
        items: [...(prevState?.items ?? []), selectedData],
      }))
    } else {
      const temp = selectedItems.items.filter((item) => item._id !== selectedData._id)
      if (temp.length === 0) {
        setSelectedItems(null)
      } else {
        setSelectedItems((prevState) => ({ ...prevState, items: temp }))
      }
    }
  }

  const closeHandler = () => {
    setOpenModal(false)
    setSelectedItems(null)
  }
  return (
    <StyledOrderCategories>
      {Object.entries(data).map(([key, value], index) => {
        return (
          value.length > 0 && (
            <Box key={'ORDER_CATEGORY_ITEM_' + index} display="flex" flexDirection="column" gap="18px">
              <OrderCategoryName type={key as ORDER_STATUSES} />
              <OrderProducts
                state={key as ORDER_STATUSES}
                data={value}
                selectedData={selectedItems}
                handleChange={(isChecked, selectedData, groupId) =>
                  changeHandler(isChecked, selectedData, groupId, key)
                }
              />
            </Box>
          )
        )
      })}
      <Box mr={'auto'} ml={0}>
        <Button
          format={'primary'}
          size={'large'}
          width={'fit-content'}
          onClick={() => setOpenModal(true)}
          disabled={!selectedItems}>
          تغییر وضعیت محصولات
        </Button>
      </Box>
      <Modal open={openModal} onClose={closeHandler}>
        <ChangeStatusModal selectedItems={selectedItems} closeHandler={closeHandler} updateHandler={updateHandler} />
      </Modal>
    </StyledOrderCategories>
  )
}

export default OrderCategories
