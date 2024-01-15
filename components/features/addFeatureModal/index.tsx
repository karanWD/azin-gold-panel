import React, { useState } from 'react'
import { Box, Modal, Typography } from '@mui/material'
import { StyledAddFeatureModal } from './styles'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import SelectHeaderFeature from '../selectHeaderFeature'

const AddFeatureModal = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <StyledAddFeatureModal>
      <Box className="box-child" onClick={() => setOpenModal(true)}>
        <AddCircleOutlineIcon className="add-features-icon" />
        <Typography className="add-features" variant="button1">
          افزودن ویژگی
        </Typography>
      </Box>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <SelectHeaderFeature closeHandler={() => setOpenModal(false)} />
      </Modal>
    </StyledAddFeatureModal>
  )
}

export default AddFeatureModal
