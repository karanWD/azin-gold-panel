import { StyledProductsPage } from "./styles";
import { NextPage } from "next";
import useFetch from "../../hooks/useFetch";
import React, { useCallback, useEffect, useState } from "react";
import { ApiRoutes } from "../../enums/ApiRoutes";
import PageHeader from "../../components/reusable/pageHeader";
import { Box, Typography } from "@mui/material";
import MoreDetail from "../../components/reusable/moreDetail";
import ChangeStatusProduct from "../../components/products/changeStatusProducts";
import PageBody from "../../components/UI/body";
import HandleDate from "../../components/reusable/handelDate";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Link from "next/link";

const tableHeading: string[] = [
  "ردیف",
  "نام محصول",
  "تاریخ ایجاد ",
  "تاریخ بروز رسانی",
  "اجرت",
  "تعداد ویژگی",
  "فعال/غیرفعال",
  "جزئیات",
];

const ProductsPage: NextPage = () => {
  const { response, loading, request } = useFetch();
  const [page, setPage] = useState<number>(1);

  const fetchProductsList = (page: number) => {
    request({ url: ApiRoutes.ADMIN_PRODUCTS + `?page=${page}` });
  };
  useEffect(() => {
    fetchProductsList(page);
  }, [page]);

  const formatData = useCallback((data) => {
    if (!data) return null;
    return data.map((item) => ({
      index: <Typography variant="body3">{item.index}</Typography>,
      title: <Typography variant="body3">{item.title}</Typography>,
      createdAt: <Typography variant="body3"> {HandleDate(item.createdAt)}</Typography>,
      updatedAt: <Typography variant="body3">{HandleDate(item.updatedAt)}</Typography>,
      wage: <Typography variant="body3">{item.wage + " گرم "}</Typography>,
      features: <Typography variant="body3">{item.numbersOfFeatureGroups}</Typography>,
      status: (
        <ChangeStatusProduct
          status={item.isActive}
          productId={item._id}
        />
      ),
      more: (
        <MoreDetail>
          <Link href={`/products/${item._id}/show`}>جزئیات محصول</Link>
          <Link href={`/orders/${item._id}/edit`}>ویرایش</Link>
        </MoreDetail>
      ),
    }));
  }, []);

  return (
    <StyledProductsPage>
      <PageHeader title="محصولات">
        <Link href="/products/create" color="primary">
          <Box className="create-product-button" component="span">
            <AddCircleOutlineIcon />
            <Typography variant="button1">افزودن محصول</Typography>
          </Box>
        </Link>
      </PageHeader>
      <PageBody
        data={formatData(response?.products)}
        totalPages={response?.totalPages}
        page={page}
        setPage={setPage}
        loading={loading}
        tableHeading={tableHeading}
      />

    </StyledProductsPage>
  );
};

export default ProductsPage;
