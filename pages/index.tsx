import {useRouter} from "next/router";
import {useEffect} from "react";
import {NextPage} from "next";
import {ApiRoutes} from "../enums/ApiRoutes";
import {setCookie} from "cookies-next";
import axios from "axios";

const Home: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    axios.post(
      "https://azingallery.com/api/v1" + ApiRoutes.LOGIN,
      {
        username: "superuser",
        password: "password",
      }
    ).then(async (response) => {
      await setCookie("aebc8a60f2fde26146e08d8cc0bc5371", JSON.stringify(response.data))
      router.replace("/orders")
    })

  }, [])
  return null
}

export default Home
