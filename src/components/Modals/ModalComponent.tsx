import { Modal } from "antd";

export const ModalComponent = ({
  open,
  handleOk,
  handleCancel,
  loading,
  centered,
  width = 600,
  title,
  children,
}: {
  open: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  loading: boolean;
  centered: boolean;
  width?: number;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Modal
      open={open}
      centered={true}
      title={
        <div
          className={`text-left text-[1rem] font-[gelion-500] border-b-[2px] p-5`}
        >
          {title}
        </div>
      }
      width={width}
      onOk={handleOk}
      onCancel={handleCancel}
      style={{ padding: "20px" }}
      footer={false}
    >
      <div className="max-h-[80vh] p-0 w-full overflow-auto">{children}</div>
    </Modal>
  );
};
