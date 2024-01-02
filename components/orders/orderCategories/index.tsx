import React, {FC} from 'react';
import {StyledOrderCategories} from "./styles";
import OrderCategoryName from "./orderCategoryName";
import {Box} from "@mui/material";
import OrderProducts from "../orderProducts";

type Props = {
  data:{
    [key:string]:Array<any>
  }
}
const OrderCategories:FC<Props> = ({data}) => {
  return (
    <StyledOrderCategories>
      {
        Object.entries(data).map(([key, value ], index) => {
          return (
            value.length>0 &&
            <Box key={"ORDER_CATEGORY_ITEM_" + index} display="flex" flexDirection="column" gap="18px">
              <OrderCategoryName type={key}/>
              <OrderProducts data={value}/>
            </Box>
          )
        })
      }
    </StyledOrderCategories>
  );
};

export default OrderCategories;



