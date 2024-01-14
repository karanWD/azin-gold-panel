import React, { FC } from 'react'
import { Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East'
import { StyledBackToList } from '@/components/reusable/backToList/styles'
import { useRouter } from 'next/router'
import { StaticRoutes } from '../../../enums/StaticRoutes'

type Props = {
  title: string
  link?: StaticRoutes
}
const BackToList: FC<Props> = ({ title, link }) => {
  const router = useRouter()

  return (
    <StyledBackToList>
      <Typography
        variant="body3"
        className="back-button"
        onClick={() => (link ? router.push(link) : router.back())}>
        <EastIcon />
        بازگشت به لیست
      </Typography>
      <Typography variant="title2" className="order-detail-title">
        {title}
      </Typography>
    </StyledBackToList>
  )
}

export default BackToList
