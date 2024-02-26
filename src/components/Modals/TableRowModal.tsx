import { Card, Tag } from "antd";
import { DataType } from "../../types/TableAreaTypes";
import { ModalComponent } from "./ModalComponent";
import { Dispatch, SetStateAction, useState } from "react";
import { DetailsItem } from "../DetailsItem";
import { TableActions } from "../TableActions";

export const TableRowModal = ({
  open,
  setOpen,
  toggleModal,
  data,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  toggleModal: (state: boolean) => void;
  data: DataType | undefined;
}) => {
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const getColor = (tag: string) => {
    let color = "green";
    if (tag === "REPAIR") {
      color = "volcano";
    } else if (tag === "DAMAGED") {
      color = "brown";
    }
    return color;
  };
  return (
    <ModalComponent
      open={open}
      handleOk={handleOk}
      handleCancel={() => toggleModal(false)}
      loading={loading}
      centered={false}
      title={`Details Of ${data?.productName}`}
      children={
        <Card
          bordered={false}
          className="min-h-[70vh]"
          style={{ width: "100%" }}
        >
          <div className="flex flex-col gap-10">
            <>
              <DetailsItem title="Product Name" value={data?.productName} />
              <DetailsItem title="Product Type" value={data?.productType} />
              <DetailsItem title="Barcode ID" value={data?.barcodeId} />
              <DetailsItem title="Product Cost" value={`NGN ${data?.cost}`} />
              <DetailsItem title="Date Of Purchase" value={data?.dop} />
              <DetailsItem
                title="Satus"
                value={<Tag color={getColor(data?.tag ?? "")}>{data?.tag}</Tag>}
              />
            </>

            <TableActions record={data} />
          </div>
        </Card>
      }
    />
  );
};
