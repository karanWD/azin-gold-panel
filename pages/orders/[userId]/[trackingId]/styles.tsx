import { Box, BoxProps, styled } from "@mui/material";

export const StyledOrderDetailPage = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  ".order-header-container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".back-button": {
    display: "flex",
    alignItems: "center",
    columnGap: "8px",
    cursor: "pointer",
  },
  ".order-detail-header": {
    marginTop: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: "16px",
    color: theme.palette.txt["brand"],
  },
  ".order-detail-title": {
    display: "flex",
    alignItems: "center",
    columnGap: "8px",
    fontSize: "20px",
    fontWeight: "700",
    fontFamily: "IRANSansX_Bold",
    color: theme.palette.txt["brand"],
  },
}));
