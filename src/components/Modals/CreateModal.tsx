import { Tabs } from "antd";
import { ModalComponent } from "./ModalComponent";
import { Dispatch, SetStateAction, useState } from "react";
import { TabItems } from "../Data/Tabs";

export const CreateModal = ({
  open,
  setOpen,
  toggleModal,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  toggleModal: (state: boolean) => void;
}) => {
  const [loading, setLoading] = useState(false);

  const onChange = (key: string) => {
    console.log(key);
  };

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
      handleCancel={() => toggleModal(false)}
      loading={loading}
      centered={false}
      title={"Add New Asset"}
      children={
        <div className="px-5 pb-5 max-h-[80vh] overflow-auto">
          <Tabs
            defaultActiveKey="1"
            items={TabItems}
            onChange={onChange}
            type="card"
          />
        </div>
      }
    />
  );
};
