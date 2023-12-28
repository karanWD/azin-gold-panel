import {Box, BoxProps, styled} from "@mui/material";

export const StyledOrderPage = styled(Box)<BoxProps>(() => ({
  display:'flex',
  flexDirection:'column',
  rowGap:'24px',
  ".pagination-container":{
    width:"100%",
    display:'flex',
    justifyContent:'center'
  }
}))