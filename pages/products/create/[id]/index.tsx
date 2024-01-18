import React, { useEffect, useState } from 'react'
import { StyledProductGroups } from './styles'
import BackToList from '@/components/reusable/backToList'
import SubProductsFields from '@/components/products/subproductsFields'
import useFetch from '../../../../hooks/useFetch'
import { ApiRoutes } from '../../../../enums/ApiRoutes'
import { useRouter } from 'next/router'
import SubproductsList from '@/components/products/subproductsList'
import PaginationWrapper from '@/components/reusable/pagination'
import Button from '@/components/UI/button'
import { StaticRoutes } from '../../../../enums/StaticRoutes'
import { Box } from '@mui/material'

const ProductGroupsPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { request, response, loading } = useFetch()
  const [page, setPage] = useState<number>(1)

  const updateHandler = (id: string, page) => {
    request({
      url: ApiRoutes.ADMIN_PRODUCTS + '/' + id + '/combination?page=' + page,
    })
  }

  useEffect(() => {
    id && updateHandler(id as string, page)
  }, [id, page])

  return (
    response &&
    !loading && (
      <StyledProductGroups>
        <BackToList title={'تکمیل اطلاعات محصول'} />
        <SubProductsFields
          fields={response?.product.featureGroups}
          categories={response?.product.categories}
          updateHandler={() => updateHandler(id as string, 1)}
        />
        <SubproductsList data={response} />
        <PaginationWrapper page={page} total={response.totalPages} onChange={(value) => setPage(value)} />
        <Box className="button-container">
          <Button width="132px" size="large" format="primary" onClick={() => router.push(StaticRoutes.PRODUCTS)}>
            ثبت محصول
          </Button>
        </Box>
      </StyledProductGroups>
    )
  )
}

export default ProductGroupsPage
