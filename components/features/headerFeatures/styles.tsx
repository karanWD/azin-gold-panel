import { Box, BoxProps, styled } from "@mui/material";

export const StyledHeaderTypography = styled(Box)<BoxProps>(({ theme }) => ({
  color: theme.palette.neutral["900"],
}));
