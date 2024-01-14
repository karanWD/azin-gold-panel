import React, { FC, ReactNode } from 'react'
import { StyledBody } from './styles'
import Table from '../../../components/UI/table'
import TableSkeleton from '../../../components/skeleton/tableSkeleton/tableSkeleton'
import { Box, Pagination, PaginationItem } from '@mui/material'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'

type Props = {
  data: { [key: string]: string | number | boolean | ReactNode }[]
  page: number
  totalPages: number
  setPage: (value: number) => void
  loading: boolean
  tableHeading: Array<string>
}
const PageBody: FC<Props> = ({ data, page, totalPages, setPage, loading, tableHeading }) => {
  return (
    <StyledBody>
      {loading || !data ? (
        <TableSkeleton />
      ) : (
        <>
          <Table headings={tableHeading} data={data} />
          {totalPages > 1 && (
            <Box className="pagination-container">
              <Pagination
                color="primary"
                count={totalPages}
                page={page}
                onChange={(_, value) => setPage(value)}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{
                      previous: KeyboardArrowRightRoundedIcon,
                      next: KeyboardArrowLeftRoundedIcon,
                    }}
                    {...item}
                  />
                )}
              />
            </Box>
          )}
        </>
      )}
    </StyledBody>
  )
}

export default PageBody
