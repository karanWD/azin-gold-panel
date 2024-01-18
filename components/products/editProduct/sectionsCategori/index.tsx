import { Box } from '@mui/material'
import UseFetch from 'hooks/useFetch'
import { FC } from 'react'
import { ApiRoutes } from 'enums/ApiRoutes'
import Section from '@/components/reusable/islandSections'
import Chip from '@/components/UI/chip'

type Props = {
  data: any
}
const SectionsCategori: FC<Props> = ({ data }) => {
  const { request } = UseFetch()

  const deleteCategoriProduct = (id) => {
    const newCategori = data.categories.filter((i) => i._id !== id)
    const values = {
      ...data,
      categories:newCategori
    }
    request({
      method: "PATCH",
      url: ApiRoutes.ADMIN_PRODUCTS + '/' + id ,
      data:values
    })
  }

  return (
    <Section title="دسته بندی‌ها">
        <Box className="items-box-sections">
            {
            data?.categories.map((i) => (
                <Chip key={i._id} format={'brandSecondary'} label={i?.title} handleDelete={() => deleteCategoriProduct(i._id)}/>
            ))
          }
        </Box>
    </Section>
  )
}

export default SectionsCategori
