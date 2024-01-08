import {Box, BoxProps, styled} from "@mui/material";

export const StyledCreateImage = styled(Box)<BoxProps>(({theme})=>({
    marginLeft: "20px",
  ".container": {
    backgroundColor:theme.palette.neutral["white"],
    padding:'24px',
    borderRadius:'16px'
  },
  ".create-header-Input":{
    backgroundColor:theme.palette.neutral["white"],
    borderRadius:'5px',
    width: "320px",
    direction: "ltr",
    border: `1px solid ${theme.palette.neutral[300]}`,
  },
  ".create-header-Input::file-selector-button":{
    backgroundColor:theme.palette.neutral["black"],
    borderRadius:'2px',
    color: theme.palette.neutral["white"],
    dairection: "rtl" ,
    width: "80px",
    height: "40px",
    direction: "rtl",
    border: `1px solid ${theme.palette.neutral["300"]}`,
  },
  ".create-sort-Input":{
    backgroundColor:theme.palette.neutral["white"],
    borderRadius:'8px',
    width: "80px",
    direction: "rtl",
  },
  ".create-value-Input":{
    backgroundColor:theme.palette.neutral["white"],
    borderRadius:'8px',
    width: "320px",
    direction: "rtl",
  },
  ".header-search":{
    display: "block",
    color: theme.palette.neutral["main"],
    marginBottom: "2px"
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
  ".header-search-box":{
    borderBottom: `1px solid ${theme.palette.neutral[100]}`,
    paddingBottom: "20px"
  },
  ".box-values-list":{
    display: "flex",
    marginTop:"10px"
  },
  ".box-value-item":{
    marginLeft: "20px"
  }
  
}))

