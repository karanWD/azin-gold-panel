import { Box, Typography } from '@mui/material'
import { StyledDetailsProductPage } from './styles'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import UseFetch from 'hooks/useFetch'
import { useEffect, useState } from 'react'
import { ApiRoutes } from 'enums/ApiRoutes'
import DataProductSection from './dataProductSection'
import HeaderDetails from './headerDetails'
import SectionsDetails from './sectionsDetails'
import SubproductsList from '../subproductsList'
import PaginationWrapper from '@/components/reusable/pagination'

const DetailsProductComponents: NextPage = () => {
  const router = useRouter()
  const { request, response } = UseFetch()
  const [page, setPage] = useState<number>(1)

  const updateHandler = (id: string, page) => {
    request({
      url: ApiRoutes.ADMIN_PRODUCTS + '/' + id + '/info?page=' + page,
    })
  }
  const { id } = router.query

  useEffect(() => {
    id && updateHandler(id as string, page)
  }, [id, page])

  return (
    response && (
      <StyledDetailsProductPage>
        <HeaderDetails id={id as string} />
        <Box className="box-sell">
          <Box className="value-sell">
            <Typography className="title-box-sell" variant="caption">
              مقدار فروش کل
            </Typography>
          </Box>
          <Box className="value-sell">
            <Typography className="title-box-sell" variant="caption">
              مقدار فروش ماه
            </Typography>
          </Box>
          <Box className="value-sell">
            <Typography className="title-box-sell" variant="caption">
              تعداد فروش
            </Typography>
          </Box>
        </Box>
        <DataProductSection data={response?.product} />
        <SectionsDetails data={response?.product} />
        <SubproductsList data={response} detailsMode={true} />
        <PaginationWrapper page={page} total={response?.totalPages} onChange={(value) => setPage(value)} />
      </StyledDetailsProductPage>
    )
  )
}

export default DetailsProductComponents
