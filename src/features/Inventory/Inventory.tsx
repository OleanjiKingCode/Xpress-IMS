import { useState } from "react";
import { Table } from "antd";
import { columns } from "../../components/Data/TableDummy";
import { Stats } from "../../components/Stats/Stats";
import { Navbar } from "../../components/Navbar/navbar";
import { TableActionArea } from "../../components/TableActionArea/TableActionArea";
import { ApprovalModal } from "../../components/Modals/ApprovalModal";
import { CreateModal } from "../../components/Modals/CreateModal";
import { TableRowModal } from "../../components/Modals/TableRowModal";
import { DataType } from "../../types/TableAreaTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/rootReducer";

export const Inventory: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [approvalOpen, setApprovalOpen] = useState(false);
  const [tableRowOpen, setTableRowOpen] = useState(false);
  const [activeRowData, setActiveRowData] = useState<DataType>();
  const data = useSelector((state: RootState) => state.data.data);

  const toggleModal = (state: boolean) => {
    setOpen(state);
  };
  const toggleApprovalModal = (state: boolean) => {
    setApprovalOpen(state);
  };
  const toggleTableRowModal = (state: boolean) => {
    setTableRowOpen(state);
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
          onRow={(record, _rowIndex) => {
            return {
              onClick: () => {
                setActiveRowData(record);
                toggleTableRowModal(true);
              },
            };
          }}
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
          toggleModal={toggleApprovalModal}
        />
        <CreateModal open={open} setOpen={setOpen} toggleModal={toggleModal} />
        <TableRowModal
          open={tableRowOpen}
          setOpen={setTableRowOpen}
          toggleModal={toggleTableRowModal}
          data={activeRowData}
        />
      </section>
    </main>
  );
};
