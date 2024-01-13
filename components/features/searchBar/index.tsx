import React from 'react'
import { StyledContainer, StyledTextField } from './styles'

const SearchBar = () => {
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
  )
}

export default SearchBar
