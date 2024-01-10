import { TypographyOptions } from '@mui/material/styles/createTypography'

interface TypographyType {
  fontFamily: string
  fontWeight: string
  fontSize: string
  lineHeight: string

  [key: string]: string
}

export interface CustomTypographyOptions extends TypographyOptions {
  title1?: TypographyType
  title2?: TypographyType
  title3?: TypographyType
  title4?: TypographyType
  subtitle1?: TypographyType
  subtitle2?: TypographyType
  subtitle3?: TypographyType
  button1?: TypographyType
  button2?: TypographyType
  button3?: TypographyType
  body1?: TypographyType
  body2?: TypographyType
  body3?: TypographyType
  caption?: TypographyType
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title1: true
    title2: true
    title3: true
    title4: true
    subtitle1: true
    subtitle2: true
    subtitle3: true
    button1: true
    button2: true
    button3: true
    body1: true
    body2: true
    body3: true
    caption: true
  }
}

export const typography: CustomTypographyOptions = {
  title1: {
    fontFamily: 'IRANSansX_Bold',
    fontWeight: 'bold',
    fontSize: '32px',
    lineHeight: '56px',
  },
  title2: {
    fontFamily: 'IRANSansX_Bold',
    fontSize: '24px',
    lineHeight: '40px',
    fontWeight: 'bold',
  },
  title3: {
    fontFamily: 'IRANSansX_Bold',
    fontSize: '20px',
    lineHeight: '40px',
    fontWeight: 'bold',
  },
  title4: {
    fontFamily: 'IRANSansX_Bold',
    fontSize: '16px',
    lineHeight: '32px',
    fontWeight: 'bold',
  },
  subtitle1: {
    fontFamily: 'IRANSansX',
    fontSize: '18px',
    lineHeight: '36px',
    fontWeight: 'normal',
  },
  subtitle2: {
    fontFamily: 'IRANSansX',
    fontSize: '16px',
    lineHeight: '32px',
    fontWeight: 'normal',
  },
  subtitle3: {
    fontFamily: 'IRANSansX',
    fontSize: '14px',
    lineHeight: '28px',
    fontWeight: 'normal',
  },
  button1: {
    fontFamily: 'IRANSansX',
    fontSize: '16px',
    lineHeight: '32px',
    fontWeight: 'normal',
  },
  button2: {
    fontFamily: 'IRANSansX',
    fontSize: '14px',
    lineHeight: '28px',
    fontWeight: 'normal',
  },
  button3: {
    fontFamily: 'IRANSansX',
    fontSize: '12px',
    lineHeight: '24px',
    fontWeight: 'normal',
  },
  body1: {
    fontFamily: 'IRANSansX',
    fontSize: '18px',
    lineHeight: '36px',
    fontWeight: 'normal',
  },
  body2: {
    fontFamily: 'IRANSansX',
    fontSize: '16px',
    lineHeight: '32px',
    fontWeight: 'normal',
  },
  body3: {
    fontFamily: 'IRANSansX',
    fontSize: '14px',
    lineHeight: '28px',
    fontWeight: 'normal',
  },
  caption: {
    fontFamily: 'IRANSansX',
    fontSize: '12px',
    lineHeight: '24px',
    fontWeight: 'normal',
  },
} as CustomTypographyOptions
