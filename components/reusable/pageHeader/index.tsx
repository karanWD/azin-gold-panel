import React, {FC, useEffect, useState} from 'react';
import {StyledPageHeader} from "./styles";
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {getCookie} from "cookies-next";

const PageHeader: FC<{ title: string }> = ({title}) => {
  //Because of serve side error of not matching client
  const [username, setUsername] = useState()
  useEffect(() => {
    const userData = getCookie("aebc8a60f2fde26146e08d8cc0bc5371")
    const user = userData && JSON.parse(userData)
    setUsername(user.name)
  }, [])
  return (
    username &&
    <StyledPageHeader>
      <Typography variant="h2" className="page-title">{title}</Typography>
      <Box className="profile-container">
        <Image src="/images/user-avatar.png" alt={"کاربر آذین گلد"} width={40} height={40} layout="fixed"/>
        <Box>
          <Typography className="welcome-message">خوش آمدید</Typography>
          <Typography className="username-container">{username}</Typography>
        </Box>
      </Box>
    </StyledPageHeader>
  );
};

export default PageHeader;
