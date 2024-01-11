import { styled, Switch } from "@mui/material";

export const StyledSwitch = styled(Switch)<any>(({ theme, size }) => {
  const Sizes = {
    small: {
      width: "40px",
      height: "24px",
      thumbWidth: "16px",
      thumbHeight: "16px",
      border: "1px solid ",
      borderDisable: "1px solid transparent",
      transTransform: "scale(1.5)",
    },
    medium: {
      width: "52px",
      height: "32px",
      thumbWidth: "24px",
      thumbHeight: "24px",
      border: "2px solid ",
      borderDisable: "2px solid transparent",
      transform: "translateX(20px)",
      transTransform: "scale(1.7)",
    },
  };
  return {
    overflow: "unset !important",
    width: Sizes[size].width,
    height: Sizes[size].height,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      marginTop: "4px",
      marginBottom: "4px",
      marginLeft: "4px",
      padding: 0,
      transition: "transform 300ms",
      "&.Mui-checked": {
        transform: Sizes[size].transform,
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.bg.secondary["A"],
          opacity: 1,
          border: 0,
        },
        "& .MuiSwitch-thumb": {
          backgroundColor: theme.palette.primary.white,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          backgroundColor: theme.palette.bg.neutral["D"],
        },
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        backgroundColor: theme.palette.primary.white,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.bg.neutral["D"],
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: Sizes[size].thumbWidth,
      height: Sizes[size].thumbHeight,
      backgroundColor: theme.palette.secondary[600],
    },
    "& .MuiSwitch-track": {
      position: "relative",
      borderRadius: 100,
      backgroundColor: theme.palette.bg.neutral["D"],
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
    // "&:hover .rtl-mui-8je8zh-MuiTouchRipple-root": {
    //   transition: "0.3s",
    //   backgroundColor: theme.palette.primary[12],
    //   transform: Sizes[size].transTransform,
    //   zIndex: "-1",
    // },
  };
});
