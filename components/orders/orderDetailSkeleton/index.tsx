import React from "react";
import { Box, Skeleton } from "@mui/material";

const OrderDetailSkeleton = () => {
  return (
    <Box display="flex" flexDirection="column" gap="24px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" flexDirection="column" gap="12px">
          <Skeleton variant="text" width={20} height={28} animation="wave" />
          <Skeleton variant="text" width={175} height={40} animation="wave" />
        </Box>
        <Skeleton
          variant="rectangular"
          width={162}
          height={40}
          animation="wave"
        />
      </Box>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={140}
        animation="wave"
      />
      <Box display="flex" flexDirection="column" gap="12px">
        <Box display="flex" alignItems="center" gap="8px">
          <Skeleton
            variant="rectangular"
            width={40}
            height={40}
            animation="wave"
          />
          <Skeleton variant="text" width={112} height={40} animation="wave" />
        </Box>
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={284}
          animation="wave"
        />
      </Box>
      <Box display="flex" flexDirection="column" gap="12px">
        <Box display="flex" alignItems="center" gap="8px">
          <Skeleton
            variant="rectangular"
            width={40}
            height={40}
            animation="wave"
          />
          <Skeleton variant="text" width={112} height={40} animation="wave" />
        </Box>
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={284}
          animation="wave"
        />
      </Box>
    </Box>
  );
};

export default OrderDetailSkeleton;
