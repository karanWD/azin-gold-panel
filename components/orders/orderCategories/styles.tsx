import { Box, BoxProps, styled } from "@mui/material";

export const StyledOrderCategories = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "12px",
}));
