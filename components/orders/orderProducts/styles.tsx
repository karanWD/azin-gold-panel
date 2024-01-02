import {Box, styled} from "@mui/material";

export const StyledOrderProducts = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '12px',
  ".products-container": {
    backgroundColor: theme.palette.neutral["white"],
    display: 'flex',
    flexDirection: 'column',
    rowGap: '12px',
    padding: "0 2px 2px 2px",
    borderRadius: '16px',
  },
  ".products-name-container": {

    ".products-name": {
      padding: '12px 20px 0 20px',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '28px',
      color: theme.palette.neutral["900"]
    },
    ".products-wage": {
      padding: '0 20px 0 20px',
      marginTop: '4px',
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '24px',

    }
  },
  ".sub-products-container": {
    display: 'flex',
    borderRadius: '0 0 16px 16px',
    flexDirection: 'column',
    rowGap: '20px',
    padding: '20px 32px',
    backgroundColor: theme.palette.neutral["100"]
  },
  ".product-item-container":{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',

  },
  ".product-item-weight":{
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '24px',
    color: theme.palette.neutral["300"]
  },
  ".product-item-info-title":{
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '24px',
    color: theme.palette.neutral["300"]
  },
  ".product-item-info-value":{
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '28px',
    color: theme.palette.neutral["900"]
  }
}))