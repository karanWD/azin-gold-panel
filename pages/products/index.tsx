
import { StyledProductsPage } from "./styles";
import {NextPage} from "next";
import Table from "../../components/UI/table";
import useFetch from "../../hooks/useFetch";
import {useCallback, useEffect, useState} from "react";
import {ApiRoutes} from "../../enums/ApiRoutes";
import TableSkeleton from "../../components/skeleton/tableSkeleton/tableSkeleton";
import PageHeader from "../../components/reusable/pageHeader";
import {Box, Pagination, PaginationItem, Typography, Switch} from "@mui/material";
import MoreDetail from "../../components/orders/moreDetail";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import ChangeStatusProduct from "../../components/products/changeStatusProducts";

    const tableHeading: string[] = [
      "ردیف",
      "نام محصول",
      "تاریخ ایجاد ",
      "تاریخ بروز رسانی",
      "اجرت",
      "تعداد ویژگی",
      "فعال/غیرفعال",
      "جزئیات",
    ]
    const handleDate = (timestamp: string): string => {
      const newDate = new Date(timestamp)
      const date = newDate.toLocaleDateString("fa-ir", {month: "2-digit", day: "2-digit"})
      const hour = newDate.toLocaleTimeString("fa-ir", {timeStyle: "short"})
      return hour + " " + date
    }
    
    const ProductsPage: NextPage = () => {
      const {response, error, loading, request} = useFetch()
      const [page, setPage] = useState<number>(1)
    
      const fetchProductsList = (page) => {
        request({
          url: ApiRoutes.ADMIN_PRODUCTS + `?page=${page}`
          // for filters
          //status=CANCELED&fromDate=2023-12-25T00:00:00Z&toDate=2023-12-28T00:00:00Z&name=م&tracking=87
        })
      }
    
      useEffect(() => {
        fetchProductsList(page)
      }, [page])

      console.log(response,loading)
    
      const formatData = useCallback((data) => {
        if (!data) return null
        return data.map((item) => ({
          index: <Typography variant="body3">{item.index}</Typography>,
          title: <Typography variant="body3">{item.title}</Typography>,
          createdAt:<Typography variant="body3"> {handleDate(item.createdAt)}</Typography>,
          updatedAt: <Typography variant="body3">{handleDate(item.updatedAt)}</Typography>,
          wage:<Typography variant="body3">{item.wage + " گرم "}</Typography>,
          features:<Typography variant="body3">{item.numbersOfFeatureGroups}</Typography>,
          status: <ChangeStatusProduct updateHandler={() => fetchProductsList(page)} status={item.isActive} productId={item._id}/>,
          more: <MoreDetail userId={item._id} orderId={item._id} trackingId={item.tracking} updateHandler={()=>fetchProductsList(page)}/>
        }))
      }, [])

    return ( 
        <StyledProductsPage>
            <PageHeader title="محصولات"/>
            {
                loading || !response ? <TableSkeleton/> :
                <>
                    <Table headings={tableHeading} data={formatData(response.products)}/>
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
        </StyledProductsPage>
     );
}
 
export default ProductsPage;