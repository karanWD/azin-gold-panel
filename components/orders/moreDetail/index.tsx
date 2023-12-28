import React, {FC} from 'react';
import {StyledMoreDetail} from "./styles";
import {Box, Button, Popover, Typography} from "@mui/material";
import Image from "next/image";

type Props = {
  id: string
}
const MoreDetail: FC<Props> = ({id}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledMoreDetail>
      <Button className='more-button' variant="text" onClick={handleClick}>
          <Image src={"/icons/more.svg"} alt={"جزئیات"} layout="fill"/>
      </Button>
      <Popover
        className="popover-container"
        id={id}
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          ".MuiPopover-paper": {
            padding: '8px',
            display: 'flex',
            flexDirection: "column",
            rowGap: "8px",
            borderRadius: '8px',
            boxShadow: "0 6px 16px rgba(0,0,0,0.08)"
          }
        }}
      >
        <Typography>جزئیات سفارش</Typography>
        <Typography>تغییر وضعیت</Typography>
      </Popover>
    </StyledMoreDetail>
  );
};

export default MoreDetail;
