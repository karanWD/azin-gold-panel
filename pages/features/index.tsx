import { StyledPropertyPage } from "./styles";
import {NextPage} from "next";
import Table from "../../components/UI/table";
import useFetch from "../../hooks/useFetch";
import {useCallback, useEffect, useState} from "react";
import {ApiRoutes} from "../../enums/ApiRoutes";
import TableSkeleton from "../../components/skeleton/tableSkeleton/tableSkeleton";
import PageHeader from "../../components/reusable/pageHeader";
import {Box, Pagination, PaginationItem, Typography, Switch} from "@mui/material";
import MoreDetail from "../../components/features/moreDatail";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import HeaderFeatures from "../../components/features/headerFeatures";
import FeaturesItem from "../../components/features/featuresItem";
import DisplayMode from "../../components/features/displayMode";
import SearchBar from "../../components/features/searchBar";

    const tableHeading: string[] = [
      "ردیف",
      "عنوان",
      "نوع ویژگی",
      "مقادیر",
      "تاریخ ایجاد ",
      "تاریخ بروز رسانی",
      "جزئیات",
    ]
    const handleDate = (timestamp: string): string => {
      const newDate = new Date(timestamp)
      const date = newDate.toLocaleDateString("fa-ir", {month: "2-digit", day: "2-digit"})
      const hour = newDate.toLocaleTimeString("fa-ir", {timeStyle: "short"})
      return hour + " " + date
    }
    
    const FeaturesPage: NextPage = () => {
      const {response, error, loading, request} = useFetch()
      const [page, setPage] = useState<number>(1)
    
      const fetchFeaturesList = (page) => {
        request({
          url: ApiRoutes.ADMIN_FEATURES + `?page=${page}`
          // for filters
          //status=CANCELED&fromDate=2023-12-25T00:00:00Z&toDate=2023-12-28T00:00:00Z&name=م&tracking=87
        })
      }
    
      useEffect(() => {
        fetchFeaturesList(page)

      }, [page])

      console.log(response)
    
      const formatData = useCallback((data) => {
        if (!data) return null
        return data.map((item) => ({
          index: <Typography variant="body3">{item.index}</Typography>,
          title: <HeaderFeatures header={item.header}/>,
          featureType:<DisplayMode modes={item.displayMode}/>,
          features:<FeaturesItem modes={item.features}/>,
          createdAt:<Typography variant="body3"> {handleDate(item.createdAt)}</Typography>,
          updatedAt: <Typography variant="body3">{handleDate(item.updatedAt)}</Typography>,
          more: <MoreDetail userId={item._id} orderId={item._id} trackingId={item.tracking} updateHandler={()=>(page)}/>
        }))
      }, [])

    return ( 
        <StyledPropertyPage>
            <PageHeader title="ویژگی‌ها"/>
            {
                loading || !response ? <TableSkeleton/> :
                <>
                    <SearchBar />
                    <Table headings={tableHeading} data={formatData(response.featureGroups)}/>
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
        </StyledPropertyPage>
     );
}
 
export default FeaturesPage;