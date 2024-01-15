import React, { FC, useState } from 'react'
import { StyledSubproductFields } from '@/components/products/subproductsFields/styles'
import { Box, Divider, MenuItem, Modal, Typography } from '@mui/material'
import Select from '@/components/UI/select'
import TextField from '@/components/UI/textField'
import Button from '@/components/UI/button'
import Image from 'next/image'
import useFetch from '../../../hooks/useFetch'
import { useRouter } from 'next/router'
import ImageGalleryModal from '@/components/products/imageGalleryModal'
import { ApiRoutes } from '../../../enums/ApiRoutes'

type GalleryType = {
  id: string
  name: string
  file: any
  thumbnail: boolean
}

type FeatureGroupType = {
  header: string
  features: { _id: string; title: string }[]
}
type Props = {
  fields: FeatureGroupType[]
  updateHandler: () => void
}
const SubProductsFields: FC<Props> = ({ fields, updateHandler }) => {
  const { query } = useRouter()
  const { request, loading } = useFetch()
  const [fieldData, setFieldData] = useState({})
  const [imageModal, setImageModal] = useState(false)

  const selectHandler = (value: string | number, key: string) => {
    setFieldData((prev) => ({ ...prev, [key]: value }))
  }

  const submitGalleryHandler = (gallery: GalleryType[]) => {
    setFieldData((prev) => ({
      ...prev,
      thumbnailIndex: gallery.findIndex((item) => item.thumbnail === true),
      images: gallery.map((item) => item.file),
    }))
    setImageModal(false)
  }

  const submitHandler = () => {
    let index = 0
    const formData = new FormData()

    formData.append('category', fieldData['نوع محصول'])
    formData.append('weight', fieldData['weight'])
    formData.append('thumbnailIndex', fieldData['thumbnailIndex'])
    formData.append('images', fieldData['images'])
    for (const item in fieldData) {
      if (item !== 'نوع محصول' && item !== 'weight' && item !== 'thumbnailIndex' && item !== 'images') {
        formData.append(`features[${index}]`, fieldData[item])
        index++
      }
    }

    request({
      url: ApiRoutes.ADMIN_PRODUCTS + '/' + query.id + '/combination',
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    }).then(() => updateHandler())
  }

  return (
    <StyledSubproductFields>
      <Box className="field-titles">
        {fields?.map((item, index) => (
          <Box className="field-titles-item" key={'HEADING_TITLE_' + index}>
            <Typography variant="body3">{item.header}</Typography>
            <Divider className="divider" />
            <Box className="field-body">
              <Select
                width={'100%'}
                changeHandler={(value) => selectHandler(value, item.header)}
                value={fieldData[item.header]}
                placeHolder="انتخاب کنید">
                {item.features.map((featureItem, index) => (
                  <MenuItem key={'FEATURE_GROUP_' + index} value={featureItem._id}>
                    <Box className={`options-container`}>
                      <Typography className="product-feature-options" variant={'button2'}>
                        {featureItem.title}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
        ))}
        <Box className="field-titles-item">
          <Typography variant="body3">وزن</Typography>
          <Divider className="divider" />
          <Box className="field-body">
            <TextField
              label={''}
              value={fieldData['weight']}
              type={'number'}
              onChange={(e) => selectHandler(+e.target.value, 'weight')}
            />
          </Box>
        </Box>
        <Box className="field-actions">
          <Box onClick={() => setImageModal(true)}>
            <Image src={'/images/add-image.svg'} alt={'add-image'} width={24} height={24} layout="fixed" />
          </Box>
          <Box>
            <Button loading={loading} format={'primary'} onClick={submitHandler}>
              ثبت
            </Button>
          </Box>
        </Box>
      </Box>
      <Modal open={imageModal} onClose={() => setImageModal(false)}>
        <ImageGalleryModal closeHandler={() => setImageModal(false)} submitHandler={submitGalleryHandler} />
      </Modal>
    </StyledSubproductFields>
  )
}

export default SubProductsFields
