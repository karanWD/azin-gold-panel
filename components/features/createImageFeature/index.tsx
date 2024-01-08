import React,{FC, useState} from "react";
import { Box, TextField, Typography } from "@mui/material";
import { StyledCreateImage } from "./styles";

type Props = {
    
}
const InputImageFeature: FC<Props> = ({}) => {
    const [valueInput , setValueInput] = useState("")
    
    return (
        <StyledCreateImage>
            <Typography className="header-search" variant="body3">عکس ویژگی</Typography>
            <input
                dir="ltr"
                type="file"
                className="create-header-Input"
                placeholder=" عکس محصول را وارد کنید ."
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
            />
        </StyledCreateImage>
    )
}

export default InputImageFeature;