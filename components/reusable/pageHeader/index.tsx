import React, { FC, ReactNode, useEffect, useState } from 'react'
import { StyledPageHeader } from './styles'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { getCookie } from 'cookies-next'

type Props = {
  title: string
  children?: ReactNode
}
const PageHeader: FC<Props> = ({ title, children }) => {
  //Because of Next serve side error of not matching client
  const [username, setUsername] = useState()
  useEffect(() => {
    const userData = getCookie('aebc8a60f2fde26146e08d8cc0bc5371')
    const user = userData && JSON.parse(userData)
    setUsername(user.name)
  }, [])

  return (
    username && (
      <StyledPageHeader>
        <Box className="page-title">
          <Typography variant={'title2'}>{title}</Typography>
          {children}
        </Box>
        <Box className="profile-container">
          <Image
            src="/images/user-avatar.png"
            alt={'کاربر آذین گلد'}
            width={40}
            height={40}
            layout="fixed"
          />
          <Box>
            <Typography component="p" variant={'caption'} className="welcome-message">
              خوش آمدید
            </Typography>
            <Typography component="p" variant={'subtitle3'} className="username-container">
              {username}
            </Typography>
          </Box>
        </Box>
      </StyledPageHeader>
    )
  )
}

export default PageHeader
