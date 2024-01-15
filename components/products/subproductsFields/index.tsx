import React, { FC, useState } from 'react'
import { StyledSubproductFields } from '@/components/products/subproductsFields/styles'
import { Box, Divider, MenuItem, Typography } from '@mui/material'
import Select from '@/components/UI/select'
import TextField from '@/components/UI/textField'
import Button from '@/components/UI/button'
import Image from 'next/image'

type FeatureGroupType = {
  header: string
  features: { _id: string; title: string }[]
}
type Props = {
  fields: FeatureGroupType[]
}
const SubProductsFields: FC<Props> = ({ fields }) => {
  const [fieldData, setFieldData] = useState({})
  const selectHandler = (value: string | number, key: string) => {
    setFieldData((prev) => ({ ...prev, [key]: value }))
  }

  const addImageHandler = () => {}

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
          <Box onClick={addImageHandler}>
            <Image
              src={'/images/add-image.svg'}
              alt={'add-image'}
              width={24}
              height={24}
              layout="fixed"
            />
          </Box>
          <Box>
            <Button format={'primary'}>ثبت</Button>
          </Box>
        </Box>
      </Box>
    </StyledSubproductFields>
  )
}

export default SubProductsFields
