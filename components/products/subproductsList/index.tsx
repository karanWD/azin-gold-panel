import React, { FC, useState } from 'react'
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
  detailsMode?: boolean
}

const generateTitles = (data: FeatureGroupType[], detailsMode) => {
  const featureTitles = data?.map((item) => item.header)
  return ['ردیف', ...featureTitles, 'وزن', 'دسته‌بندی', 'فعال/غیرفعال', !detailsMode ? 'عملیات' : null]
}

const generateData = (list, updateHandler, detailsMode) => {
  const res = []
  for (const item of list) {
    let temp = {}
    temp = {
      _index: item.index,
    }
    //feature items that we get dynamically
    for (const featItem of item.features) {
      temp = {
        ...temp,
        [featItem.title]: featItem.title,
      }
    }
    //constant items that we have them always
    temp = {
      ...temp,
      _weight: `${item.weight}گرم`,
      category: item.category?.title ? item.category?.title : 'ثبت نشده است',
      _isActive: <SubProductsStatus status={item.isActive} id={item._id} />,
      actions: !detailsMode ? <ListActions id={item._id} updateHandler={updateHandler} /> : null,
    }
    res.push(temp)
  }
  return res
}

const SubproductsList: FC<Props> = ({ data, detailsMode }) => {
  const [tableData, setTableData] = useState<SubProductType[]>(data.subProducts)
  const updateListHandler = (type: 'DELETE' | 'EDIT', id: string, value?: any) => {
    console.log(value)
    if (type === 'DELETE') {
      setTableData((prevState) => prevState.filter((item) => item._id !== id))
    }
  }
  return (
    <StyledSubproductsList>
      <Table
        data={generateData(tableData, updateListHandler, detailsMode)}
        headings={generateTitles(data?.product?.featureGroups, detailsMode)}
      />
    </StyledSubproductsList>
  )
}

export default SubproductsList
