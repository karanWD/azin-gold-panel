import React, { FC, useEffect } from 'react'
import useFetch from '../../../../hooks/useFetch'
import { ApiRoutes } from '../../../../enums/ApiRoutes'
import { StyledProductFeature } from '@/components/products/create/productFeature/styles'
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { DisplayModes } from '../../../../data/DisplayModes'

type Props = {
  selectHandler: (value: string) => void
  features: string[]
}
const ProductFeature: FC<Props> = ({ selectHandler }) => {
  const { response, request } = useFetch()
  const changeHandler = (value) => selectHandler(value)

  useEffect(() => {
    request({
      url: ApiRoutes.ADMIN_FEATURES,
    })
  }, [])

  return (
    response?.featureGroups && (
      <StyledProductFeature>
        <FormControl className="feature-select" size="small">
          <InputLabel id="demo-select-small-label">
            <Typography variant="body3">ویژگی مورد نظر خود را انتخاب کنید.</Typography>
          </InputLabel>
          <Select
            value=""
            label={'ویژگی مورد نظر خود را انتخاب کنید.'}
            className="select-status-container"
            size={'small'}
            MenuProps={{
              sx: {
                '& .MuiOutlinedInput-notchedOutline': {
                  display: 'none',
                },
                '& .MuiPaper-root': {
                  maxHeight: '320px',
                },
                '& .MuiButtonBase-root': {
                  width: '100%',
                },
                '& .options-container': {
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                },
                '& .Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'text.white',
                },
              },
            }}
            onChange={(e) => changeHandler(e.target.value)}>
            {response.featureGroups.map((item, index) => {
              return (
                <MenuItem key={'FEATURE_GROUP_' + index} value={item._id}>
                  <Box className="options-container">
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
          </Select>
        </FormControl>
        <Box></Box>
      </StyledProductFeature>
    )
  )
}

export default ProductFeature
