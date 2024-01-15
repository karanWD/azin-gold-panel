import React, { FC, useEffect } from 'react'
import useFetch from '../../../../hooks/useFetch'
import { ApiRoutes } from '../../../../enums/ApiRoutes'
import { StyledProductFeature } from '@/components/products/create/productFeature/styles'
import { Box, MenuItem, Typography } from '@mui/material'
import { DisplayModes } from '../../../../data/DisplayModes'
import SelectBox from '@/components/UI/select'
import { DISPLAY_MODES } from '../../../../enums/DisplayModes'

type FeatureGroupType = {
  createdAt: string
  displayMode: DISPLAY_MODES
  features: { title: string; sequence: number }[]
  header: string
  index: number
  updatedAt: string
  _id: string
}

type Props = {
  selectHandler: (value: string) => void
  selectedFeatures: FeatureGroupType[]
}
const ProductFeature: FC<Props> = ({ selectHandler, selectedFeatures }) => {
  const { response, request } = useFetch()
  const changeHandler = (value) => {
    const target = response?.featureGroups.find((item) => item._id === value)
    selectHandler(target)
  }

  useEffect(() => {
    request({
      url: ApiRoutes.ADMIN_FEATURES,
    })
  }, [])

  return (
    response?.featureGroups && (
      <StyledProductFeature>
        <SelectBox
          width={'340px'}
          value=""
          label={'ویژگی‌ها'}
          changeHandler={changeHandler}
          placeHolder={'ویژگی مورد نظر خود را انتخاب کنید.'}>
          {response.featureGroups.map((item, index) => {
            const isDisabled = !!selectedFeatures.find(
              (selectedItem) => selectedItem._id === item._id
            )
            return (
              <MenuItem key={'FEATURE_GROUP_' + index} value={item._id} disabled={isDisabled}>
                <Box className={`options-container ${isDisabled ? 'option-disabled' : ''}`}>
                  <Typography className="product-feature-options" variant={'button2'}>
                    {item.header}
                  </Typography>
                  <Typography className="product-feature-options" variant={'body3'}>
                    {DisplayModes[item.displayMode].text}
                  </Typography>
                </Box>
              </MenuItem>
            )
          })}
        </SelectBox>
      </StyledProductFeature>
    )
  )
}

export default ProductFeature
