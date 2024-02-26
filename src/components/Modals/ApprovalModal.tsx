import { Table } from "antd";
import { approvalColumns, approvalData } from "../Data/TableDummy";
import { ModalComponent } from "./ModalComponent";
import { Dispatch, SetStateAction, useState } from "react";

export const ApprovalModal = ({
  open,
  setOpen,
  toggleModal,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;

  toggleModal: (state: boolean) => void;
}) => {
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  return (
    <ModalComponent
      open={open}
      handleOk={handleOk}
      centered={true}
      handleCancel={() => toggleModal(false)}
      loading={loading}
      width={1000}
      title={"Pending Approvals"}
      children={
        <div className="w-full">
          <Table
            columns={approvalColumns}
            dataSource={approvalData}
            className="text-white font-[gelion-600]"
            //pagination={false}
          />
        </div>
      }
    />
  );
};
