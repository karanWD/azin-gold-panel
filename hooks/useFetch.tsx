import { useState } from 'react'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, CreateAxiosDefaults } from 'axios'
import { getCookie } from 'cookies-next'
import { ApiRoutes } from '../enums/ApiRoutes'
import { toast } from 'react-toastify'
import { StaticRoutes } from '../enums/StaticRoutes'

/*azingold-admin-auth*/
const hashedCookie = 'aebc8a60f2fde26146e08d8cc0bc5371'

const axiosConfig = { baseURL: ApiRoutes.BASE_URL }
const instance: AxiosInstance = axios.create(axiosConfig as CreateAxiosDefaults)
instance.interceptors.request.use((req) => {
  const cookie = getCookie(hashedCookie) && JSON.parse(getCookie(hashedCookie) as string)
  req.headers = {
    Authorization: `Bearer ${cookie?.token}`,
  } as AxiosRequestHeaders
  return req
})

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    //For Expired Tokens
    if (err.response.status === 401) {
      window.location.href = StaticRoutes.LOGIN
    }
  }
)

const UseFetch = () => {
  const [response, setResponse] = useState({
    response: null,
    loading: false,
  })

  const request = async (axiosParams: AxiosRequestConfig) => {
    try {
      await setResponse({
        loading: true,
        response: null,
      })
      const res = (await instance.request(axiosParams)) as any
      await setResponse({
        loading: false,
        response: res?.data,
      })
      if (res?.name === 'AxiosError') {
        await setResponse({
          loading: false,
          response: null,
        })
        return Promise.reject(res.response)
      }
      return Promise.resolve(res?.data)
    } catch (e) {
      setResponse({
        loading: false,
        response: null,
      })
      toast.error('متاسفانه خطایی در ارتباط با سرور پیش آمده')
      return Promise.reject(e)
    }
  }

  return { ...response, request }
}

export default UseFetch
