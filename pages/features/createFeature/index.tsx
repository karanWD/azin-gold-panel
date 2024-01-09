import { NextPage } from "next";
import { StyledAddFeature } from "./styles";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InputHeaderFeature from "../../../components/features/createHeaderFeature";
import InputSortFeature from "../../../components/features/createSortFeature";
import InputValueFeature from "../../../components/features/createValueFeature";
import InputDescriptionFeature from "../../../components/features/createDescriptionFeature";
import InputImageFeature from "../../../components/features/createImageFeature";
import { useRouter } from "next/router";
import UseFetch from "../../../hooks/useFetch";
import { ApiRoutes } from "../../../enums/ApiRoutes";
import { DISPLAY_MODES } from "../../../enums/DisplayModes";

const FeaturPage: NextPage = () => {
  const [numberValues, setNumberValues] = useState<number>(1);
  const router = useRouter();

  const [headerInput, setHeaderInput] = useState<string>("");
  const [sortInput, setSortInput] = useState<string>("");
  const [valueInput, setValueInput] = useState<string>("");
  const [descreptionInput, setDescreptionInput] = useState<string>("");
  const [imageInput, setImageInput] = useState<string>("");

  const { request } = UseFetch();

  //   const editStatusProducts = (e) => {

  //     console.log(formData)
  //     request({
  //     headers:{setContentType:"multipart/form-data"},
  //       method: "POST",
  //       url: ApiRoutes.ADMIN_FEATURES_GROUPS,
  //       data: {
  //         header: headerInput,
  //         features: [{sequence:sortInput , title:valueInput}],
  //         displayMode: router.query.mode,
  //       },
  //     }).then((res) => {
  //       console.log(res);
  //     });
  //   };


  const submitHandler = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    return;
  };

  return (
    <StyledAddFeature>
      <form onSubmit={submitHandler}>
        <Box>
          <Box
            className="back-to-list"
            onClick={() => router.push("/features")}
          >
            <KeyboardBackspaceIcon className="back-icon" />
            <Typography variant="body3">بازگشت به لیست</Typography>
          </Box>
          <Typography variant="title2">
            ایجاد ویژگی {router.query.title}
          </Typography>
        </Box>
        <Box className="container">
          <Box className="header-box">
            <InputHeaderFeature
              amountInput={headerInput}
              setAmountInput={setHeaderInput}
            />
          </Box>
          {(() => {
            for (let i = 3; i <= 5; i++) {
              var data = (
                <Box className="box-values-list">
                  <InputSortFeature
                    amountInput={sortInput}
                    setAmountInput={setSortInput}
                  />
                  <InputValueFeature
                    amountInput={valueInput}
                    setAmountInput={setValueInput}
                  />
                  {router.query.mode === DISPLAY_MODES.PRODUCT ? (
                    <InputDescriptionFeature
                      amountInput={descreptionInput}
                      setAmountInput={setDescreptionInput}
                    />
                  ) : (
                    <></>
                  )}
                  {router.query.mode === DISPLAY_MODES.COLOR ||
                  router.query.mode === DISPLAY_MODES.EXPANDABLE ? (
                    <InputImageFeature
                      amountInput={imageInput}
                      setAmountInput={setImageInput}
                    />
                  ) : (
                    <></>
                  )}
                </Box>
              );
            }
            return data;
          })()}
          <Box
            className="box-add-value"
            onClick={() => setNumberValues((e) => e++)}
          >
            <AddCircleIcon className="add-value-icon" />
            <Typography className="add-value" variant="button1">
              افزودن مقدار
            </Typography>
          </Box>
        </Box>
        <Box className="register-feature">
          <Button color="primary" variant="contained" type="submit">
            <Typography variant={"button2"}>ثبت</Typography>
          </Button>
        </Box>
      </form>
    </StyledAddFeature>
  );
};

export default FeaturPage;
