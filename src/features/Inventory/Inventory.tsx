import { useState } from "react";
import { Table } from "antd";
import { columns, data } from "../../components/Data/TableDummy";
import { Stats } from "../../components/Stats/Stats";
import { Navbar } from "../../components/Navbar/navbar";
import { TableActionArea } from "../../components/TableActionArea/TableActionArea";
import { ApprovalModal } from "../../components/Modals/ApprovalModal";
import { CreateModal } from "../../components/Modals/CreateModal";

export const Inventory: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [approvalOpen, setApprovalOpen] = useState(false);

  const toggleModal = (state: boolean) => {
    setOpen(state);
  };

  const toggleApprovalModal = (state: boolean) => {
    setOpen(state);
  };

  return (
    <main className="w-full flex flex-col items-start gap-5 bg-white pb-10 ">
      <Navbar />
      <section className="w-full flex flex-col items-start gap-5 px-10">
        <Stats />
        <TableActionArea
          openApprovalModal={() => toggleApprovalModal(true)}
          openCreateModal={() => toggleModal(true)}
        />
        <Table
          columns={columns}
          dataSource={data}
          className="text-white font-[gelion-600] w-full"
        />
        <ApprovalModal
          open={approvalOpen}
          setOpen={setApprovalOpen}
          toggleModal={toggleModal}
        />
        <CreateModal open={open} setOpen={setOpen} toggleModal={toggleModal} />
      </section>
    </main>
  );
};
