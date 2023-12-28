import React from 'react';
import {Skeleton, TableBody, TableCell, TableRow} from "@mui/material";
import {StyledContainer, StyledTable} from "./styles";

const ITEMS = [null, null, null, null, null, null]

const TableSkeleton = () => {
  return (
    <StyledContainer>
      <StyledTable>
        <TableBody>
          {ITEMS.map((item, idx) => (
            <TableRow key={idx}>
              {ITEMS.map((content, index) => (
                <TableCell key={"TABLE_ROW_" + index}>
                  <Skeleton sx={{maxWidth: '90%'}}
                            animation="wave"
                            variant="text"
                            width="124px"
                            height="32px"/>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledContainer>
  );
};

export default TableSkeleton;
