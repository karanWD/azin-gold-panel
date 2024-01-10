import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { typography } from "./typography";
import { PaletteOptions } from "@mui/material/styles/createPalette";

const defaultTheme = createTheme();

const theme = createTheme({
  palette: palette as PaletteOptions,
  typography: {
    ...defaultTheme.typography,
    ...typography,
  },
});

export default theme;
