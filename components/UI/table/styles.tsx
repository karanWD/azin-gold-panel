import { Box, BoxProps, styled, Table } from "@mui/material";

export const StyledTable = styled(Table)(({ theme }) => ({
  ".MuiTableCell-root": {
    borderColor: theme.palette.bg.neutral["B"],
  },
  ".MuiTableCell-head": {
    fontSize: "14px",
    lineHeight: "28px",
    fontWeight: "400",
    textAlign: "right",
    color: theme.palette.txt.secondary,
    padding: "0 0 8px 0",
  },
  ".MuiTableCell-body": {
    color: theme.palette.txt.secondary,
    height: "69px",
    fontSize: "14px",
    lineHeight: "28px",
    fontWeight: "400",
    textAlign: "right",
    padding: "0",
    margin: "8px 0",
  },
}));

export const StyledContainer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.white,
  padding: "24px",
  borderRadius: "16px",
}));
