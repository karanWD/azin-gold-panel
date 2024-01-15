import React, { FC, useState } from 'react'
import { StyledGalleryModal } from '@/components/products/imageGalleryModal/styles'
import { Box, Radio, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@/components/UI/button'
import Image from 'next/image'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded'

type GalleryType = {
  id: string
  name: string
  file: any
  thumbnail: boolean
}

type Props = {
  closeHandler: () => void
  submitHandler: (gallery: GalleryType[]) => void
}
const ImageGalleryModal: FC<Props> = ({ closeHandler, submitHandler }) => {
  const [images, setImages] = useState<GalleryType[]>([])
  const selectImageHandler = (e) => {
    const images = []
    for (const item of e.target.files) {
      images.push({
        id: Math.floor(Math.random() * (100 - 1) + 1) + item.name,
        name: item.name,
        file: item,
        thumbnail: false,
      })
    }
    setImages((prevState) => [...prevState, ...images])
  }

  const generateUrl = (file: any) => {
    if (window === undefined || !file) return
    return window.URL.createObjectURL(file)
  }

  const checkHandler = (id: string) => {
    const temp = [...images]
    for (const item of temp) {
      if (item.id === id) {
        item.thumbnail = true
      } else {
        item.thumbnail = false
      }
    }
    setImages(temp)
  }

  const removeHandler = (id: string) => {
    const filtered = images.filter((item) => item.id !== id)
    setImages(filtered)
  }

  return (
    <StyledGalleryModal>
      <Box className="gallery-container">
        <Box className="gallery-modal-header">
          <Typography variant="title4">انتخاب عکس</Typography>
          <CloseIcon onClick={closeHandler} />
        </Box>
        <Typography component="p" variant="body3">
          عکس محصول را بارگذاری کنید.
        </Typography>
        <Typography component="p" variant="body3">
          عکس محصول
        </Typography>
        <Box className="upload-file-container">
          <Typography variant="body2" className="title">
            عکس محصول را وارد کنید.
          </Typography>
          <label htmlFor="file-input" className="upload-button">
            بارگذاری
          </label>
          <input multiple id="file-input" type="file" className="file-input" onChange={selectImageHandler} />
        </Box>
        <Box className="preview-container">
          {images.map((item, index) => {
            return (
              <Box key={'IMAGE_ITEM_' + index} className="preview-items">
                <Image
                  src={generateUrl(item.file)}
                  alt={'image'}
                  width={142}
                  height={128}
                  layout="fixed"
                  className="image-preview"
                />
                <Box className="radio-button-container" onClick={() => checkHandler(item.id)}>
                  <Radio checked={item.thumbnail} className="radio-button" />
                </Box>
                <Box className="delete-button-container" onClick={() => removeHandler(item.id)}>
                  <DeleteOutlineRoundedIcon className="delete-button" />
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>

      <Box className="gallery-modal-footer">
        <Button width="fit-content" size="large" format={'primary'} onClick={() => submitHandler(images)}>
          ثبت
        </Button>
      </Box>
    </StyledGalleryModal>
  )
}

export default ImageGalleryModal
