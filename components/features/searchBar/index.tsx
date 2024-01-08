import React, { FC } from "react";
import { TextField, Typography } from "@mui/material";
import { StyledContainer, StyledTextField } from "./styles";

type Props = {};
const SearchBar: FC<Props> = ({}) => {
  return (
    <StyledContainer>
      <StyledTextField
        id="standard-search"
        label="جستجو کنید."
        type="search"
        variant="outlined"
        className="input-search"
        size="small"
      />
    </StyledContainer>
  );
};

export default SearchBar;
