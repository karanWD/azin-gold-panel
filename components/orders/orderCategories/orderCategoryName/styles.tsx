import { Box, BoxProps, styled } from "@mui/material";
import { ORDER_STATUSES } from "../../../../enums/OrderStatuses";
import { Statuses } from "../../../../data/Statuses";

interface CategoryNameType extends BoxProps {
  orderType: ORDER_STATUSES;
}

export const StyledOrderCategoryName = styled(Box)<CategoryNameType>(
  ({ theme, orderType }) => ({
    ".order-detail-state-title-container": {
      display: "flex",
      alignItems: "center",
      columnGap: "8px",
      ".order-state-icon": {
        backgroundColor: theme.palette["white"],
        border: `1px dashed ${theme.palette.txt["tertiary"]}`,
        borderRadius: "8px",
        padding: "6px 10px",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      ".order-state-title": {
        color: Statuses[orderType].color(theme),
      },
    },
  })
);
