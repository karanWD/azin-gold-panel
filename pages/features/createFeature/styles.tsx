import {Box, BoxProps, styled} from "@mui/material";

export const StyledAddFeature = styled(Box)<BoxProps>(({theme})=>({
  display:'flex',
  flexDirection:'column',
  rowGap:'24px',
  ".container": {
    backgroundColor:theme.palette.neutral["white"],
    padding:'24px',
    borderRadius:'16px'
  },
  ".add-value":{
    marginTop: "10px",
  },
  ".add-value-icon":{
    position: "relative",
    top: "8px",
    margin: "0 0 0 8px"
  },
  ".box-add-value":{
    marginTop:"20px"
  },
  ".header-box":{
    borderBottom: `1px solid ${theme.palette.neutral[100]}`,
    paddingBottom: "20px"
  },
  ".box-values-list":{
    display: "flex",
    marginTop:"10px"
  },
  ".back-to-list":{
    display: "flex",
    cursor: "pointer"
  },
  ".back-icon":{
    margin: "3px",
    rotate: "180deg"
  }
}))

