import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import Link from "next/link";

type Props = {
  icon: string,
  href: string,
  title: string,
  isActive:boolean
}
const NavigationItem: FC<Props> = ({icon, href, title,isActive}) => {
  return (
    <Box>
      <Link href={href} passHref>
        <Box>
          <Typography variant="body2">
            {title}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default NavigationItem;