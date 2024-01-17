import { Box } from '@mui/material'
import { FC } from 'react'
import Section from '@/components/reusable/islandSections'
import Chip from '@/components/UI/chip'
import { StyledSectionsDetails } from './styles'

type Props = {
  data: any
}
const SectionsDetails: FC<Props> = ({ data }) => {
  return (
    <StyledSectionsDetails>
      <Section title="ویژگی‌ها">
        <Box className="items-box-sections">{data?.featureGroups.map((i) => <Chip label={i.header} />)}</Box>
      </Section>
      <Section title="مشتری‌ها‌">
        <Box className="items-box-sections">{data?.categories.map((i) => <Chip label={i.title} />)}</Box>
      </Section>
      <Section title="دسته بندی‌ها">
        <Box className="items-box-sections">{data?.categories.map((i) => <Chip label={i.title} />)}</Box>
      </Section>
    </StyledSectionsDetails>
  )
}

export default SectionsDetails
