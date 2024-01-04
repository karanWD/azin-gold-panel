import {
  TypographyOptions,
  TypographyStyleOptions,
} from '@mui/material/styles/createTypography'
/* eslint-disable  no-unused-vars */
declare module '@mui/material/styles' {
  interface TypographyVariants {
    title1:TypographyStyleOptions
    title2:TypographyStyleOptions
    title3:TypographyStyleOptions
    title4:TypographyStyleOptions
    subtitle1:TypographyStyleOptions
    subtitle2:TypographyStyleOptions
    subtitle3:TypographyStyleOptions
    button1:TypographyStyleOptions
    button2:TypographyStyleOptions
    button3:TypographyStyleOptions
    body1:TypographyStyleOptions
    body2:TypographyStyleOptions
    body3:TypographyStyleOptions
    caption:TypographyStyleOptions
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title1?:TypographyStyleOptions
    title2?:TypographyStyleOptions
    title3?:TypographyStyleOptions
    title4?:TypographyStyleOptions
    subtitle1?:TypographyStyleOptions
    subtitle2?:TypographyStyleOptions
    subtitle3?:TypographyStyleOptions
    button1?:TypographyStyleOptions
    button2?:TypographyStyleOptions
    button3?:TypographyStyleOptions
    body1?:TypographyStyleOptions
    body2?:TypographyStyleOptions
    body3?:TypographyStyleOptions
    caption?:TypographyStyleOptions
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title1:true
    title2:true
    title3:true
    title4:true
    subtitle1:true
    subtitle2:true
    subtitle3:true
    button1:true
    button2:true
    button3:true
    body1:true
    body2:true
    body3:true
    caption:true
  }
}

export const typography: TypographyOptions = {
  title1: {
    fontFamily: 'IRANSansX_Bold',
    fontWeight: "bold",
    fontSize: '32px',
    lineHeight: '56px',
  },
  title2: {
    fontFamily: 'IRANSansX_Bold',
    fontSize: '24px',
    lineHeight: '40px',
    fontWeight: "bold",
  },
  title3: {
    fontFamily: 'IRANSansX_Bold',
    fontSize: '20px',
    lineHeight: '40px',
    fontWeight: "bold",
  },
  title4: {
    fontFamily: 'IRANSansX_Bold',
    fontSize: '16px',
    lineHeight: '32px',
    fontWeight: "bold",
  },
  subtitle1: {
    fontFamily: 'IRANSansX',
    fontSize: '18px',
    lineHeight: '36px',
    fontWeight: "normal",
  },
  subtitle2: {
    fontFamily: 'IRANSansX',
    fontSize: '16px',
    lineHeight: '32px',
    fontWeight: "normal",
  },
  subtitle3: {
    fontFamily: 'IRANSansX',
    fontSize: '14px',
    lineHeight: '28px',
    fontWeight: "normal",
  },
  button1: {
    fontFamily: 'IRANSansX',
    fontSize: '16px',
    lineHeight: '32px',
    fontWeight: "normal",
  },
  button2: {
    fontFamily: 'IRANSansX',
    fontSize: '14px',
    lineHeight: '28px',
    fontWeight: "normal",
  },
  button3: {
    fontFamily: 'IRANSansX',
    fontSize: '12px',
    lineHeight: '24px',
    fontWeight: "normal",
  },
  body1: {
    fontFamily: 'IRANSansX',
    fontSize: '18px',
    lineHeight: '36px',
    fontWeight: "normal",
  },
  body2: {
    fontFamily: 'IRANSansX',
    fontSize: '16px',
    lineHeight: '32px',
    fontWeight: "normal",
  },
  body3: {
    fontFamily: 'IRANSansX',
    fontSize: '14px',
    lineHeight: '28px',
    fontWeight: "normal",
  },
  caption: {
    fontFamily: 'IRANSansX',
    fontSize: '12px',
    lineHeight: '24px',
    fontWeight: "normal",
  },

}
