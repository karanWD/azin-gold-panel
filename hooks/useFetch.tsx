import React, { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { getCookie } from "cookies-next";
import { ApiRoutes } from "../enums/ApiRoutes";
import { toast } from "react-toastify";
const hashedCookie = "aebc8a60f2fde26146e08d8cc0bc5371"; /*azingold-admin-auth*/
const instance = axios.create({
  baseURL: ApiRoutes.BASE_URL,
});

instance.interceptors.request.use((req: any) => {
  const cookie =
    getCookie(hashedCookie) && JSON.parse(getCookie(hashedCookie) as string);
  req.headers = {
    Authorization: `Bearer ${cookie.token}`,
  };
  return req;
});

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log(err);
  }
);

const UseFetch = () => {
  const [response, setResponse] = useState({
    response: null,
    loading: false,
    error: null,
  });

  const request = async (axiosParams: AxiosRequestConfig) => {
    try {
      await setResponse({
        loading: true,
        response: null,
        error: null,
      });
      const res = await instance.request(axiosParams);
      await setResponse({
        loading: false,
        response: res.data,
        error: null,
      });
      return Promise.resolve(res.data);
    } catch (e: any) {
      setResponse({
        loading: false,
        response: null,
        error: e,
      });
      toast.error("متاسفانه خطایی در ارتباط با سرور پیش آمده");
      return Promise.reject(e.message);
    }
  };

  return { ...response, request };
};

export default UseFetch;
