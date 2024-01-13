import React, { FC } from 'react'
import { StyledProductInformation } from '@/components/products/create/productInformation/styles'
import TextField from '@/components/UI/textField'

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
      <TextField
        label={'نام محصول'}
        placeholder="نام محصول خود را وارد کنید."
        value={data.title}
        onChange={(e) => changeHandler(e.target.value, 'title')}
      />
      <TextField
        label={'تولیدکننده کالا'}
        placeholder="نام تولیدکننده را وارد کنید."
        onChange={(e) => changeHandler(e.target.value, 'producer')}
      />
      <TextField
        label={'اجرت'}
        type="number"
        placeholder="اجرت را وارد کنید."
        value={data.wage}
        onChange={(e) => changeHandler(e.target.value, 'wage')}
      />
      <TextField
        label={'ضریب حداقل فروش'}
        type={'number'}
        placeholder="ضریب حداقل فروش  را وارد کنید."
        value={data.minimumSoldMultiple}
        onChange={(e) => changeHandler(e.target.value, 'minimumSoldMultiple')}
      />
      <TextField
        label={'توضیحات ثابت'}
        placeholder="توضیحات ثابت محصول خود را وارد کنید."
        value={data.staticNotice}
        onChange={(e) => changeHandler(e.target.value, 'staticNotice')}
      />
      <TextField
        label={'توضیحات متغیر'}
        placeholder="توضیحات متغیر را در صورت نیاز وارد کنید"
        value={data.dynamicNotice}
        onChange={(e) => changeHandler(e.target.value, 'dynamicNotice')}
      />
    </StyledProductInformation>
  )
}

export default ProductInformation
