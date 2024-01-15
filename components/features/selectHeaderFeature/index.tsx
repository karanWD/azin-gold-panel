import React, { FC, useState } from 'react'
import { Box, Button, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { StyledSelectFeature } from './styles'
import CloseIcon from '@mui/icons-material/Close'
import { useRouter } from 'next/router'
import { DISPLAY_MODES } from '../../../enums/DisplayModes'
import { DisplayModes } from '../../../data/DisplayModes'

type Props = {
  closeHandler: any
}
const SelectHeaderFeature: FC<Props> = ({ closeHandler }) => {
  const [radioValue, setRadioValue] = useState<string>('')
  const [getLabel, setGetLabel] = useState<string>('')

  const router = useRouter()

  const CangeHandler = (e) => {
    setRadioValue(e.target.value)
    LabelHandler(e)
  }

  const LabelHandler = (e) => {
    if (e.target.value === DISPLAY_MODES.DEFAULT) {
      setGetLabel('حالت عادی')
    } else if (e.target.value === DISPLAY_MODES.COLOR) {
      setGetLabel('رنگ')
    } else if (e.target.value === DISPLAY_MODES.PRODUCT) {
      setGetLabel('شمارنده')
    } else if (e.target.value === DISPLAY_MODES.EXPANDABLE) {
      setGetLabel('دارای عکس')
    }
  }

  const pushHandler = () => {
    router.push(`/features/createFeature?mode=${radioValue}&title=${getLabel}`)
  }

  return (
    <StyledSelectFeature>
      <Box className="header-feature">
        <Typography variant="title4">نوع ویژگی</Typography>
        <CloseIcon fontSize="medium" onClick={closeHandler} />
      </Box>
      <Box>
        <RadioGroup className="radio-group" value={radioValue} onChange={(e) => CangeHandler(e)}>
          <FormControlLabel
            value={DISPLAY_MODES.DEFAULT}
            control={<Radio />}
            label={DisplayModes[DISPLAY_MODES.DEFAULT].text}
          />
          <FormControlLabel
            value={DISPLAY_MODES.COLOR}
            control={<Radio />}
            label={DisplayModes[DISPLAY_MODES.COLOR].text}
          />
          <FormControlLabel
            value={DISPLAY_MODES.PRODUCT}
            control={<Radio />}
            label={DisplayModes[DISPLAY_MODES.PRODUCT].text}
          />
          <FormControlLabel
            value={DISPLAY_MODES.EXPANDABLE}
            control={<Radio />}
            label={DisplayModes[DISPLAY_MODES.EXPANDABLE].text}
          />
        </RadioGroup>
        <Box className="register-feature-header">
          <Button color="primary" variant="contained" onClick={pushHandler}>
            <Typography variant={'button2'}>ثبت</Typography>
          </Button>
        </Box>
      </Box>
    </StyledSelectFeature>
  )
}

export default SelectHeaderFeature
