import { useState } from 'react'
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  CreateAxiosDefaults,
} from 'axios'
import { getCookie } from 'cookies-next'
import { ApiRoutes } from '../enums/ApiRoutes'
import { toast } from 'react-toastify'

/*azingold-admin-auth*/
const hashedCookie = 'aebc8a60f2fde26146e08d8cc0bc5371'

const axiosConfig = { baseURL: ApiRoutes.BASE_URL }
const instance: AxiosInstance = axios.create(axiosConfig as CreateAxiosDefaults)
instance.interceptors.request.use((req) => {
  const cookie = getCookie(hashedCookie) && JSON.parse(getCookie(hashedCookie) as string)
  req.headers = {
    Authorization: `Bearer ${cookie.token}`,
  } as AxiosRequestHeaders
  return req
})

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log(err)
  }
)

const UseFetch = () => {
  const [response, setResponse] = useState({
    response: null,
    loading: false,
    error: null,
  })

  const request = async (axiosParams: AxiosRequestConfig) => {
    try {
      await setResponse({
        loading: true,
        response: null,
        error: null,
      })
      const res = await instance.request(axiosParams)
      await setResponse({
        loading: false,
        response: res.data,
        error: null,
      })
      return Promise.resolve(res.data)
    } catch (e) {
      setResponse({
        loading: false,
        response: null,
        error: e,
      })
      toast.error('متاسفانه خطایی در ارتباط با سرور پیش آمده')
      return Promise.reject(e.message)
    }
  }

  return { ...response, request }
}

export default UseFetch
