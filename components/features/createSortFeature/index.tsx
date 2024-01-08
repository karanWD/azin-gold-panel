import React,{FC, useState} from "react";
import { Box, TextField, Typography } from "@mui/material";
import { StyledCreateSort } from "./styles";

type Props = {
    
}
const InputSortFeature: FC<Props> = ({}) => {
    const [valueInput , setValueInput] = useState<string>("1")
    console.log(valueInput)
    return (
        <StyledCreateSort >
            <Typography className="header-search" variant="body3">ترتیب نمایش</Typography>
            <TextField
                dir="ltr"
                size="small"
                type="search"
                variant="outlined"
                className="create-sort-Input"
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
            />
        </StyledCreateSort>
    )
}

export default InputSortFeature;