import React, { useEffect } from 'react'
import { StyledProductGroups } from './styles'
import BackToList from '@/components/reusable/backToList'
import SubProductsFields from '@/components/products/subproductsFields'
import useFetch from '../../../../hooks/useFetch'
import { ApiRoutes } from '../../../../enums/ApiRoutes'
import { useRouter } from 'next/router'
import SubproductsList from '@/components/products/subproductsList'

const ProductGroupsPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { request, response, loading } = useFetch()

  useEffect(() => {
    id &&
      request({
        url: ApiRoutes.ADMIN_PRODUCTS + '/' + id + '/combination?page=1',
      })
  }, [id])

  return (
    response &&
    !loading && (
      <StyledProductGroups>
        <BackToList title={'تکمیل اطلاعات محصول'} />
        <SubProductsFields fields={response?.product.featureGroups} />
        <SubproductsList data={response} />
      </StyledProductGroups>
    )
  )
}

export default ProductGroupsPage
