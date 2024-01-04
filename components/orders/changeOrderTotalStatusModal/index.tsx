import React from 'react';
import {StyledChangeOrderTotalStatus} from "./styles";
import {Box, FormControl, MenuItem, Select, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ChangeOrderTotalStatusMoadl  = () => {
  return (
    <StyledChangeOrderTotalStatus>
      <Box className='change-status-modal-header'>
        <Typography>تغییر وضعیت محصولات</Typography>
        <CloseIcon fontSize="medium" onClick={closeHandler}/>
      </Box>
      <Box className="change-status-modal-body">
        <Typography>وضعیت</Typography>
        <FormControl>
          <Select
            className="select-status-container"
            size={"small"}
            value={newStatus}
            onChange={handleChange}
          >
            {generateOptions().map((item, index) => (
              <MenuItem key={"OPTION_ITEM_" + index} value={item.value}>{item.text}</MenuItem>
            ))
            }
          </Select>
        </FormControl>
      </Box>
    </StyledChangeOrderTotalStatus>
  );
};

export default ChangeOrderTotalStatusMoadl;
