import React, { FC, useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import OrdersStatus from "../ordersStatus";
import { ORDER_STATUSES } from "../../../enums/OrderStatuses";
import { useRouter } from "next/router";
import ChangeOrderTotalStatusModal from "../changeOrderTotalStatusModal";

type Props = {
  trackingId: string;
  orderId: string;
  updateHandler: () => void;
  status: ORDER_STATUSES;
};
const OrderHeader: FC<Props> = ({
  status,
  trackingId,
  orderId,
  updateHandler,
}) => {
  const router = useRouter();
  const { userId } = router.query;
  const title = "سفارش " + trackingId;
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <Box className="order-header-container">
      <Box>
        <Typography
          variant="button2"
          className="back-button"
          onClick={() => router.push("/orders")}
        >
          <EastIcon />
          بازگشت به لیست
        </Typography>
        <Box className="order-detail-header">
          <Typography variant="title3" className="order-detail-title">
            {title}
          </Typography>
          <OrdersStatus status={status} type={"CONTAINED"} />
        </Box>
      </Box>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setOpenModal(true)}
      >
        <Typography variant="button2">تغییر وضعیت سفارش</Typography>
      </Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <ChangeOrderTotalStatusModal
          closeHandler={() => setOpenModal(false)}
          updateHandler={updateHandler}
          orderId={orderId}
          userId={userId as string}
        />
      </Modal>
    </Box>
  );
};

export default OrderHeader;
