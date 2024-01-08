import { Box, BoxProps, styled } from "@mui/material";

interface StatusType extends BoxProps {
  type: "TEXT" | "CONTAINED";
  status: "info" | "error" | "success" | "default" | "warning";
}
export const StyledStatus = styled(Box)<StatusType>(
  ({ theme, type, status }) => ({
    backgroundColor:
      type === "TEXT" ? "transparent" : theme.palette.state[status].light,
    border: `1px solid ${
      type === "TEXT" ? "transparent" : theme.palette.state[status].main
    }`,
    borderRadius: type === "TEXT" ? "0" : "8px",
    color: theme.palette.state[status].main,
    padding: "4px 8px",
  })
);
