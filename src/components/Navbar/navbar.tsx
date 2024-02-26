import { UserOutlined } from "@ant-design/icons";
import { Divider, Dropdown, MenuProps } from "antd";
import Logo from "../../assets/Images/logo.png";

export const Navbar = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex flex-col w-[10rem]">
          <h2 className="font-semibold">John Doe</h2>
          <span className="text-sm">Admin</span>
        </div>
      ),
    },
    {
      key: "2",
      label: <Divider style={{ margin: 0 }} />,
      disabled: true,
    },
    {
      key: "3",
      label: <span className="w-full">Sign Out</span>,
    },
  ];

  return (
    <div className="w-full flex flex-row items-center justify-between px-10 pt-3">
      <div className="w-full flex flex-row items-center justify-between ">
        <img src={Logo} width="100px" height="100px" />
        <span className="py-4 text-lg md:text-2xl font-semibold text-green-600">
          Inventory Management System
        </span>

        <div className="w-fit">
          <Dropdown menu={{ items }} placement="bottomLeft">
            <UserOutlined className="rounded-full p-3 border-2 border-[#5c5b5b] w-fit" />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
