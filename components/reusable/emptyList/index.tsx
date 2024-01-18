import React, { FC } from 'react'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { StyledEmptyList } from '@/components/reusable/emptyList/styles'

type Props = {
  title: string
}
const EmptyList: FC<Props> = ({ title }) => {
  return (
    <StyledEmptyList>
      <Image src={'/images/empty-list.png'} alt={'empty-list'} height={64} width={64} />
      <Typography variant="title4">{title}</Typography>
    </StyledEmptyList>
  )
}

export default EmptyList
