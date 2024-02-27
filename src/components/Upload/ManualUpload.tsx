import { Button, DatePicker, Form, Input, Select } from "antd";
import { DataType, FieldType } from "../../types/TableAreaTypes";
import { useDispatch } from "react-redux";
import { addData } from "../../stores/dataSlice";
import { useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const ManualUpload = () => {
  const dispatch = useDispatch();
  dayjs.extend(customParseFormat);

  const dateFormat = "YYYY-MM-DD";
  const [loading, setLoading] = useState(false);
  const [editedRecord, setEditedRecord] = useState<DataType>({
    key: "5",
    productName: "",
    productType: "",
    barcodeId: 0,
    approvalStatus: "Awating",
    cost: 0,
    dop: "",
    tag: "IN-USE",
  });

  const onFinish = (_values: any) => {
    setLoading(true);
    dispatch(
      addData({ name: editedRecord.productName, updates: editedRecord })
    );
    setLoading(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      style={{ width: "100%" }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<FieldType>
        label={<h2 className="text-[1rem] font-[gelion-500]">Product Name</h2>}
        name="productName"
        rules={[{ required: true, message: "Please input product name!" }]}
      >
        <Input
          value={editedRecord.productName}
          onChange={(e) => {
            setEditedRecord({ ...editedRecord, productName: e.target.value });
          }}
          className="py-2 border-[#C4C4C4] text-[#000000]"
        />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <h2 className="text-[1rem] w-full  font-[gelion-500]">Barcode Id</h2>
        }
        name="barcodeId"
        rules={[
          { required: true, message: "Please input product barcode Id!" },
        ]}
      >
        <Input
          value={editedRecord.barcodeId}
          onChange={(e) => {
            setEditedRecord({
              ...editedRecord,
              barcodeId: Number(e.target.value),
            });
          }}
          className="py-2 border-[#C4C4C4] text-[#000000]"
        />
      </Form.Item>
      <Form.Item<FieldType>
        label={<h2 className="text-[1rem] font-[gelion-500]">Product Type </h2>}
        name="productType"
        rules={[{ required: true, message: "Please choose porduct type!" }]}
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
      <Form.Item<FieldType>
        label={<h2 className="text-[1rem] font-[gelion-500]">Product Cost</h2>}
        name="cost"
        rules={[{ required: true, message: "Please input product cost!" }]}
      >
        <Input
          type="number"
          value={editedRecord.cost}
          onChange={(e) => {
            setEditedRecord({
              ...editedRecord,
              cost: parseFloat(e.target.value),
            });
          }}
        />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <h2 className="text-[1rem] w-full font-[gelion-500]">
            Date Of Purchase
          </h2>
        }
        name="dop"
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
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default ManualUpload;
