import React, { FC, ReactNode } from 'react'
import { StyledBody } from './styles'
import Table from '../../../components/UI/table'
import TableSkeleton from '../../../components/skeleton/tableSkeleton/tableSkeleton'

type Props = {
  data: { [key: string]: string | number | boolean | ReactNode }[]
  loading: boolean
  tableHeading: Array<string>
}
const PageBody: FC<Props> = ({ data, loading, tableHeading }) => {
  return <StyledBody>{loading || !data ? <TableSkeleton /> : <Table headings={tableHeading} data={data} />}</StyledBody>
}

export default PageBody
