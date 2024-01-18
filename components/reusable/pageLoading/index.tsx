import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const PageLoading = () => {
  return (
    <Box display="flex" width={'100vw'} height={'100vh'} alignItems={'center'} justifyContent="center">
      <CircularProgress />
    </Box>
  )
}

export default PageLoading
