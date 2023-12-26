import {Box} from "@mui/material";
import {ReactNode} from "react";
import Navigation from "./navigation";


const LayoutIndex = ({children}: { children: ReactNode }) => {
  return (
    <Box display='flex' flexDirection="row-reverse">
      <Box flexBasis="280px">
        <Navigation/>
      </Box>
      <Box flex="7">
        {children}
      </Box>
    </Box>
  );
};

export default LayoutIndex;