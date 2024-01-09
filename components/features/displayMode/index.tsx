import React,{FC} from "react";
import { Typography } from "@mui/material";
import {DisplayModes} from "../../../data/DisplayModes";
import {DISPLAY_MODES} from "../../../enums/DisplayModes";

type Props = {
    modes:  DISPLAY_MODES;
}
const DisplayMode: FC<Props> = ({modes}) => {

    return (
        <>
            <Typography className="space-item" variant="body3">
                {DisplayModes[modes].text}
            </Typography>
        </>
    )
}

export default DisplayMode;