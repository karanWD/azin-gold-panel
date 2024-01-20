import { Box, Typography } from '@mui/material'
import UseFetch from 'hooks/useFetch'
import { FC, useState } from 'react'
import { ApiRoutes } from 'enums/ApiRoutes'
import Switch from '@/components/UI/switch'
import { StyledHeaderDetails } from './styles'
import BackToList from '@/components/reusable/backToList'

type Props = {
  id: string
}
const HeaderDetails: FC<Props> = ({ id }) => {
  const { request, response } = UseFetch()
  const [isActive, setIsActive] = useState<boolean>(response?.product?.isActive)

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
        <BackToList title={'جزییات محصول '} />
        <Box>
          <Typography variant="body3"> فعال/ غیرفعال: </Typography>
          <Switch checked={isActive} onChange={editStatusProducts} />
        </Box>
      </Box>
    </StyledHeaderDetails>
  )
}

export default HeaderDetails
