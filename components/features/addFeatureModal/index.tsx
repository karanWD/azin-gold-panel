import React,{FC, useState} from "react";
import { Box, Modal, Typography } from "@mui/material";
import { StyledAddFeatureModal } from "./styles";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SelectHeaderFeature from "../selectHeaderFeature";
type Props = {
    
}
const AddFeatureModal: FC<Props> = ({}) => {
    const [openModal,setOpenModal]=useState<boolean>(false)

    return (
        <StyledAddFeatureModal>
            <Box className="box-child" onClick={()=>setOpenModal(true)}>
                <AddCircleIcon className="add-features-icon"/>
                <Typography className="add-features" variant="button1">
                    افزودن ویژگی  
                </Typography>
            </Box>
            <Modal
                open={openModal}
                onClose={()=>setOpenModal(false)}
            >
                <SelectHeaderFeature closeHandler={()=>setOpenModal(false)}/>
            </Modal>
        </StyledAddFeatureModal>
    )
}

export default AddFeatureModal;