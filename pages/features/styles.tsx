import {Box, BoxProps, styled} from "@mui/material";

export const StyledPropertyPage = styled(Box)<BoxProps>(({theme}) => ({
  display:'flex',
  flexDirection:'column',
  rowGap:'24px',
  ".box-item":{
    borderRadius:'16px'
  },
  ".add-features":{
    marginTop: "10px",
  },
  ".add-features-icon":{
    position: "relative",
    top: "8px",
    margin: "0 0 0 8px"
  },
  ".box-child":{
    margin:"0 20px 0 auto"
  }
}))
