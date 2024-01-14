import React, { FC, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { StyledCreateImage } from "./styles";

type Props = {
  editFeature?: boolean;
  setImageInput: any;
};
const InputImageFeature: FC<Props> = ({ setImageInput,editFeature }) => {
  return (
    <StyledCreateImage>
      <Typography className="title-input" variant="body3">
        عکس ویژگی
      </Typography>
      <input
        dir="ltr"
        type="file"
        className="image-Input"
        placeholder=" عکس محصول را وارد کنید ."
        required
        disabled={editFeature}
        onChange={(e) => setImageInput((p) => [...p, e.target.files[0]])}
      />
    </StyledCreateImage>
  );
};

export default InputImageFeature;
