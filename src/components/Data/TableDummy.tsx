import { TableProps, Tag, Space } from "antd";
import {
  CheckCircleOutlined,
  FolderOpenOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { DataType } from "../../types/TableAreaTypes";

export const columns: TableProps<DataType>["columns"] = [
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Barcode Id",
    dataIndex: "barcodeId",
    key: "barcodeId",
    render: (text) => <b>{text}</b>,
  },
  {
    title: "Product Type",
    dataIndex: "productType",
    key: "productType",
  },
  {
    title: "Cost",
    dataIndex: "cost",
    key: "cost",
    render: (text) => <>NGN {text}</>,
  },
  {
    title: "Date Of Purchase",
    dataIndex: "dop",
    key: "dop",
  },
  {
    title: "Status",
    key: "tag",
    dataIndex: "tag",
    render: (tag) => {
      let color = "green";
      if (tag === "REPAIR") {
        color = "volcano";
      } else if (tag === "DAMAGED") {
        color = "brown";
      }
      return (
        <Tag color={color} key={tag}>
          {tag}
        </Tag>
      );
    },
  },
  // {
  //   title: "Action",
  //   key: "action",
  //   render: (_, record) => <TableActions record={record} />,
  // },
];

export const data: DataType[] = [
  {
    key: "1",
    productName: "Product A",
    productType: "Computer",
    barcodeId: 123456,
    cost: 50.99,
    dop: new Date("2024-02-08").toDateString(),
    tag: "IN-USE",
  },
  {
    key: "2",
    productName: "Product B",
    productType: "Computer",
    barcodeId: 789012,
    cost: 29.99,
    dop: new Date("2024-02-09").toDateString(),
    tag: "REPAIR",
  },
  {
    key: "3",
    productName: "Product C",
    barcodeId: 345678,
    productType: "Computer",
    cost: 39.99,
    dop: new Date("2024-02-10").toDateString(),
    tag: "DAMAGED",
  },
  {
    key: "4",
    productName: "Product D",
    barcodeId: 987654,
    productType: "Computer",
    cost: 19.99,
    dop: new Date("2024-02-11").toDateString(),
    tag: "IN-USE",
  },
  {
    key: "5",
    productName: "Product E",
    barcodeId: 567890,
    productType: "Computer",
    cost: 45.99,
    dop: new Date("2024-02-12").toDateString(),
    tag: "REPAIR",
  },
  {
    key: "6",
    productName: "Product F",
    barcodeId: 234567,
    productType: "Computer",
    cost: 32.99,
    dop: new Date("2024-02-13").toDateString(),
    tag: "DAMAGED",
  },
  {
    key: "7",
    productName: "Product G",
    barcodeId: 876543,
    productType: "Computer",
    cost: 27.99,
    dop: new Date("2024-02-14").toDateString(),
    tag: "IN-USE",
  },
  {
    key: "8",
    productName: "Product H",
    barcodeId: 432109,
    productType: "Computer",
    cost: 37.99,
    dop: new Date("2024-02-15").toDateString(),
    tag: "REPAIR",
  },
  {
    key: "9",
    productName: "Product I",
    barcodeId: 210987,
    productType: "Computer",
    cost: 22.99,
    dop: new Date("2024-02-16").toDateString(),
    tag: "DAMAGED",
  },
  {
    key: "10",
    productName: "Product J",
    barcodeId: 654321,
    productType: "Computer",
    cost: 19.99,
    dop: new Date("2024-02-17").toDateString(),
    tag: "IN-USE",
  },
];

export const approvalColumns: TableProps<DataType>["columns"] = [
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Barcode Id",
    dataIndex: "barcodeId",
    key: "barcodeId",
    render: (text) => <b>{text}</b>,
  },
  {
    title: "Cost",
    dataIndex: "cost",
    key: "cost",
  },
  {
    title: "Date Of Purchase",
    dataIndex: "dop",
    key: "dop",
  },
  {
    title: "Approval Status",
    key: "approvalStatus",
    dataIndex: "approvalStatus",
    render: (approvalStatus) => {
      let color = "green";
      if (approvalStatus === "Awaiting") {
        color = "gray";
      } else {
        color = "brown";
      }
      return (
        <Tag color={color} key={approvalStatus}>
          {approvalStatus}
        </Tag>
      );
    },
  },
  {
    title: "Status",
    key: "tag",
    dataIndex: "tag",
    render: (tag) => {
      let color = "green";
      if (tag === "REPAIR") {
        color = "volcano";
      } else if (tag === "DAMAGED") {
        color = "brown";
      }
      return (
        <Tag color={color} key={tag}>
          {tag}
        </Tag>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>
          <FolderOpenOutlined className="mr-1 text-yellow-500" />
          Details
        </a>
        <a>
          <StopOutlined className="mr-1 text-red-700 " />
          Cancel Approval
        </a>
        <a>
          <CheckCircleOutlined className="mr-1 text-green-500" />
          Approve
        </a>
      </Space>
    ),
  },
];

export const approvalData: DataType[] = [
  {
    key: "1",
    productName: "Product A",
    barcodeId: 123456,
    cost: 50.99,
    dop: new Date("2024-02-08").toDateString(),
    tag: "IN-USE",
    approvalStatus: "Awaiting",
  },
  {
    key: "2",
    productName: "Product B",
    barcodeId: 789012,
    cost: 29.99,
    dop: new Date("2024-02-09").toDateString(),
    tag: "REPAIR",
    approvalStatus: "Awaiting",
  },
  {
    key: "3",
    productName: "Product C",
    barcodeId: 345678,
    cost: 39.99,
    dop: new Date("2024-02-10").toDateString(),
    tag: "DAMAGED",
    approvalStatus: "Rejected",
  },
];
