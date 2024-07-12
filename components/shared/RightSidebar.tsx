import React from "react";
import { useSelector } from "react-redux";

const RightSidebar = () => {
  const theme = useSelector((state: any) => state.theme.value);
  return (
    <aside
      className={`flex flex-col flex-1 max-lg:hidden p-12 items-start w-gray-400 border-l ${
        theme === "dark"
          ? "bg-black text-white border-gray-800"
          : "border-gray-300"
      } `}
    >
      Right Sidebar
    </aside>
  );
};

export default RightSidebar;
