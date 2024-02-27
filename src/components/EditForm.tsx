import { Button, DatePicker, Form, Input, Select } from "antd";
import { DataType, EditFieldType } from "../types/TableAreaTypes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editItem } from "../stores/dataSlice";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

export const EditForm = ({
  record,
  editedRecord,
  setEditedRecord,
  hideEditModal,
}: {
  record: DataType;
  editedRecord: DataType;
  setEditedRecord: React.Dispatch<any>;
  hideEditModal: () => void;
}) => {
  const dispatch = useDispatch();
  dayjs.extend(customParseFormat);
  const [loading, setLoading] = useState(false);

  const dateFormat = "YYYY-MM-DD";

  const onFinish = (_values: any) => {
    setLoading(true);
    dispatch(editItem({ id: record.barcodeId, updates: editedRecord }));
    setLoading(false);
    hideEditModal();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      style={{ width: "100%" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item<EditFieldType>
        label={<h2 className="text-[1rem] font-[gelion-500]">Product Name</h2>}
        name="editProductName"
        rules={[{ required: true, message: "Please input product name!" }]}
      >
        <Input
          value={editedRecord.productName}
          defaultValue={record.productName}
          onChange={(e) => {
            setEditedRecord({ ...editedRecord, productName: e.target.value });
          }}
          className="py-2 border-[#C4C4C4] text-[#000000]"
        />
      </Form.Item>
      <Form.Item<EditFieldType>
        label={
          <h2 className="text-[1rem] w-full  font-[gelion-500]">Barcode Id</h2>
        }
        name="editBarcodeId"
        rules={[
          { required: true, message: "Please input product barcode Id!" },
        ]}
      >
        <Input
          value={editedRecord.barcodeId}
          defaultValue={record.barcodeId}
          onChange={(e) => {
            setEditedRecord({
              ...editedRecord,
              barcodeId: Number(e.target.value),
            });
          }}
          className="py-2 border-[#C4C4C4] text-[#000000]"
        />
      </Form.Item>
      <Form.Item<EditFieldType>
        label={<h2 className="text-[1rem] font-[gelion-500]">Product Type </h2>}
        name="editProductType"
        rules={[{ required: true, message: "Please choose product type!" }]}
      >
        <Select
          defaultValue={editedRecord.productType}
          style={{ width: "100%" }}
          onChange={(value: string) => {
            setEditedRecord({ ...editedRecord, productType: value });
          }}
          options={[
            { value: "Computer", label: "Computer" },
            { value: "Chairs", label: "Chairs" },
            { value: "Furnitures", label: "Furnitures" },
            { value: "Computer Accessories", label: "Computer Accessories" },
          ]}
        />
      </Form.Item>
      <Form.Item<EditFieldType>
        label={<h2 className="text-[1rem] font-[gelion-500]">Product Cost</h2>}
        name="editCost"
        rules={[{ required: true, message: "Please input product cost!" }]}
      >
        <Input
          type="number"
          value={editedRecord.cost}
          defaultValue={record.cost}
          onChange={(e) => {
            setEditedRecord({
              ...editedRecord,
              cost: parseFloat(e.target.value),
            });
          }}
        />
      </Form.Item>
      <Form.Item<EditFieldType>
        label={
          <h2 className="text-[1rem] w-full font-[gelion-500]">
            Date Of Purchase
          </h2>
        }
        name="editDop"
        rules={[{ required: true, message: "Please pick date of purchase!" }]}
        className="w-full"
      >
        <DatePicker
          defaultValue={dayjs("2015-06-06", dateFormat)}
          onChange={(date) => {
            setEditedRecord({
              ...editedRecord,
              dop: date.toString(),
            });
          }}
        />
      </Form.Item>
      <div className="w-full flex justify-end">
        <Button
          htmlType="submit"
          className="py-5 px-10 bg-[#006f01] text-white  flex justify-center items-center"
        >
          Edit
        </Button>
      </div>
    </Form>
  );
};
