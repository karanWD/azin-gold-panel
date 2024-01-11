import React,{FC, ReactNode, useState} from "react";
import { Box, TextField, Typography } from "@mui/material";
import { StyledCreateHeader } from "./styles";

type Props = {
    amountInput: string;
    setAmountInput: (value:string) => void;
}
const InputHeaderFeature: FC<Props> = ({amountInput,setAmountInput}) => {
    
    return (
        <StyledCreateHeader>
            <Typography className="header-search" variant="body3">عنوان</Typography>
            <TextField
                dir="ltr"
                size="small"
                type="search"
                variant="outlined"
                className="create-header-Input"
                placeholder=" عنوان ویژگی را وارد کنید ."
                value={amountInput}
                required
                onChange={(e) => setAmountInput(e.target.value)}
            />
        </StyledCreateHeader>
    )
}

export default InputHeaderFeature;