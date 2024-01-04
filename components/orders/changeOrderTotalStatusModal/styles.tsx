import {Box, BoxProps, styled} from "@mui/material";

export const StyledChangeOrderTotalStatus = styled(Box)<BoxProps>(({theme})=>({
  backgroundColor: theme.palette.neutral["white"],
  width: '360px',
  borderRadius: '16px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '24px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}))