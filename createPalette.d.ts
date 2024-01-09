declare module "@mui/material/styles/createPalette" {
  interface Palette {
    background?: Palette["primary"];
    text?: Palette["primary"];
    outline?: Palette["primary"];
  }

  interface PaletteOptions {
    background?: PaletteOptions["primary"];
    text?: PaletteOptions["primary"];
    outline?: PaletteOptions["primary"];
  }
}
