import React, { FC, ReactNode } from "react";
import { StyledMoreDetail } from "./styles";
import { Button, Popover } from "@mui/material";
import Image from "next/image";

type Props = {
  children?: ReactNode
}

const MoreDetail: FC<Props> = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledMoreDetail>
      <Button className="more-button" variant="text" onClick={handleClick}>
        <Image src={"/icons/more.svg"} alt={"جزئیات"} layout="fill" />
      </Button>
      <Popover
        className="popover-container"
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          ".MuiPopover-paper": {
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            rowGap: "8px",
            borderRadius: "8px",
            boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
          },
        }}>
        {children}
      </Popover>
    </StyledMoreDetail>
  );
};

export default MoreDetail;
