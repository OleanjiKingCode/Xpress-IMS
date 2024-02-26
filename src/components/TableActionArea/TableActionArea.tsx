import { SearchOutlined, HistoryOutlined } from "@ant-design/icons";
import { Input, Select, Button } from "antd";

export const TableActionArea = ({
  openApprovalModal,
  openCreateModal,
}: {
  openApprovalModal: () => void;
  openCreateModal: () => void;
}) => {
  return (
    <div className="w-full rounded-xl py-3 flex flex-row gap-5">
      <Input
        placeholder="search assets"
        className="w-[70%] rounded-xl focus:outline-none"
        allowClear
        suffix={<SearchOutlined />}
      />
      <Select
        defaultValue="Sort By"
        className="w-[11rem]"
        onChange={() => {}}
        options={[
          { value: "type", label: "Type" },
          { value: "date", label: "Date" },
          { value: "asc", label: "Ascending Order" },
          { value: "dsc", label: "Descending Order" },
        ]}
      />
      <Button
        className="py-[22px] rounded-lg flex justify-center items-center"
        onClick={openApprovalModal}
        icon={<HistoryOutlined />}
      >
        Pending Approvals
      </Button>
      <div
        className="bg-green-500 rounded-lg text-white p-3 gap-2 flex items-center justify-center w-[10rem] cursor-pointer"
        onClick={openCreateModal}
      >
        <span className="font-semibold">Add New Asset</span>
      </div>
    </div>
  );
};
