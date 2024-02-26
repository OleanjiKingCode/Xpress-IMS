import { Button, DatePicker, Form, Input, Select } from "antd";
import { FieldType } from "../../types/TableAreaTypes";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const ManualUpload = () => (
  <Form
    name="basic"
    style={{ width: "100%" }}
    initialValues={{ remember: true }}
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
        value=""
        //onChange={(e) => {}}
        className="py-2 border-[#C4C4C4] text-[#000000]"
      />
    </Form.Item>
    <Form.Item<FieldType>
      label={
        <h2 className="text-[1rem] w-full  font-[gelion-500]">Barcode Id</h2>
      }
      name="barcodeId"
      rules={[{ required: true, message: "Please input product barcode Id!" }]}
    >
      <Input
        value=""
        //onChange={(e) => {}}
        className="py-2 border-[#C4C4C4] text-[#000000]"
      />
    </Form.Item>
    <Form.Item<FieldType>
      label={<h2 className="text-[1rem] font-[gelion-500]">Product Type </h2>}
      name="productType"
      rules={[{ required: true, message: "Please choose porduct type!" }]}
    >
      <Select
        defaultValue="computer"
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
    <Form.Item<FieldType>
      label={<h2 className="text-[1rem] font-[gelion-500]">Product Cost</h2>}
      name="cost"
      rules={[{ required: true, message: "Please input product cost!" }]}
    >
      <Input type="number" />
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
      //   onChange={onChange}
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

export default ManualUpload;
