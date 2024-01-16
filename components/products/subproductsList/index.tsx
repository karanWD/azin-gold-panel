import React, { FC } from 'react'
import { StyledSubproductsList } from '@/components/products/subproductsList/styles'
import Table from '@/components/UI/table'
import ListActions from '@/components/products/subproductsList/actions'
import SubProductsStatus from '@/components/products/subproductsList/subProductsStatus'

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

const generateTitles = (data: FeatureGroupType[]) => {
  const featureTitles = data?.map((item) => item.header)
  return ['ردیف', ...featureTitles, 'وزن', 'دسته‌بندی', 'فعال/غیرفعال', 'عملیات']
}

const generateData = (list) => {
  const res = []
  for (const item of list) {
    let temp = {}
    temp = {
      _index: item.index,
    }
    for (const featItem of item.features) {
      temp = {
        ...temp,
        [featItem.title]: featItem.title,
      }
    }
    temp = {
      ...temp,
      _weight: `${item.weight}گرم`,
      category: item.category?.title ? item.category?.title : 'ثبت نشده است',
      _isActive: <SubProductsStatus status={item.isActive} id={item._id} />,
      actions: <ListActions />,
    }
    res.push(temp)
  }
  return res
}

const SubproductsList: FC<Props> = ({ data }) => {
  return (
    <StyledSubproductsList>
      <Table data={generateData(data?.subProducts) as any} headings={generateTitles(data?.product?.featureGroups)} />
    </StyledSubproductsList>
  )
}

export default SubproductsList
