import {TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import React, {FC, ReactNode} from 'react';
import {StyledContainer, StyledTable} from "./styles";

type TableProps = {
  data: {
    [key: string]: string | number | boolean | ReactNode
  }
  headings: string[]
}

const Table: FC<TableProps> = ({data, headings}) => {
  return (
    <StyledContainer>
      <StyledTable>
        {/* Titles of the Table */}
        <TableHead>
          <TableRow>
            {headings.map((heading, idx) => (
              <TableCell key={idx}>{heading}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        {/* Body of the Table */}
        <TableBody>
          {data.map((item, idx) => (
            <TableRow key={idx}>
              {Object.values(item).map((content, index) => (
                <TableCell key={"TABLE_ROW_" + index}>{content}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledContainer>
  );
};

export default Table;
