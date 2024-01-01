import React from 'react';
import {StyledOrderCategories} from "./styles";
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {ORDER_STATUSES} from "../../../enums/OrderStatuses";
import {Statuses} from "../../../data/Statuses";

const OrderCategories = ({data}) => {
  return (
    <StyledOrderCategories>
      {
        Object.entries(data).map(([key, value], index) => {
          return (
            <>
              <StateTitle type={key}/>
            </>
          )
        })
      }
    </StyledOrderCategories>
  );
};

export default OrderCategories;


const images = {
  [ORDER_STATUSES.REGISTERED]:"/images/registered.svg",
  [ORDER_STATUSES.PROGRESS]:"/images/progress.svg",
  [ORDER_STATUSES.READY]:"/images/ready.svg",
  [ORDER_STATUSES.DELIVERED]:"/images/delivered.svg",
  [ORDER_STATUSES.CANCELED]:"/images/canceled.svg"
}

export const StateTitle = ({type}) => {
  return (
    <Box>
      <Image className="order-state-icon" src={images[type]} alt={type}/>
      <Typography>{Statuses[type].text + " محصولات "}</Typography>
    </Box>
  )
}