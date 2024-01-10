import { Box, styled } from "@mui/material";

export const StyledOrderProducts = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "12px",
  ".products-container": {
    backgroundColor: theme.palette["white"],
    display: "flex",
    flexDirection: "column",
    rowGap: "12px",
    padding: "0 2px 2px 2px",
    borderRadius: "16px",
  },
  ".products-name-container": {
    ".products-name": {
      padding: "12px 20px 0 20px",
      color: theme.palette.txt["brand"],
    },
    ".products-wage": {
      padding: "0 20px 0 20px",
      marginTop: "4px",
      color: theme.palette.txt["tertiary"],
    },
  },
  ".sub-products-container": {
    display: "flex",
    borderRadius: "0 0 16px 16px",
    flexDirection: "column",
    rowGap: "20px",
    padding: "20px 32px",
    backgroundColor: theme.palette.bg.neutral["B"],
  },
  ".product-item-container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".product-item-weight": {
    color: theme.palette.txt["tertiary"],
  },
  ".product-item-info-title": {
    color: theme.palette.txt["tertiary"],
  },
  ".product-item-info-value": {
    color: theme.palette.txt["brand"],
  },
}));
