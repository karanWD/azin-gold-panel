import React, { FC, useState } from 'react'
import Image from 'next/image'
import { StyledActions } from '@/components/products/subproductsList/actions/styles'
import useFetch from '../../../../hooks/useFetch'
import { ApiRoutes } from '../../../../enums/ApiRoutes'
import { useRouter } from 'next/router'
import { CircularProgress, Modal } from '@mui/material'
import SubProductDeleteVerifyModal from '@/components/products/subproductsList/subProductDeleteVerifyModal'

type Props = {
  id: string
  updateHandler: (type: 'DELETE' | 'EDIT', id: string, value?: any) => void
}
const ListActions: FC<Props> = ({ id, updateHandler }) => {
  const { query } = useRouter()
  const { request, loading: deleteLoading } = useFetch()
  const [openModal, setOpenModal] = useState<'EDIT' | 'EDIT_IMAGES' | 'DELETE' | null>(null)

  const removeHandler = () => {
    request({
      method: 'DELETE',
      url: ApiRoutes.ADMIN_PRODUCTS + '/' + query.id + '/sub-product/' + id,
    }).then(() => {
      updateHandler('DELETE', id)
    })
  }

  const closeHandler = () => setOpenModal(null)

  return (
    <StyledActions>
      <Image
        // onClick={() => setEdit(true)}
        className="action-item"
        src={'/images/edit.svg'}
        alt={'edit'}
        width={24}
        height={24}
        layout="fixed"
      />
      {deleteLoading ? (
        <CircularProgress className="loading-icon" size={24} color="inherit" />
      ) : (
        <Image
          onClick={() => setOpenModal('DELETE')}
          className="action-item"
          src={'/images/delete.svg'}
          alt={'delete'}
          width={24}
          height={24}
          layout="fixed"
        />
      )}
      <Image
        // onClick={() => seteditGallery(true)}
        className="action-item"
        src={'/images/edit-gallery.svg'}
        alt={'edit-gallery'}
        width={24}
        height={24}
        layout="fixed"
      />

      <Modal open={!!openModal} onClose={closeHandler}>
        <SubProductDeleteVerifyModal verifyHandler={removeHandler} closeHandler={closeHandler} />
      </Modal>
    </StyledActions>
  )
}

export default ListActions
