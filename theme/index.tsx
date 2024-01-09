import { createTheme, ThemeOptions } from "@mui/material";
import { palette } from "./palette";
import { CustomTypographyOptions, typography } from "./typography";

interface CustomThemeOptions extends ThemeOptions {
  palette?: any;
  typography?: CustomTypographyOptions;
}

const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    ...defaultTheme.palette,
    ...palette,
  } as any,
  typography: {
    ...defaultTheme.typography,
    ...typography,
  } as any,
} as CustomThemeOptions);

export default theme;
