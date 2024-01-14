import { createTheme } from '@mui/material'
import { palette } from './palette'
import { typography } from './typography'
import { PaletteOptions } from '@mui/material/styles/createPalette'

const theme = createTheme({
  palette: palette as PaletteOptions,
  typography: typography,
})

export default theme
