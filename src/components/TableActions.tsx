import {
  EditOutlined,
  FolderOpenOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
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
    <Space size="middle">
      <a onClick={showEditModal}>
        <EditOutlined className="mr-1 text-blue-700 " />
        Edit
      </a>
      <a>
        <FolderOpenOutlined className="mr-1 text-yellow-500" />
        Details
      </a>
      <a>
        <SyncOutlined className="mr-1 text-green-400" />
        Reassign
      </a>
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
    </Space>
  );
};
