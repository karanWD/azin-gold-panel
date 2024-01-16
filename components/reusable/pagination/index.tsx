import React, { FC } from 'react'
import { StyledPagination } from '@/components/reusable/pagination/styles'
import { Pagination, PaginationItem } from '@mui/material'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'

type Props = {
  page: number
  total: number
  onChange: (values: number) => void
}
const PaginationWrapper: FC<Props> = ({ page, total, onChange }) => {
  return (
    total > 1 && (
      <StyledPagination>
        <Pagination
          count={total}
          page={page}
          onChange={(_, value) => {
            onChange(value)
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }, 1000)
          }}
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
      </StyledPagination>
    )
  )
}

export default PaginationWrapper
