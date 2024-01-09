import React, { FC } from "react";
import { Typography } from "@mui/material";
import { StyledFeatures } from "./style";

type FeaturesItem = {
  title: string;
  sequence: number;
};
type Props = {
  modes: Array<FeaturesItem>;
};

const FeaturesItem: FC<Props> = ({ modes }) => {
  return (
    <>
      <StyledFeatures>
        {modes.map((item, index) => (
          <Typography
            className="space-item"
            variant="body3"
            key={"FEATURE_ITEM_" + index}
          >
            {item.title}{" "}
          </Typography>
        ))}
      </StyledFeatures>
    </>
  );
};

export default FeaturesItem;
