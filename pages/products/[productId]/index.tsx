import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import useFetch from "../../../hooks/useFetch";
import {ApiRoutes} from "../../../enums/ApiRoutes";

  const router = useRouter();
  const {response, loading, request} = useFetch();
  const { Id } = router.query

  const fetchOrderDetail = () => {
    request({url: ApiRoutes.ADMIN_PRODUCTS + "/" + Id});
  }

  useEffect(() => {
    Id &&
    fetchOrderDetail()
  }, [])


const ProductDetailPage = () => {
    return (
        <div>
            
        </div>
    );
}

export default ProductDetailPage;