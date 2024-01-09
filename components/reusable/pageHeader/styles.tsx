import { Box, BoxProps, styled } from "@mui/material";

export const StyledPageHeader = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  ".page-title": {
    color: theme.palette.text["brand"],
  },
  ".profile-container": {
    display: "flex",
    columnGap: "8px",
    alignItems: "center",
  },
  ".username-container": {
    color: theme.palette.text["brand"],
  },
  ".welcome-message": {
    color: theme.palette.text["tertiary"],
  },
}));
