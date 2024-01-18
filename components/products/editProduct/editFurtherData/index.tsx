import React, { useEffect, useState } from 'react'
import { StyledProductGroups } from './styles'
import BackToList from '@/components/reusable/backToList'
import useFetch from '../../../../hooks/useFetch'
import { ApiRoutes } from '../../../../enums/ApiRoutes'
import { useRouter } from 'next/router'
import SubproductsList from '@/components/products/subproductsList'
import PaginationWrapper from '@/components/reusable/pagination'

const EditFurtherProductComponent = () => {
  const router = useRouter()
  const { id } = router.query
  const { request, response, loading } = useFetch()
  const [page, setPage] = useState<number>(1)

  const updateHandler = (id: string, page) => {
    request({
      url: ApiRoutes.ADMIN_PRODUCTS + '/' + id + '/sub-products?page=' + page,
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
        <SubproductsList data={response} />
        <PaginationWrapper page={page} total={response.totalPages} onChange={(value) => setPage(value)} />
      </StyledProductGroups>
    )
  )
}

export default EditFurtherProductComponent
