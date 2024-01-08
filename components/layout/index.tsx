import { Box } from "@mui/material";
import { ReactNode } from "react";
import Navigation from "./navigation";
import { StyledLayout } from "./styles";

const LayoutIndex = ({ children }: { children: ReactNode }) => {
  return (
    <StyledLayout>
      <Box className="sidebar-container" flexBasis="">
        <Navigation />
      </Box>
      <Box className="content-container">{children}</Box>
    </StyledLayout>
  );
};

export default LayoutIndex;
