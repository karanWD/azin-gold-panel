import { Box, BoxProps, styled } from "@mui/material";

interface CategoryNameType extends BoxProps {
  color: "info" | "warning" | "default" | "success" | "error";
}
export const StyledOrderCategoryName = styled(Box)<CategoryNameType>(
  ({ theme, color }) => ({
    ".order-detail-state-title-container": {
      display: "flex",
      alignItems: "center",
      columnGap: "8px",
      ".order-state-icon": {
        backgroundColor: theme.palette.neutral["white"],
        border: `1px dashed ${theme.palette.neutral["200"]}`,
        borderRadius: "8px",
        padding: "6px 10px",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      ".order-state-title": {
        color: theme.palette.state[color].main,
      },
    },
  })
);
