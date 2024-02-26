import { Button, DatePicker, Form, Input, Select } from "antd";
import { EditFieldType } from "../types/FieldType";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export const EditForm = ({ record }: { record: any }) => {
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
          value={record.productName}
          defaultValue={record.productName}
          //onChange={(e) => {}}
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
          value={record.barcodeId}
          defaultValue={record.barcodeId}
          // onChange={(e) => {}}
          className="py-2 border-[#C4C4C4] text-[#000000]"
        />
      </Form.Item>
      <Form.Item<EditFieldType>
        label={<h2 className="text-[1rem] font-[gelion-500]">Product Type </h2>}
        name="editProductType"
        rules={[{ required: true, message: "Please choose porduct type!" }]}
      >
        <Select
          defaultValue={record.productType}
          style={{ width: "100%" }}
          // onChange={handleChange}
          options={[
            { value: "computer", label: "Computer" },
            { value: "chairs", label: "Chairs" },
            { value: "furnitures", label: "Furnitures" },
            { value: "computer accessories", label: "Computer Accessories" },
          ]}
        />
      </Form.Item>
      <Form.Item<EditFieldType>
        label={<h2 className="text-[1rem] font-[gelion-500]">Product Cost</h2>}
        name="editCost"
        rules={[{ required: true, message: "Please input product cost!" }]}
      >
        <Input type="number" value={record.cost} defaultValue={record.cost} />
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
        //   onChange={onChange}
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
