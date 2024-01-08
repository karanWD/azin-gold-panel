import React, { FC } from "react";
import { Typography } from "@mui/material";
import { StyledHeaderTypography } from "./styles";

type Props = {
  header: string;
};
const HeaderFeatures: FC<Props> = ({ header }) => {
  return (
    <StyledHeaderTypography>
      <Typography variant="subtitle3">{header}</Typography>
    </StyledHeaderTypography>
  );
};

export default HeaderFeatures;
