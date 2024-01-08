import React,{FC, useState} from "react";
import { Box, TextField, Typography } from "@mui/material";
import { StyledCreateValue } from "./styles";

type Props = {
    
}
const InputValueFeature: FC<Props> = ({}) => {
    const [valueInput , setValueInput] = useState("")
    
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
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
            />
        </StyledCreateValue>
    )
}

export default InputValueFeature;