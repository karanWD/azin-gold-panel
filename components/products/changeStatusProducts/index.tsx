import React, { FC } from 'react'
import { Switch } from '@mui/material'
import { ApiRoutes } from '../../../enums/ApiRoutes'
import UseFetch from '../../../hooks/useFetch'

type Props = {
  updateHandler: () => void
  status: boolean
  productId?: string
}

const ChangeStatusProduct: FC<Props> = ({ updateHandler, productId, status }) => {
  const { request } = UseFetch()

  const editStatusProducts = (productId) => {
    request({
      method: 'PATCH',
      url: ApiRoutes.ADMIN_PRODUCTS + '/' + productId,
      data: {
        isActive: `${!status}`,
      },
    }).then(() => {
      updateHandler()
    })
  }

  return (
    <>
      <Switch checked={status} onChange={() => editStatusProducts(productId)} />
    </>
  )
}

export default ChangeStatusProduct
