import { StaticRoutes } from '../../../enums/StaticRoutes'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect, useState } from 'react'
import PageLoading from '@/components/reusable/pageLoading'

type Props = {
  children: ReactNode
}
const Auth: FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState(false)
  const router = useRouter()
  const hashedCookie = 'aebc8a60f2fde26146e08d8cc0bc5371'
  const cookie = getCookie(hashedCookie)
  useEffect(() => {
    cookie ? setAuth(true) : router.push(StaticRoutes.LOGIN)
  }, [])
  return auth ? children : <PageLoading />
}

export default Auth
