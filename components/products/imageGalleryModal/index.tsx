import React, { FC } from 'react'
import { StyledGalleryModal } from '@/components/products/imageGalleryModal/styles'
import { Box, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@/components/UI/button'

type Props = {
  closeHandler: () => void
}
const ImageGalleryModal: FC<Props> = ({ closeHandler }) => {
  // const [images, setImages] = useState([])
  // const selectImageHandler = (e) => {
  //   // var file = e.originalEvent.srcElement.files[i]
  //   setImages((prevState) => [...prevState, ...e.target.files])
  // }

  return (
    <StyledGalleryModal>
      <Box>
        <Box className="gallery-modal-header">
          <Typography variant="title4">انتخاب عکس</Typography>
          <CloseIcon onClick={closeHandler} />
        </Box>
        <Typography className="description" component="p" variant="body3">
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
          <input
            multiple
            id="file-input"
            type="file"
            className="file-input"
            // onChange={selectImageHandler}
          />
        </Box>
      </Box>

      {/*<Box>*/}
      {/*  {images.map((item, index) => {*/}
      {/*    return <Image src={URL.createObjectURL(item.file)} alt={'image'} />*/}
      {/*  })}*/}
      {/*</Box>*/}

      <Box className="gallery-modal-footer">
        <Button width="fit-content" size="large" format={'primary'}>
          ثبت
        </Button>
      </Box>
    </StyledGalleryModal>
  )
}

export default ImageGalleryModal
