import React,{FC, useState} from "react";
import { Box, TextField, Typography } from "@mui/material";
import { StyledCreateImage } from "./styles";

type Props = {
    amountInput: string;
    setAmountInput: () => void;
}
const InputImageFeature: FC<Props> = ({amountInput, setAmountInput}) => {
    
    return (
        <StyledCreateImage>
            <Typography className="header-search" variant="body3">عکس ویژگی</Typography>
            <input
                dir="ltr"
                type="file"
                className="create-header-Input"
                placeholder=" عکس محصول را وارد کنید ."
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
            />
        </StyledCreateImage>
    )
}

export default InputImageFeature;