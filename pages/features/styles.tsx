import {Box, BoxProps, styled} from "@mui/material";

export const StyledPropertyPage = styled(Box)<BoxProps>(({theme}) => ({
  display:'flex',
  flexDirection:'column',
  rowGap:'24px',
  ".box-item":{
    borderRadius:'16px'
  },
  ".pagination-container":{
    width:"100%",
    display:'flex',
    justifyContent:'center'
  },
  ".space-item":{
    margin:"0 2px"
  },
}))
