import React, { FC, ReactNode } from "react";
import { StyledSection } from "@/components/reusable/islandSections/styles";
import { Box, Typography } from "@mui/material";

type Props = {
  title: string,
  children: ReactNode
}
const Section: FC<Props> = ({ title, children }) => {
  return (
    <StyledSection>
      <Box className="section-title">
        <Typography variant="title4">{title}</Typography>
      </Box>
      <Box className="section-body">
        {children}
      </Box>
    </StyledSection>
  );
};

export default Section;
