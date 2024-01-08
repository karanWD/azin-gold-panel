import { Box, BoxProps, styled } from "@mui/material";

interface Props extends BoxProps {
  isActive: boolean;
  isDisabled: boolean;
}

export const StyledNavigationItem = styled(Box)<Props>(
  ({ theme, isActive, isDisabled }) => ({
    padding: "4px 0",
    opacity: isDisabled ? 0.3 : 1,
    pointerEvents: isDisabled ? "none" : "unset",
    borderLeft: `3px solid ${isActive ? "#000" : "transparent"}`,
  })
);
