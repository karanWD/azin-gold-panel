import React, { FC } from 'react'
import { StyledProductInformation } from '@/components/products/create/productInformation/styles'
import TextField from '@/components/UI/textField'
import { Box } from '@mui/material'

type Props = {
  errors?: { [key: string]: boolean }
  data: {
    title: string
    wage: number |string
    minimumSoldMultiple: number |string
    staticNotice: string
    dynamicNotice: string
    // producer: string /*تولیدکنندگان فعلا نداریم */
  }
  changeHandler: (value: string | number, key: string) => void
}
const ProductInformation: FC<Props> = ({ data, changeHandler, errors }) => {
  return (
    <StyledProductInformation>
      <Box className="field-item">
        <TextField
          size="small"
          label={'نام محصول'}
          placeholder="نام محصول خود را وارد کنید."
          value={data.title}
          error={errors?.title}
          helperText={errors?.title && 'نام محصول اجباری است'}
          onChange={(e) => changeHandler(e.target.value, 'title')}
        />
      </Box>
      <Box className="field-item">
        <TextField
          size="small"
          label={'تولیدکننده کالا'}
          placeholder="نام تولیدکننده را وارد کنید."
          onChange={(e) => changeHandler(e.target.value, 'producer')}
        />
      </Box>
      <Box className="field-item">
        <TextField
          size="small"
          label={'اجرت'}
          type="number"
          placeholder="اجرت را وارد کنید."
          value={data.wage}
          inputProps={{ min: 0, max: 2 }}
          error={errors?.wage}
          helperText={errors?.wage && 'اجرت اجباری است.'}
          onChange={(e) => changeHandler(e.target.value, 'wage')}
        />
      </Box>
      <Box className="field-item">
        <TextField
          size="small"
          label="ضریب حداقل فروش"
          type="number"
          placeholder="ضریب حداقل فروش  را وارد کنید."
          value={data.minimumSoldMultiple}
          error={errors?.minimumSoldMultiple}
          helperText={errors?.minimumSoldMultiple && 'ضریب حداقل فروش باید بیش از 1 باشد.'}
          onChange={(e) => changeHandler(e.target.value, 'minimumSoldMultiple')}
        />
      </Box>
      <Box className="field-item">
        <TextField
          size="small"
          label={'توضیحات ثابت'}
          placeholder="توضیحات ثابت محصول خود را وارد کنید."
          value={data.staticNotice}
          onChange={(e) => changeHandler(e.target.value, 'staticNotice')}
        />
      </Box>
      <Box className="field-item">
        <TextField
          size="small"
          label={'توضیحات متغیر'}
          placeholder="توضیحات متغیر را در صورت نیاز وارد کنید"
          value={data.dynamicNotice}
          onChange={(e) => changeHandler(e.target.value, 'dynamicNotice')}
        />
      </Box>
    </StyledProductInformation>
  )
}

export default ProductInformation
