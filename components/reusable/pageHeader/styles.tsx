import {Box, BoxProps, styled} from "@mui/material";

export const StyledPageHeader = styled(Box)<BoxProps>(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  ".page-title": {
    fontFamily: "IRANSansX_Bold",
    fontSize: '24px',
    lineHeight: "40px",
    fontWeight: "700",
    color: theme.palette.neutral[900]
  },
  ".profile-container":{
    display:'flex',
    columnGap:'8px',
    alignItems:'center'
  },
  ".username-container":{
    fontSize:'14px',
    lineHeight:'28px',
    color:theme.palette.neutral[900]
  },
  ".welcome-message":{
    fontSize:'12px',
    lineHeight:'24px',
    color:theme.palette.neutral[300]
  }
}))
