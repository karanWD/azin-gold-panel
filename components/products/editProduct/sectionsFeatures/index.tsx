import { Box } from '@mui/material'
import { StyledSectionFeatures } from './styles'
import { FC } from 'react'
import Section from '@/components/reusable/islandSections'
import Chip from '@/components/UI/chip'

type Props = {
  data: {
    featureGroups: { _id: string; header: string }[]
  }
}
const SectionsFeatures: FC<Props> = ({ data }) => {
  return (
    <StyledSectionFeatures>
      <Section title="ویژگی‌ها">
        <Box className="items-box-sections">
          {data?.featureGroups.map((i) => <Chip key={i._id} format={'brandSecondary'} label={i?.header} />)}
        </Box>
      </Section>
    </StyledSectionFeatures>
  )
}

export default SectionsFeatures
