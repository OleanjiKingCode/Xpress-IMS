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
          // onRow={(record, rowIndex) => {
          //   return {
          //     onClick: (event) => {},
          //   };
          // }}
          scroll={{ x: scrollX }}
          className="text-white font-[gelion-600] w-full"
          locale={{
            emptyText: (
              <div className="h-60 grid place-content-center">
                <h1 className="text-[#182A2C] text-[1.5rem] font-[gelion-700]">
                  No Assets
                </h1>
                <p className="text-[#182A2C] text-[1rem] font-[gelion-500]">
                  There are no assets for in this table
                </p>
              </div>
            ),
          }}
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
