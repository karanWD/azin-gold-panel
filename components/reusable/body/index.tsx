import React, { FC, ReactNode } from 'react'
import { StyledBody } from './styles'
import Table from '../../../components/UI/table'
import TableSkeleton from '../../../components/skeleton/tableSkeleton/tableSkeleton'
import EmptyList from '@/components/reusable/emptyList'
import { Box } from '@mui/material'

type Props = {
  data: { [key: string]: string | number | boolean | ReactNode }[]
  loading: boolean
  tableHeading: Array<string>
}
const PageBody: FC<Props> = ({ data, loading, tableHeading }) => {
  return (
    <StyledBody>
      {loading || !data ? (
        <TableSkeleton />
      ) : data.length === 0 ? (
        <Box className="empty-list-container">
          <EmptyList title="لیست خالی است و موردی برای نمایش وجود ندارد" />
        </Box>
      ) : (
        <Table headings={tableHeading} data={data} />
      )}
    </StyledBody>
  )
}

export default PageBody
