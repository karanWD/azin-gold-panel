import { Box, styled } from "@mui/material";

export const StyledSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "8px",
  ".section-title": {
    padding: "12px 16px",
    backgroundColor: theme.palette.primary.white,
    borderRadius: "8px",
  },
  ".section-body": {
    padding: "24px",
    backgroundColor: theme.palette.primary.white,
    borderRadius: "8px",
  },
}));