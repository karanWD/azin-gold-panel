import React, { FC } from 'react'
import Chip from '@/components/UI/chip'
import { StyledFeaturesList } from '@/components/products/create/productFeaturesList/styles'
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
  list: FeatureGroupType[]
  deleteHandler: (id: string) => void
}
const ProductFeatureList: FC<Props> = ({ list, deleteHandler }) => {
  return (
    <StyledFeaturesList>
      {list.map((item, index) => (
        <Chip
          key={'FEATURES_LIST_ITEM_' + index}
          label={item.header}
          handleDelete={() => deleteHandler(item._id)}
        />
      ))}
    </StyledFeaturesList>
  )
}

export default ProductFeatureList
