import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Statuses } from "../../../../data/Statuses";
import { ORDER_STATUSES } from "../../../../enums/OrderStatuses";
import { StyledOrderCategoryName } from "./styles";

const images = {
  [ORDER_STATUSES.REGISTERED]: "/images/registered.svg",
  [ORDER_STATUSES.PROGRESS]: "/images/progress.svg",
  [ORDER_STATUSES.READY]: "/images/ready.svg",
  [ORDER_STATUSES.DELIVERED]: "/images/delivered.svg",
  [ORDER_STATUSES.CANCELED]: "/images/canceled.svg",
};

const OrderCategoryName = ({ type }) => {
  return (
    <StyledOrderCategoryName color={Statuses[type].color}>
      <Box className="order-detail-state-title-container">
        <Box className="order-state-icon">
          <Image
            src={images[type]}
            alt={type}
            width={20}
            height={28}
            layout="fixed"
          />
        </Box>
        <Typography variant="subtitle3" className="order-state-title">
          {" محصولات " + Statuses[type].text}
        </Typography>
      </Box>
    </StyledOrderCategoryName>
  );
};

export default OrderCategoryName;
