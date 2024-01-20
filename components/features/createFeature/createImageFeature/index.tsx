import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { StyledCreateImage } from './styles'

type Props = {
  editFeature?: boolean
  setImageInput: any
}
const InputImageFeature: FC<Props> = ({ setImageInput }) => {
  return (
    <StyledCreateImage>
      <Typography className="title-input" variant="body3">
        عکس ویژگی
      </Typography>
      <Box className="upload-file-container">
        <Typography variant="body2" className="title">
          عکس محصول را وارد کنید.
        </Typography>
        <label htmlFor="file-input" className="upload-button">
          بارگذاری
        </label>
        <input
          multiple
          id="file-input"
          type="file"
          className="file-input"
          onChange={(e) => setImageInput((p) => [...p, e.target.files[0]])}
        />
      </Box>
    </StyledCreateImage>
  )
}

export default InputImageFeature
