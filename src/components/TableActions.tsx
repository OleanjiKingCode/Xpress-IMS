import { EditOutlined, SyncOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ModalComponent } from "./Modals/ModalComponent";
import { EditForm } from "./EditForm";

export const TableActions = ({ record }: { record: any }) => {
  const [editOpen, setEditOpen] = useState(false);

  const showEditModal = () => {
    setEditOpen(true);
  };

  const hideEditModal = () => {
    setEditOpen(false);
  };

  return (
    <div className="flex justify-between w-full border-t-[1px] pt-5">
      <div
        onClick={showEditModal}
        className="bg-blue-200 hover:bg-blue-600 p-2 w-[10rem] text-center rounded-lg cursor-pointer"
      >
        <EditOutlined className="mr-3 text-blue-900 " />
        Edit
      </div>
      <div className="bg-green-200 hover:bg-green-600 p-2 w-[10rem] text-center rounded-lg cursor-pointer">
        <SyncOutlined className="mr-3 text-green-400" />
        Reassign
      </div>
      <ModalComponent
        open={editOpen}
        handleOk={() => {}}
        handleCancel={hideEditModal}
        loading={false}
        centered={true}
        title={`Edit ${record.productName}`}
        children={
          <div className="p-3">
            <EditForm record={record} />
          </div>
        }
      />
    </div>
  );
};
