import React, { FC } from 'react'
import { StyledSubproductsList } from '@/components/products/subproductsList/styles'

type FeatureItemType = {
  _id: string
  title: string
}
type FeatureGroupType = {
  header: string
  features: FeatureItemType[]
}
type SubProductType = {
  _id: string
  weight: number
  isActive: boolean
  createdAt: string
  index: number
  features: FeatureItemType[]
}
type Props = {
  data: {
    product: {
      _id: string
      title: string
      featureGroups: FeatureGroupType[]
    }
    subProducts: SubProductType[]
  }
}

// const generateTitles = (data: FeatureGroupType[]) => {
//   const featureTitles = data?.map((item) => item.header)
//   return ['ردیف', ...featureTitles, 'وزن', 'فعال/غیرفعال', 'عملیات']
// }

// const generateData = (list: SubProductType[]) => {
//     const featuresItems = list.features.map((featItem, index) => (
//       <Typography key={'FEATURE_ITEM_' + index} variant="body3">
//         {featItem.title}
//       </Typography>
//     ))
//
//   const baseItems = list.{
//
//   }
//
//     return {
//
//       ...res,
//     }
//   return list.map((item) => generateTypo(item, item.features))
// }

const SubproductsList: FC<Props> = () => {
  return (
    <StyledSubproductsList>
      {/*<Table*/}
      {/*  data={generateData(data?.subProducts) as any}*/}
      {/*  headings={generateTitles(data?.product?.featureGroups)}*/}
      {/*/>*/}
    </StyledSubproductsList>
  )
}

export default SubproductsList
