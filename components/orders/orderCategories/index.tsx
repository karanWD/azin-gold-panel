import React, { FC, useState } from "react";
import { StyledOrderCategories } from "./styles";
import OrderCategoryName from "./orderCategoryName";
import { Box, Button, Modal, Typography } from "@mui/material";
import OrderProducts from "../orderProducts";
import ChangeStatusModal from "../changeStatusModal";

type Props = {
  data: { [key: string]: Array<any> };
  orderId: string;
  updateHandler: () => void;
};
type SelectedItems = {
  orderId: string;
  groupId: string;
  currentStatus: string;
  items: Array<any>;
} | null;

const OrderCategories: FC<Props> = ({ data, orderId, updateHandler }) => {
  const [selectedItems, setSelectedItems] = useState<SelectedItems>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const changeHandler = (
    isChecked: boolean,
    selectedData: any,
    id: string,
    key: string
  ): void => {
    if (isChecked) {
      const temp = {
        groupId: id,
        orderId: orderId,
        currentStatus: key,
      };
      setSelectedItems((prevState) => ({
        ...temp,
        items: [...(prevState?.items ?? []), selectedData],
      }));
    } else {
      const temp = selectedItems.items.filter(
        (item) => item._id !== selectedData._id
      );
      setSelectedItems((prevState) => ({ ...prevState, items: temp }));
    }
  };

  const closeHandler = () => {
    setOpenModal(false);
    setSelectedItems(null);
  };

  return (
    <StyledOrderCategories>
      {Object.entries(data).map(([key, value], index) => {
        return (
          value.length > 0 && (
            <Box
              key={"ORDER_CATEGORY_ITEM_" + index}
              display="flex"
              flexDirection="column"
              gap="18px"
            >
              <OrderCategoryName type={key} />
              <OrderProducts
                data={value}
                selectedData={selectedItems}
                handleChange={(isChecked, selectedData, groupId) =>
                  changeHandler(isChecked, selectedData, groupId, key)
                }
              />
            </Box>
          )
        );
      })}
      <Box mr={"auto"} ml={0}>
        <Button
          color="primary"
          onClick={() => setOpenModal(true)}
          variant="contained"
        >
          <Typography variant="button2">تغییر وضعیت محصولات</Typography>
        </Button>
      </Box>
      <Modal open={openModal} onClose={closeHandler}>
        <ChangeStatusModal
          selectedItems={selectedItems}
          closeHandler={closeHandler}
          updateHandler={updateHandler}
        />
      </Modal>
    </StyledOrderCategories>
  );
};

export default OrderCategories;
