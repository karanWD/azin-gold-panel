import React,{FC, useState} from "react";
import { Box, TextField, Typography } from "@mui/material";
import { StyledCreateSort } from "./styles";

type Props = {
    amountInput: string;
    setAmountInput: () => void;
}
const InputSortFeature: FC<Props> = ({amountInput, setAmountInput}) => {
    const [valueInput , setValueInput] = useState<string>("1")
    return (
        <StyledCreateSort >
            <Typography className="header-search" variant="body3">ترتیب نمایش</Typography>
            <TextField
                dir="ltr"
                size="small"
                type="search"
                variant="outlined"
                className="create-sort-Input"
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
            />
        </StyledCreateSort>
    )
}

export default InputSortFeature;