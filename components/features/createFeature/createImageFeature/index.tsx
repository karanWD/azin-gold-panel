import React, { FC, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { StyledCreateImage } from "./styles";

type Props = {
  setImageInput: (value: string) => void;
};
const InputImageFeature: FC<Props> = ({ setImageInput }) => {
  return (
    <StyledCreateImage>
      <Typography className="header-search" variant="body3">
        عکس ویژگی
      </Typography>
      <input
        dir="ltr"
        type="file"
        className="create-header-Input"
        placeholder=" عکس محصول را وارد کنید ."
        required
        onChange={(e) => setImageInput((p) => [...p, e.target.files[0]])}
      />
    </StyledCreateImage>
  );
};

export default InputImageFeature;
