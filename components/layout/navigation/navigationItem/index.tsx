import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { StyledNavigationItem } from "./styles";
import Image from "next/image";

type Props = {
  icon: string;
  href: string;
  title: string;
  isActive: boolean;
  isDisabled: boolean;
};
const NavigationItem: FC<Props> = ({
  icon,
  href,
  title,
  isActive,
  isDisabled,
}) => {
  return (
    <StyledNavigationItem isActive={isActive} isDisabled={isDisabled}>
      <Link href={href} passHref>
        <Box display="flex" alignItems="center" gap="4px">
          <Image src={icon} alt={title} width={20} height={20} layout="fixed" />
          <Typography variant="button2">{title}</Typography>
        </Box>
      </Link>
    </StyledNavigationItem>
  );
};

export default NavigationItem;
