import { Box } from '@mui/material'
import { FC } from 'react'
import Section from '@/components/reusable/islandSections'
import Chip from '@/components/UI/chip'
import { StyledSectionsDetails } from './styles'

type FeatureItemType = {
  _id: string
  title: string
}
type FeatureGroupType = {
  header: string
  features: FeatureItemType[]
}
type CategoriesGroupType = {
  title: string
  features: FeatureItemType[]
}

type Props = {
  data: {
    _id: string
    title: string
    featureGroups: FeatureGroupType[]
    categories: CategoriesGroupType[]
  }
}
const SectionsDetails: FC<Props> = ({ data }) => {
  return (
    <StyledSectionsDetails>
      <Section title="ویژگی‌ها">
        <Box className="items-box-sections">
          {data?.featureGroups.map((i, index) => <Chip key={'FEATURE_GROUP+ITEM_' + index} label={i.header} />)}
        </Box>
      </Section>
      <Section title="مشتری‌ها‌">
        <Box className="items-box-sections">
          {data?.categories.map((i, index) => <Chip key={'CATEGORY_ITEM_' + index} label={i.title} />)}
        </Box>
      </Section>
      <Section title="دسته بندی‌ها">
        <Box className="items-box-sections">
          {data?.categories.map((i, index) => <Chip key={'FEATURE_GROUP+ITEM_' + index} label={i.title} />)}
        </Box>
      </Section>
    </StyledSectionsDetails>
  )
}

export default SectionsDetails
