import React, { FC } from 'react'
import { StyledProductInformation } from '@/components/products/create/productInformation/styles'
import TextField from '@/components/UI/textField'
import { Box } from '@mui/material'

type Props = {
  data: {
    title: string
    wage: string
    minimumSoldMultiple: string
    staticNotice: string
    dynamicNotice: string
    // producer: string /*تولیدکنندگان فعلا نداریم */
  }
  changeHandler: (value: string | number, key: string) => void
}
const ProductInformation: FC<Props> = ({ data, changeHandler }) => {
  return (
    <StyledProductInformation>
      <Box className="field-item">
        <TextField
          label={'نام محصول'}
          placeholder="نام محصول خود را وارد کنید."
          value={data.title}
          onChange={(e) => changeHandler(e.target.value, 'title')}
        />
      </Box>
      <Box className="field-item">
        <TextField
          label={'تولیدکننده کالا'}
          placeholder="نام تولیدکننده را وارد کنید."
          onChange={(e) => changeHandler(e.target.value, 'producer')}
        />
      </Box>
      <Box className="field-item">
        <TextField
          label={'اجرت'}
          type="number"
          placeholder="اجرت را وارد کنید."
          value={data.wage}
          inputProps={{ min: 0, max: 2 }}
          onChange={(e) => changeHandler(e.target.value, 'wage')}
        />
      </Box>
      <Box className="field-item">
        <TextField
          label="ضریب حداقل فروش"
          type="number"
          placeholder="ضریب حداقل فروش  را وارد کنید."
          value={data.minimumSoldMultiple}
          onChange={(e) => changeHandler(e.target.value, 'minimumSoldMultiple')}
        />
      </Box>
      <Box className="field-item">
        <TextField
          label={'توضیحات ثابت'}
          placeholder="توضیحات ثابت محصول خود را وارد کنید."
          value={data.staticNotice}
          onChange={(e) => changeHandler(e.target.value, 'staticNotice')}
        />
      </Box>
      <Box className="field-item">
        <TextField
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
