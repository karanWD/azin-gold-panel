import { Box } from '@mui/material'
import UseFetch from 'hooks/useFetch'
import { FC } from 'react'
import { ApiRoutes } from 'enums/ApiRoutes'
import Section from '@/components/reusable/islandSections'
import Chip from '@/components/UI/chip'

type Props = {
  data: any
}
const SectionsFeatures: FC<Props> = ({ data }) => {

  return (
    <Section title="ویژگی‌ها">
    <Box className="items-box-sections">
      {
        data?.featureGroups.map((i) => (
            <Chip key={i} format={'brandSecondary'} label={i?.header} />
        ))
      }
    </Box>
  </Section>
  )
}

export default SectionsFeatures
