import {NextPage} from "next";
import {StyledAddFeature} from "./styles"
import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InputHeaderFeature from "../../../components/features/createHeaderFeature";
import InputSortFeature from "../../../components/features/createSortFeature";
import InputValueFeature from "../../../components/features/createValueFeature";
import InputDescriptionFeature from "../../../components/features/createDescriptionFeature";
import InputImageFeature from "../../../components/features/createImageFeature";
import { useRouter } from "next/router";

    const FeaturPage: NextPage = () => {
        const [numberValues , setNumberValues] = useState<number>(1)
        const router = useRouter()
        console.log(router.query.expandable)
    return ( 
        <StyledAddFeature>
            <Box>
                <Box className="back-to-list" onClick={() => router.push("/features")}>
                    <KeyboardBackspaceIcon className="back-icon" />
                    <Typography variant="body3">
                        بازگشت به لیست
                    </Typography>
                </Box>
                <Typography variant="title2">
                ایجاد ویژگی {" "}{router.query.title}
                </Typography>
            </Box>
            <Box className="container">
                <Box className="header-box">
                    <InputHeaderFeature />
                </Box>  
            {(() => {
                for (let i = 3; i <= 5; i++) {
                    var data = <Box className="box-values-list">
                                    <InputSortFeature />
                                    <InputValueFeature />
                                    { router.query.product === "" ?
                                        <InputDescriptionFeature />
                                        : <></>
                                    }
                                    { router.query.color === "" || router.query.expandable === "" ?
                                        <InputImageFeature />
                                        : <></>
                                    }
                                </Box>
                }
                return data;
            })()}
                <Box className="box-add-value" onClick={() => setNumberValues((e) => e++)}>
                    <AddCircleIcon className="add-value-icon"/>
                    <Typography className="add-value" variant="button1">
                        افزودن مقدار  
                    </Typography>
                </Box>
            </Box>
        </StyledAddFeature>
     );
}
 
export default FeaturPage;