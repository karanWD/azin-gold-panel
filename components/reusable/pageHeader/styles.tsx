import {Box, BoxProps, styled} from "@mui/material";

export const StyledPageHeader = styled(Box)<BoxProps>(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  ".page-title": {
    color: theme.palette.neutral[900]
  },
  ".profile-container":{
    display:'flex',
    columnGap:'8px',
    alignItems:'center'
  },
  ".username-container":{
    color:theme.palette.neutral[900]
  },
  ".welcome-message":{
    color:theme.palette.neutral[300]
  }
}))
