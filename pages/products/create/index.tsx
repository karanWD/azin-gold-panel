import React from "react";
import { StyledCreateProduct } from "./styles";
import BackToList from "@/components/reusable/backToList";
import Section from "@/components/reusable/islandSections";
import { StaticRoutes } from "../../../enums/StaticRoutes";

const CreateProductPage = () => {
  return (
    <StyledCreateProduct>
      <BackToList title={"ایجاد محصول"} link={StaticRoutes.PRODUCTS} />
      <Section title="اطلاعات عمومی">s</Section>
      <Section title="ویژگی ها">s</Section>
      <Section title="انتخاب مشتری">s</Section>
    </StyledCreateProduct>
  );
};

export default CreateProductPage;
