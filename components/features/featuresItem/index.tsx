import React,{FC} from "react";
import { Box,Typography } from "@mui/material";

type Props = {
    modes:  Array<any>;
}
const FeaturesItem: FC<Props> = ({modes}) => {
    return (
        <>
           <Box>{modes.map((item) => (
                <Typography className="space-item" variant="body3">
                    {item.title}{" "}
                </Typography>
            ))}
          </Box>
        </>
    )
}

export default FeaturesItem;