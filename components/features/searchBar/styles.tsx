import {
  Box,
  BoxProps,
  styled,
  TextField,
  TextFieldProps,
} from "@mui/material";

export const StyledContainer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.neutral["white"],
  padding: "24px",
  borderRadius: "16px",
}));

export const StyledTextField = styled(TextField)<TextFieldProps>(
  ({ theme }) => ({
    backgroundColor: theme.palette.neutral["white"],
    borderRadius: "5px",
    width: "376px",
    direction: "rtl",
  })
);
