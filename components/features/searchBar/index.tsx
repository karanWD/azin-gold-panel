import React,{FC, useState} from "react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { StyledContainer } from "./styles";
import SearchIcon from '@mui/icons-material/Search';
import { NextPage } from "next";
import Image from "next/image";

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
                        <Box  className="icon-search">
                          <Image src={"/icons/search.svg"} alt={"جزئیات"} width={24} height={24}/>
                        </Box>
                       {/* { valueInput ? "" : <Typography variant="body3">جستجو کنید .</Typography>} */}
                      </InputAdornment>
                    ),
                  }}
            />
        </StyledContainer>
    )
}

export default SearchBar
