import React, { useState } from 'react'
import { StyledCreateProduct } from './styles'
import BackToList from '@/components/reusable/backToList'
import Section from '@/components/reusable/islandSections'
import { StaticRoutes } from '../../../enums/StaticRoutes'
import ProductInformation from '@/components/products/create/productInformation'
import ProductFeature from '@/components/products/create/productFeature'
import Button from '@/components/UI/Button'
import { Box } from '@mui/material'

type informationType = {
  title: string
  wage: string
  minimumSoldMultiple: string
  staticNotice: string
  dynamicNotice: string
  featureGroups: string[]
  // producer: string /*تولیدکنندگان فعلا نداریم */
}
const DEFAULT_VALUES = {
  title: '',
  wage: '',
  minimumSoldMultiple: '',
  staticNotice: '',
  dynamicNotice: '',
  featureGroups: [],
}

const CreateProductPage = () => {
  const [data, setData] = useState<informationType>(DEFAULT_VALUES)
  const changeHandler = (value: string | number, key: string) => {
    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }
  const selectHandler = (value) => {
    setData((prevState) => ({
      ...prevState,
      featureGroups: [...prevState.featureGroups, value],
    }))
  }

  console.log(data)

  return (
    <StyledCreateProduct>
      <BackToList title={'ایجاد محصول'} link={StaticRoutes.PRODUCTS} />
      <Section title="اطلاعات عمومی">
        <ProductInformation data={data} changeHandler={changeHandler} />
      </Section>
      <Section title="ویژگی ها">
        <ProductFeature selectHandler={selectHandler} features={data.featureGroups} />
      </Section>
      <Box className="submit-button-container">
        <Button format="primary">مرحله بعد</Button>
      </Box>
    </StyledCreateProduct>
  )
}

export default CreateProductPage
