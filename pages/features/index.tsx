import { StyledPropertyPage } from "./styles";
import { NextPage } from "next";
import useFetch from "../../hooks/useFetch";
import { useCallback, useEffect, useState } from "react";
import { ApiRoutes } from "../../enums/ApiRoutes";
import PageHeader from "../../components/reusable/pageHeader";
import { Typography } from "@mui/material";
import MoreDetail from "../../components/features/moreDatail";
import HeaderFeatures from "../../components/features/headerFeatures";
import FeaturesItem from "../../components/features/featuresItem";
import DisplayMode from "../../components/features/displayMode";
import SearchBar from "../../components/features/searchBar";
import PageBody from "../../components/UI/body";

const tableHeading: string[] = [
  "ردیف",
  "عنوان",
  "نوع ویژگی",
  "مقادیر",
  "تاریخ ایجاد ",
  "تاریخ بروز رسانی",
  "جزئیات",
];
const handleDate = (timestamp: string): string => {
  const newDate = new Date(timestamp);
  const date = newDate.toLocaleDateString("fa-ir", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  });
  const hour = newDate.toLocaleTimeString("fa-ir", { timeStyle: "short" });
  return hour + " " + date;
};

const FeaturesPage: NextPage = () => {
  const { response, loading, request } = useFetch();
  const [page, setPage] = useState<number>(1);

  const fetchFeaturesList = (page) => {
    request({
      url: ApiRoutes.ADMIN_FEATURES + `?page=${page}`,
      // for filters
      //status=CANCELED&fromDate=2023-12-25T00:00:00Z&toDate=2023-12-28T00:00:00Z&name=م&tracking=87
    });
  };

  useEffect(() => {
    fetchFeaturesList(page);
  }, [page]);

  const formatData = useCallback((data) => {
    if (!data) return null;
    return data.map((item) => ({
      index: <Typography variant="body3">{item.index}</Typography>,
      title: <HeaderFeatures header={item.header} />,
      featureType: <DisplayMode modes={item.displayMode} />,
      features: <FeaturesItem modes={item.features} />,
      createdAt: (
        <Typography variant="body3"> {handleDate(item.createdAt)}</Typography>
      ),
      updatedAt: (
        <Typography variant="body3">{handleDate(item.updatedAt)}</Typography>
      ),
      more: <MoreDetail />,
    }));
  }, []);

  return (
    <StyledPropertyPage>
      <PageHeader title="ویژگی‌ها" />
      <SearchBar />
      <PageBody
        data={formatData(response?.featureGroups)}
        totalPages={response?.totalPages}
        page={page}
        setPage={setPage}
        loading={loading}
        tableHeading={tableHeading}
      />
    </StyledPropertyPage>
  );
};

export default FeaturesPage;
