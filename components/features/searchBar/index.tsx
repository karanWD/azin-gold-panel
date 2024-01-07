import React,{FC, useState} from "react";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { StyledContainer } from "./styles";
import SearchIcon from '@mui/icons-material/Search';
import { NextPage } from "next";

const SearchBar: NextPage = () => {

    const [valueInput , setValueInput] = useState("")
    
    return (
        <StyledContainer>
            <Typography className="header-search" variant="body3">جستجو عنوان</Typography>
            <TextField
                dir="ltr"
                size="small"
                type="search"
                variant="outlined"
                className="search-Input"
                placeholder="جستجو کنید ."
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon className="icon-search" fontSize="large" />
                       {/* { valueInput ? "" : <Typography variant="body3">جستجو کنید .</Typography>} */}
                      </InputAdornment>
                    ),
                  }}
            />
        </StyledContainer>
    )
}

export default SearchBar;