import React,{FC} from "react";
import { Typography } from "@mui/material";
import {Statuses} from "../../../data/Statuses";
import {DISPLAY_MODES} from "../../../enums/DisplayModes";

type Props = {
    modes:  DISPLAY_MODES;
}
const DisplayMode: FC<Props> = ({modes}) => {
    return (
        <>
            <Typography className="space-item" variant="body3">
                {Statuses[modes].text}
            </Typography>
        </>
    )
}

export default DisplayMode;