import React, { FC, useState } from 'react'
import { ApiRoutes } from '../../../enums/ApiRoutes'
import UseFetch from '../../../hooks/useFetch'
import Switch from '@/components/UI/switch'

type Props = {
  status: boolean
  productId?: string
}

const ChangeStatusProduct: FC<Props> = ({ productId, status }) => {
  const [isActive, setIsActive] = useState<boolean>(status)
  const { request } = UseFetch()

  const editStatusProducts = (productId) => {
    request({
      method: 'PATCH',
      url: ApiRoutes.ADMIN_PRODUCTS + '/' + productId,
      data: {
        isActive: !isActive,
      },
    }).then(() => setIsActive((prevState) => !prevState))
  }
  return (
    <>
      <Switch checked={isActive} onChange={() => editStatusProducts(productId)} />
    </>
  )
}

export default ChangeStatusProduct
