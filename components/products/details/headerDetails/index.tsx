import { Box, Typography } from '@mui/material'
import UseFetch from 'hooks/useFetch'
import { FC, useState } from 'react'
import { ApiRoutes } from 'enums/ApiRoutes'
import { useRouter } from 'next/router'
import Switch from '@/components/UI/switch'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { StyledHeaderDetails } from './styles'

type Props = {
  id: string
}
const HeaderDetails: FC<Props> = ({ id }) => {
  const { request, response } = UseFetch()
  const [isActive, setIsActive] = useState<boolean>(response?.product?.isActive)
  const router = useRouter()

  const editStatusProducts = () => {
    request({
      method: 'PATCH',
      url: ApiRoutes.ADMIN_PRODUCTS + '/' + id,
      data: {
        isActive: !isActive,
      },
    }).then(() => setIsActive((prevState) => !prevState))
  }
  return (
    <StyledHeaderDetails>
      <Box className="header-details">
        <Box>
          <Box className="back-to-list" onClick={() => router.push('/products')}>
            <KeyboardBackspaceIcon className="back-icon" />
            <Typography variant="body3">بازگشت به لیست</Typography>
          </Box>
          <Typography variant="title2"> جزییات محصول </Typography>
        </Box>
        <Box>
          <Typography variant="body3"> فعال/ غیرفعال: </Typography>
          <Switch checked={isActive} onChange={editStatusProducts} />
        </Box>
      </Box>
    </StyledHeaderDetails>
  )
}

export default HeaderDetails
