import { Box } from '@mui/material'
import { FC } from 'react'
import Section from '@/components/reusable/islandSections'
import Chip from '@/components/UI/chip'
import { StyledSectionCategori } from './styles'

type Props = {
  data: {
    categories: { _id: string; title: string }[]
  }
}
const SectionsCategori: FC<Props> = ({ data }) => {
  // const { request } = UseFetch() / for delete categori

  // const deleteCategoriProduct = (id) => {
  //   const newCategori = data.categories.filter((i) => i._id !== id)
  //   const values = {
  //     ...data,
  //     categories:newCategori
  //   }
  //   request({
  //     method: "PATCH",
  //     url: ApiRoutes.ADMIN_PRODUCTS + '/' + id ,
  //     data:values
  //   })
  // }

  return (
    <StyledSectionCategori>
      <Section title="دسته بندی‌ها">
        <Box className="items-box-sections">
          {data?.categories.map((i) => (
            <Chip key={i._id} format={'brandSecondary'} label={i?.title} handleDelete={() => {}} />
          ))}
        </Box>
      </Section>
    </StyledSectionCategori>
  )
}

export default SectionsCategori
