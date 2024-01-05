import { Box,Typography } from "@mui/material";
import { StyledProductsPage, StyledItemBox } from "./styles";

const ProductsPage = () => {
    return ( 
        <StyledProductsPage>
            <Box className="box-item">
                <StyledItemBox>
                    <Typography variant={"title3"} className="page-title">products</Typography>
                </StyledItemBox>
                <StyledItemBox>
                    details
                </StyledItemBox>
            </Box>
            <Box className="box-item">
                <StyledItemBox>
                    <Typography variant={"title3"} className="page-title">products</Typography>
                </StyledItemBox>
                <StyledItemBox>
                    details
                </StyledItemBox>
            </Box>
            <Box className="box-item">
                <StyledItemBox>
                    <Typography variant={"title3"} className="page-title">products</Typography>
                </StyledItemBox>
                <StyledItemBox>
                    details
                </StyledItemBox>
            </Box>
        </StyledProductsPage>
     );
}
 
export default ProductsPage;