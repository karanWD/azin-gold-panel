import React from 'react';
import {StyledOrderProducts} from "./styles";
import {Box, Checkbox, Typography} from "@mui/material";
import Image from "next/image";

const OrderProducts = ({data}) => {
  console.log(data)
  return (
    <StyledOrderProducts>
      {data.map((item, index) => {
        return (
          <Box className="products-container" key={"ORDER_PRODUCT_ITEM_" + index} >
            <Box className="products-name-container" >
              <Typography className="products-name">{item.header}</Typography>
              <Typography className="products-wage">
                اجرت:
                {item.wage}
                درصد
              </Typography>
            </Box>
            <Box className="sub-products-container">
              {
                item.subProducts.map((productItem,index)=>{
                  return(
                    <Box className="product-item-container" key={"ORDER_SUBPRODUCT_ITEM_" + index}>
                      <Box  display="flex" alignItems="center" gap="8px">
                        <Checkbox />
                        <Image src={productItem.thumbnail} alt={"aaa"} layout="fixed" width={36} height={36} />
                        <Typography>{productItem.title}</Typography>
                        <Typography className="product-item-weight">({productItem.weight} گرم )</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" gap="40px">
                        <Box display="flex" alignItems="center" gap="8px">
                          <Typography className="product-item-info-title">
                            وزن کل حدودی با اجرت:
                          </Typography>
                          <Typography className="product-item-info-value">
                            {productItem.totalWeightWithWage}
                            گرم
                          </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" gap="8px">
                          <Typography className="product-item-info-title">
                            تعداد:
                          </Typography>
                          <Typography className="product-item-info-value">
                            {productItem.quantity}
                            از
                            {productItem.totalQuantity}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  )
                })
              }
            </Box>

          </Box>

        )
      })}

    </StyledOrderProducts>
  );
};

export default OrderProducts;