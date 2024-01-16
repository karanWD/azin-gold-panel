import React, { FC, useState } from 'react'
import Switch from '@/components/UI/switch'
import { ApiRoutes } from '../../../../enums/ApiRoutes'
import useFetch from '../../../../hooks/useFetch'

type Props = {
  status: boolean
  id: string
}
const SubProductsStatus: FC<Props> = ({ status, id }) => {
  const { request } = useFetch()
  const [isChecked, setIsChecked] = useState(status)
  const changeStatusHandler = () => {
    const newStatus = !isChecked
    request({
      method: 'PATCH',
      url: ApiRoutes.ADMIN_SUB_PRODUCTS + '/' + id,
      data: {
        isActive: newStatus,
      },
    }).then(() => {
      setIsChecked(newStatus)
    })
  }
  return <Switch checked={isChecked} onChange={changeStatusHandler} />
}

export default SubProductsStatus
