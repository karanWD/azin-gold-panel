import React,{FC, useState} from "react";
import { Box, TextField, Typography } from "@mui/material";
import { StyledCreateHeader } from "./styles";

type Props = {
   
}
const InputHeaderFeature: FC<Props> = ({}) => {
    const [valueInput , setValueInput] = useState("")
    
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
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
            />
        </StyledCreateHeader>
    )
}

export default InputHeaderFeature;