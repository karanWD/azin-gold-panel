import React,{FC, useState} from "react";
import { Box, TextField, Typography } from "@mui/material";
import { StyledCreateValue } from "./styles";

type Props = {
    onChangeHandler: (value:string) => void;
}
const InputValueFeature: FC<Props> = ({onChangeHandler}) => {
    
    return (
        <StyledCreateValue>
            <Typography className="header-search" variant="body3">مقدار</Typography>
            <TextField
                dir="ltr"
                size="small"
                type="search"
                variant="outlined"
                className="create-header-Input"
                placeholder=" مقدار ویژگی را وارد کنید ."
                required
                onChange={(e) => onChangeHandler(e.target.value)}
            />
        </StyledCreateValue>
    )
}

export default InputValueFeature;