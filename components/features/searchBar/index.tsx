import React, { useState } from 'react'
import { Box, InputAdornment } from '@mui/material'
import { StyledContainer } from './styles'
import { NextPage } from 'next'
import Image from 'next/image'
import TextField from '@/components/UI/textField'

const SearchBar: NextPage = () => {
  const [valueInput, setValueInput] = useState('')

  return (
    <StyledContainer>
      <TextField
        label={'جستجو عنوان'}
        placeholder="جستجو کنید ."
        className="search-Input"
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box className="icon-search">
                <Image src={'/icons/search.svg'} alt={'جزئیات'} width={24} height={24} />
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
