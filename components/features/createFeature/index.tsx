import { NextPage } from "next";
import { StyledAddFeature } from "./styles";
import { Box, Button, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useEffect, useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InputHeaderFeature from "./createHeaderFeature";
import InputSortFeature from "./createSortFeature";
import InputValueFeature from "./createValueFeature";
import InputDescriptionFeature from "./createDescriptionFeature";
import InputImageFeature from "./createImageFeature";
import { useRouter } from "next/router";
import UseFetch from "../../../hooks/useFetch";
import { ApiRoutes } from "../../../enums/ApiRoutes";
import { DISPLAY_MODES } from "../../../enums/DisplayModes";
import DeleteIcon from '@mui/icons-material/Delete';
import Image from "next/image";

const CreateFeatureComponent: NextPage = () => {
  const [numberValues, setNumberValues] = useState<number>(1);
  const router = useRouter();

  const [headerInput, setHeaderInput] = useState<string>("");
  const [imageInput, setImageInput] = useState([]);

  console.log(imageInput);

  const [temp, setTemp] = useState([
    { title: "", sequence: "", id: Math.random() * 100 },
  ]);

  const { request } = UseFetch();

  const changeHandler = (value, id, type) => {
    console.log("id:", id);
    const updatedTemp = [...temp];
    console.log(updatedTemp);
    console.log(
      updatedTemp.find((i) => {
        i.id === id;
      })
    );
    updatedTemp.find((i) => i.id === id)[type] = value;
    setTemp([...updatedTemp]);
  };

  const deleteHandler = (id) => {
    const deleteItem = temp.filter((i) => i.id !== id)
    setTemp([...deleteItem]);
  }

  const submitHandler = (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("header", headerInput);

    for (let i = 0; i < temp.length; i++) {
      for (const key in temp[i]) {
        console.log("key:", key);
        // console.log(tooltip)
        if (key === "id" || (key === "tooltip" && temp[i][key] === "")) {
          continue;
        }
        formData.append(`features[${i}][${key}]`, temp[i][key]);
      }
    }
    for (let i = 0; i < imageInput.length; i++) {
      formData.append("images", imageInput[i]);
    }
    formData.append("displayMode", router.query.mode.toString());

    request({
      method: "POST",
      url: ApiRoutes.ADMIN_FEATURES_GROUPS,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      console.log(res);
    });
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
          {temp.map((i, index) => (
            <>
              <Box className="box-values-list">
                <InputSortFeature
                  onChangeHandler={(value) =>
                    changeHandler(value, i.id, "sequence")
                  }
                />
                <InputValueFeature
                  onChangeHandler={(value) =>
                    changeHandler(value, i.id, "title")
                  }
                />
                {router.query.mode === DISPLAY_MODES.PRODUCT ? (
                  <InputDescriptionFeature
                    onChangeHandler={(value) =>
                      changeHandler(value, i.id, "tooltip")
                    }
                  />
                ) : (
                  <></>
                )}
                {router.query.mode === DISPLAY_MODES.COLOR ||
                router.query.mode === DISPLAY_MODES.EXPANDABLE ? (
                  <InputImageFeature setImageInput={setImageInput} />
                ) : (
                  <></>
                )}
                <Image src={"/icons/trash.svg"} alt={"جزئیات"} width={24} height={24} onClick={() => deleteHandler(i.id)} className="delete-row"/>
              </Box>
            </>
          ))}

          <Box
            className="box-add-value"
            onClick={() =>
              setTemp((e) => [
                ...e,
                {
                  title: "",
                  sequence: "",
                  tooltip: "",
                  id: Math.random() * 100,
                },
              ])
            }
          >
            <AddCircleOutlineIcon className="add-value-icon" />
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

export default CreateFeatureComponent;
