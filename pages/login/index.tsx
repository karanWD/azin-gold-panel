import React, { useState } from 'react'
import { StyledLoginPage } from './styles'
import { Box } from '@mui/material'
import Image from 'next/image'
import TextField from '@/components/UI/textField'
import Button from '@/components/UI/button'
import { ApiRoutes } from '../../enums/ApiRoutes'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import axios from 'axios'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { StaticRoutes } from '../../enums/StaticRoutes'

const LoginPage = () => {
  const router = useRouter()
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const changeHandler = (value, key) => {
    setData((prev) => ({ ...prev, [key]: value }))
    setHasError(false)
  }

  const loginHandler = () => {
    setLoading(true)
    axios
      .post('https://azingallery.com/api/v1' + ApiRoutes.LOGIN, data)
      .then(async (response) => {
        await setCookie('aebc8a60f2fde26146e08d8cc0bc5371', JSON.stringify(response.data))
        router.push(StaticRoutes.ORDERS)
      })
      .catch(() => setHasError(true))
      .finally(() => setLoading(false))
  }

  return (
    <StyledLoginPage>
      <Box className="login-form">
        <Image src={'/images/logo.jpg'} alt={'Azin-Gold|آذین گلد'} width={134} height={48} />
        <Box className="login-fields">
          <TextField
            value={data.username}
            label={'نام کاربری'}
            placeholder="نام کاربر خود را وارد کنید"
            onChange={(e) => changeHandler(e.target.value, 'username')}
            error={hasError}
            helperText={hasError && 'نام کاربری و یا رمزعبور صحیح نیست.'}
            startIcon={<PersonOutlineOutlinedIcon />}
          />

          <TextField
            value={data.password}
            label={'رمز عبور'}
            placeholder="رمز عبور خود را وارد کنید"
            onChange={(e) => changeHandler(e.target.value, 'password')}
            error={hasError}
            helperText={hasError && 'نام کاربری و یا رمزعبور صحیح نیست.'}
            startIcon={<LockOutlinedIcon />}
            type="password"
          />
        </Box>
        <Button format={'primary'} width="77px" size="large" loading={loading} onClick={loginHandler}>
          ورود
        </Button>
      </Box>
    </StyledLoginPage>
  )
}

export default LoginPage
