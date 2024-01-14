import React,{FC, useState} from "react";
import { Box, TextField, Typography } from "@mui/material";
import { StyledCreateDescription } from "./styles";

type Props = {
    editFeature?: boolean;
    onChangeHandler: (value:string) => void;
}
const InputDescriptionFeature: FC<Props> = ({onChangeHandler ,editFeature}) => {
    
    return (
        <StyledCreateDescription>
            <Typography className="title-input" variant="body3">توضیح ویژگی</Typography>
            <TextField
                dir="ltr"
                size="small"
                type="search"
                variant="outlined"
                className="create-description-Input"
                disabled={editFeature}
                placeholder=" توضیح ویژگی را وارد کنید ."
                onChange={(e) => onChangeHandler(e.target.value)}
            />
        </StyledCreateDescription>
    )
}

export default InputDescriptionFeature;