import {Box, BoxProps, styled} from "@mui/material";

export const StyledProductsPage = styled(Box)<BoxProps>(() => ({
  display:'flex',
  flexDirection:'column',
  ".box-item":{
    borderRadius:'16px'
  }
}))

export const StyledItemBox = styled(Box)<BoxProps>(({theme})=>({
  backgroundColor:theme.palette.neutral["white"],
  padding:'24px',
  margin:'24px',
  borderRadius:'16px',
  "title-item":{
    color: theme.palette.neutral[900]
  }
}))