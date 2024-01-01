import {NextPage} from "next";
import Table from "../../components/UI/table";
import useFetch from "../../hooks/useFetch";
import {useCallback, useEffect, useState} from "react";
import {ApiRoutes} from "../../enums/ApiRoutes";
import TableSkeleton from "../../components/skeleton/tableSkeleton/tableSkeleton";
import OrdersStatus from "../../components/orders/ordersStatus";
import {StyledOrderPage} from "./styles";
import PageHeader from "../../components/reusable/pageHeader";
import {Box, Pagination, PaginationItem} from "@mui/material";
import MoreDetail from "../../components/orders/moreDetail";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

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

]
const handleDate = (timestamp: string): string => {
  const newDate = new Date(timestamp)
  const date = newDate.toLocaleDateString("fa-ir", {month: "2-digit", day: "2-digit"})
  const hour = newDate.toLocaleTimeString("fa-ir", {timeStyle: "short"})
  return hour + " " + date
}

const OrdersPage: NextPage = () => {
  const {response, error, loading, request} = useFetch()
  const [page, setPage] = useState<number>(1)
  useEffect(() => {
    request({
      url: ApiRoutes.ADMIN_ORDERS + `?page=${page}`
      // for filters
      //status=CANCELED&fromDate=2023-12-25T00:00:00Z&toDate=2023-12-28T00:00:00Z&name=م&tracking=87
    })

  }, [page])

  const formatData = useCallback((data) => {
    if (!data) return null
    return data.map((item, index) => ({
      index: ++index,
      createdAt: handleDate(item.order.createdAt),
      tracking: item.order.tracking,
      username: item.name,
      status: <OrdersStatus status={item.order.status} type={"TEXT"}/>,
      weight: item.order.totalWeight + " گرم ",
      weightWithWage: item.order.totalWeightWithWage + " گرم ",
      count: item.order.totalQuantity + " عدد ",
      more: <MoreDetail userId={item._id} trackingId={item.order.tracking}/>
    }))
  }, [])

  return (
    <StyledOrderPage>
      <PageHeader title="سفارشات"/>
      {
        loading || !response ? <TableSkeleton/> :
          <>
            <Table headings={tableHeading} data={formatData(response.orders)}/>
            {
              response.totalPages > 1 &&
                <Box className="pagination-container">
                    <Pagination color="primary"
                                count={response.totalPages}
                                page={page}
                                onChange={(_, value) => setPage(value)}
                                renderItem={(item) => (
                                  <PaginationItem
                                    slots={{
                                      previous: KeyboardArrowRightRoundedIcon,
                                      next: KeyboardArrowLeftRoundedIcon
                                    }}
                                    {...item}
                                  />
                                )}
                    />
                </Box>
            }
          </>
      }
    </StyledOrderPage>

  )
}
export default OrdersPage
