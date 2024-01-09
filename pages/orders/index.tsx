import { NextPage } from "next";
import useFetch from "../../hooks/useFetch";
import { useCallback, useEffect, useState } from "react";
import { ApiRoutes } from "../../enums/ApiRoutes";
import OrdersStatus from "../../components/orders/ordersStatus";
import { StyledOrderPage } from "./styles";
import PageHeader from "../../components/reusable/pageHeader";
import { Typography } from "@mui/material";
import MoreDetail from "../../components/orders/moreDetail";
import PageBody from "../../components/UI/body";
import HandleDate from "../../components/reusable/handelDate";

const tableHeading: string[] = [
  "ردیف",
  "تاریخ ثبت سفارش",
  "شماره سفارش",
  "نام کاربر",
  "وضعیت",
  "وزن کل",
  "وزن کل با اجرت",
  "تعداد",
  "جزئیات",
];

const OrdersPage: NextPage = () => {
  const { response, loading, request } = useFetch();
  const [page, setPage] = useState<number>(1);

  const fetchOrderList = (page) => {
    request({
      url: ApiRoutes.ADMIN_ORDERS + `?page=${page}`,
      // for filters
      //status=CANCELED&fromDate=2023-12-25T00:00:00Z&toDate=2023-12-28T00:00:00Z&name=م&tracking=87
    });
  };

  useEffect(() => {
    fetchOrderList(page);
  }, [page]);

  const formatData = useCallback((data) => {
    if (!data) return null;
    return data.map((item) => ({
      index: <Typography variant="body3">{item.index}</Typography>,
      createdAt: (
        <Typography variant="body3">
          {" "}
          {HandleDate(item.order.createdAt)}
        </Typography>
      ),
      tracking: <Typography variant="body3">{item.order.tracking}</Typography>,
      username: <Typography variant="body3">{item.name}</Typography>,
      status: <OrdersStatus status={item.order.status} type={"TEXT"} />,
      weight: (
        <Typography variant="body3">
          {item.order.totalWeight + " گرم "}
        </Typography>
      ),
      weightWithWage: (
        <Typography variant="body3">
          {item.order.totalWeightWithWage + " گرم "}
        </Typography>
      ),
      count: (
        <Typography variant="body3">
          {item.order.totalQuantity + " عدد "}
        </Typography>
      ),
      more: (
        <MoreDetail
          userId={item._id}
          orderId={item.order._id}
          trackingId={item.order.tracking}
          updateHandler={() => fetchOrderList(page)}
        />
      ),
    }));
  }, []);

  return (
    <StyledOrderPage>
      <PageHeader title="سفارشات" />
      <PageBody
        data={formatData(response?.orders)}
        totalPages={response?.totalPages}
        page={page}
        setPage={setPage}
        loading={loading}
        tableHeading={tableHeading}
      />
    </StyledOrderPage>
  );
};
export default OrdersPage;
