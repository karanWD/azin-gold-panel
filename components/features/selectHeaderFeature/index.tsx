import React,{FC, useState} from "react";
import { Box, Button, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { StyledSelectFeature } from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";

type Props = {
    closeHandler: any;
}
const SelectHeaderFeature: FC<Props> = ({closeHandler}) => {
    const [radioValue , setRadioValue]=useState<string>("")
    const [getLabel , setGetLabel]=useState<string>("tt")

    const router = useRouter()

    const CangeHandler = (e) => {
        setRadioValue(e.target.value)
        LabelHandler(e)
    }

    const LabelHandler = (e) => {
        if(e.target.value === "default"){
            setGetLabel("حالت عادی")
        }else if(e.target.value === "color"){
            setGetLabel("رنگ")
        }else if(e.target.value === "product"){
            setGetLabel("شمارنده")
        }else if(e.target.value === "expandable"){
            setGetLabel("دارای عکس")
        }
    }

    const pushHandler = () => {
        router.push(`/features/createFeature?${radioValue}&title=${getLabel}`)
    }

    console.log(radioValue)
    return (
        <StyledSelectFeature>
            <Box className='header-feature'>
                <Typography variant="title4">نوع ویژگی</Typography>
                <CloseIcon fontSize="medium" onClick={closeHandler}/>
            </Box>
            <Box>
                <RadioGroup 
                    className="radio-group" 
                    value={radioValue} 
                    onChange={(e) => CangeHandler(e)}
                >
                    <FormControlLabel value="default" control={<Radio />} label="حالت عادی" />
                    <FormControlLabel value="color" control={<Radio />} label="رنگ" />
                    <FormControlLabel value="product" control={<Radio />} label="شمارنده" />
                    <FormControlLabel value="expandable" control={<Radio />} label="دارای عکس" />
                </RadioGroup>
                <Box className="register-feature-header">
                    <Button color="primary" variant="contained" onClick={pushHandler}>
                        <Typography variant={"button2"}>ثبت</Typography>
                    </Button>
                </Box>
            </Box>
        </StyledSelectFeature>
    )
}

export default SelectHeaderFeature;