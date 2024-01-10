interface BackgroundPaletteType {
  A?: string
  B?: string
  C?: string
  D?: string
  tonal?: string
}

declare module '@mui/material/styles' {
  interface Palette {
    bg: Palette['primary']
    txt: Palette['primary']
    outline: Palette['primary']
  }

  interface PaletteOptions {
    bg?: PaletteOptions['primary']
    txt?: PaletteOptions['primary']
    outline?: PaletteOptions['primary']
  }

  interface PaletteColor {
    primary?: BackgroundPaletteType | string
    secondary?: BackgroundPaletteType | string
    tertiary?: BackgroundPaletteType | string
    brand?: BackgroundPaletteType | string
    brandSecondary?: BackgroundPaletteType | string
    brandTertiary?: BackgroundPaletteType | string
    secondaryInverted?: BackgroundPaletteType | string
    tertiaryInverted?: BackgroundPaletteType | string
    disabledInverted?: BackgroundPaletteType | string
    success?: BackgroundPaletteType | string
    error?: BackgroundPaletteType | string
    warning?: BackgroundPaletteType | string
    disabled?: BackgroundPaletteType | string
    neutral?: BackgroundPaletteType | string
    white?: string
    black?: string
  }

  interface PaletteColorOptions {
    primary?: BackgroundPaletteType | string
    secondary?: BackgroundPaletteType | string
    tertiary?: BackgroundPaletteType | string
    brand?: BackgroundPaletteType | string
    brandSecondary?: BackgroundPaletteType | string
    brandTertiary?: BackgroundPaletteType | string
    secondaryInverted?: BackgroundPaletteType | string
    tertiaryInverted?: BackgroundPaletteType | string
    disabledInverted?: BackgroundPaletteType | string
    success?: BackgroundPaletteType | string
    error?: BackgroundPaletteType | string
    warning?: BackgroundPaletteType | string
    disabled?: BackgroundPaletteType | string
    neutral?: BackgroundPaletteType | string
    white?: string
    black?: string
  }

  interface SimplePaletteColorOptions {
    primary?: BackgroundPaletteType | string
    secondary?: BackgroundPaletteType | string
    tertiary?: BackgroundPaletteType | string
    brand?: BackgroundPaletteType | string
    brandSecondary?: BackgroundPaletteType | string
    brandTertiary?: BackgroundPaletteType | string
    secondaryInverted?: BackgroundPaletteType | string
    tertiaryInverted?: BackgroundPaletteType | string
    disabledInverted?: BackgroundPaletteType | string
    success?: BackgroundPaletteType | string
    error?: BackgroundPaletteType | string
    warning?: BackgroundPaletteType | string
    disabled?: BackgroundPaletteType | string
    neutral?: BackgroundPaletteType | string
    white?: string
    black?: string
  }
}

export const palette = {
  primary: {
    main: '#B99637',
    white: '#FFF',
    black: '#000',
  },
  bg: {
    neutral: {
      A: '#F8F9FC',
      B: '#F2F3F6',
      C: '#E9EBEE',
      D: '#DADCDE',
      tonal: '#F2F3F6',
    },
    brand: {
      A: '#1C1D1F',
      B: '#3C3E40',
      C: '#5B5C5F',
      D: '#6F7072',
      tonal: '#F2F3F6',
    },
    secondary: {
      A: '#B99637',
      B: '#D0B362',
      C: '#DCC789',
      D: '#8A7029',
      tonal: '#E3D5AF',
    },
    success: {
      A: '#1EA362',
      B: '#4BB581',
      C: '#B9E2CE',
      D: '#157446',
      tonal: '#E9F6EF',
    },
    error: {
      A: '#D4394D',
      B: '#DD6171',
      C: '#F2C2C8',
      D: '#972837',
      tonal: '#FBEBED',
    },
    warning: {
      A: '#E06E16',
      B: '#E68B45',
      C: '#F5D2B7',
      D: '#9F4E10',
      tonal: '#FCF1E8',
    },
    tertiary: {
      A: '#8758FF',
      B: '#9F79FF',
      C: '#DACBFF',
      D: '#603EB5',
      tonal: '#F3EEFF',
    },
  },
  txt: {
    brand: '#1C1D1F',
    secondary: '#5B5C5F',
    tertiary: '#97989B',
    disabled: '#DADCDE',
    primary: '#F8F9FC',
    secondaryInverted: '#E9EBEE',
    tertiaryInverted: '#B7B8BB',
    disabledInverted: '#6F7072',
    success: '#1EA362',
    error: '#D4394D',
    warning: '#E06E16',
    brandSecondary: '#B99637',
    brandTertiary: '#7B50E8',
  },
  outline: {
    brand: '#1C1D1F',
    secondary: '#B7B8BB',
    tertiary: '#DADCDE',
    disabled: '#F2F3F6',
    primary: '#F8F9FC',
    secondaryInverted: '#97989B',
    tertiaryInverted: '#6F7072',
    disabledInverted: '#3C3E40',
    success: '#1EA362',
    error: '#D4394D',
    warning: '#E06E16',
    brandSecondary: '#A68427',
    brandTertiary: '#8758FF',
  },
}
