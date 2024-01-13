import React, { useState } from 'react'
import { StyledCreateProduct } from './styles'
import BackToList from '@/components/reusable/backToList'
import Section from '@/components/reusable/islandSections'
import { StaticRoutes } from '../../../enums/StaticRoutes'
import ProductInformation from '@/components/products/create/productInformation'
import ProductFeature from '@/components/products/create/productFeature'
import Button from 'components/UI/button'
import { Box } from '@mui/material'
import ProductFeatureList from '@/components/products/create/productFeaturesList'
import { DISPLAY_MODES } from '../../../enums/DisplayModes'
import useFetch from '../../../hooks/useFetch'
import { ApiRoutes } from '../../../enums/ApiRoutes'
import { toast } from 'react-toastify'

type FeatureGroupType = {
  createdAt: string
  displayMode: DISPLAY_MODES
  features: { title: string; sequence: number }[]
  header: string
  index: number
  updatedAt: string
  _id: string
}

type informationType = {
  title: string
  wage: string
  minimumSoldMultiple: string
  staticNotice: string
  dynamicNotice: string
  featureGroups: FeatureGroupType[]
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
  const { request, loading } = useFetch()
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

  const deleteHandler = (id) => {
    const copy = [...data.featureGroups]
    const filteredFeatures = copy.filter((item) => item._id !== id)
    setData((prev) => ({ ...prev, featureGroups: [...filteredFeatures] }))
  }

  const submitHandler = () => {
    request({
      url: ApiRoutes.ADMIN_PRODUCTS,
      data: {
        ...data,
        featureGroups: data.featureGroups.map((item) => item._id),
      },
    }).then(() => {
      toast.success('محصول با موفقیت افزوده شد.')
    })
  }

  return (
    <StyledCreateProduct>
      <BackToList title={'ایجاد محصول'} link={StaticRoutes.PRODUCTS} />
      <Section title="اطلاعات عمومی">
        <ProductInformation data={data} changeHandler={changeHandler} />
      </Section>
      <Section title="ویژگی ها">
        <ProductFeature selectHandler={selectHandler} selectedFeatures={data.featureGroups} />
        <br />
        <ProductFeatureList list={data.featureGroups} deleteHandler={deleteHandler} />
      </Section>
      <Box className="submit-button-container">
        <Button width="114px" format="primary" onClick={submitHandler} loading={loading}>
          مرحله بعد
        </Button>
      </Box>
    </StyledCreateProduct>
  )
}

export default CreateProductPage
