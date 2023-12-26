import React from 'react';
import Image from "next/image";
import {Box} from "@mui/material";
import {NavigationLinks} from "./data/links";
import NavigationItem from "./navigationItem";
import {StyledNavigation} from "./styles";
import {useRouter} from "next/router";

const Navigation = () => {
  const router = useRouter()
  return (
    <StyledNavigation>
      <Image src={"/images/logo.jpg"} alt={"آذین گلد | Azin Gold"} layout="fixed" height={40} width={111}/>
      <Box className="links-container">
        {NavigationLinks.map((item, index) => (
          <NavigationItem key={"NAVIGATION_ITEM_" + index}
                          icon={item.icon}
                          href={item.href}
                          title={item.title}
                          isDisabled={item.isDisabled}
                          isActive={router.asPath === item.href}
          />
        ))}
      </Box>
    </StyledNavigation>
  );
};

export default Navigation;