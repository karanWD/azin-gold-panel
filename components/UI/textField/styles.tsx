import { Box, styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    position: "relative",
    borderRadius: "8px",
    border: "1px solid " + theme.palette.outline.tertiary,
    padding: "6px 12px",
    transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
    "&::placeholder": {
      color: theme.palette.txt.tertiary,
      fontSize: "14px",
    },
    "&:focus": {
      borderColor: theme.palette.outline.brand,
    },
  },
}));

export const StyledTextFieldContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "4px",
  ".label-container": {
    color: theme.palette.txt.secondary,
  },
}));
