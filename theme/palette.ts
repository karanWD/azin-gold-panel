declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'],
    state: Palette['primary']
  }

  interface PaletteOptions {
    neutral: Palette['primary'],
    state: Palette['primary']
  }
}
interface PaletteColor {
  min?: string
  max?: string
  background?: string
  darker?: string
  '900'?: string
  '800'?: string
  '700'?: string
  '600'?: string
  '500'?: string
  '400'?: string
  '300'?: string
  '200'?: string
  '100'?: string
  '50'?: string
  '16'?: string
  '12'?: string
  '8'?: string
}

interface SimplePaletteColorOptions {
  min?: string
  max?: string
  background?: string
  darker?: string
  '900'?: string
  '800'?: string
  '700'?: string
  '600'?: string
  '500'?: string
  '400'?: string
  '300'?: string
  '200'?: string
  '100'?: string
  '50'?: string
  '16'?: string
  '12'?: string
  '8'?: string
}


export const palette:any = {
  primary: {
    main: "#0072FF"
  },
  neutral: {
    white: "#FFF",
    '100':"#F2F3F6",
    '300':"#97989B",
    main:'#5B5C5F',
    '900':"#1C1D1F",
    black: "#000"
  },
  state:{
    info:"#0072FF",
    success:"#1EA362",
    error:"#D4394D",
    warning:"#E06E16",
    default:"#5B5C5F",
  }
}
