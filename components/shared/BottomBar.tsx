"use client";
import React from "react";
import { useSelector } from "react-redux";

const BottomBar = () => {
  const theme = useSelector((state: any) => state.theme.value);
  return (
    <nav
      className={`${
        theme === "dark"
          ? "bg-black text-white border-gray-800"
          : "border-gray-300"
      } hidden max-sm:flex justify-center items-center w-screen`}
    >
      Bottom Navigation Bar
    </nav>
  );
};

export default BottomBar;
