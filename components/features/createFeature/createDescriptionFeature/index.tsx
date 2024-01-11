import React,{FC, useState} from "react";
import { Box, TextField, Typography } from "@mui/material";
import { StyledCreateDescription } from "./styles";

type Props = {
    onChangeHandler: (value:string) => void;
}
const InputDescriptionFeature: FC<Props> = ({onChangeHandler}) => {
    
    return (
        <StyledCreateDescription>
            <Typography className="header-search" variant="body3">توضیح ویژگی</Typography>
            <TextField
                dir="ltr"
                size="small"
                type="search"
                variant="outlined"
                className="create-header-Input"
                placeholder=" توضیح ویژگی را وارد کنید ."
                onChange={(e) => onChangeHandler(e.target.value)}
            />
        </StyledCreateDescription>
    )
}

export default InputDescriptionFeature;