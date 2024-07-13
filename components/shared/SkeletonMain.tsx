"use client";
import React from "react";
import { useSelector } from "react-redux";

const SkeletonMain = () => {
  const theme = useSelector((state: any) => state.theme.value);
  return (
    <div
      className={`${
        theme === "dark" && "bg-black text-white"
      } w-full min-h-full flex flex-col flex-1 p-8 gap-8`}
    >
      <div className="card flex flex-col bg-zinc-900/50 rounded-2xl p-4 animate-puls gap-4 py-12">
        <p className="h-12 w-12 rounded-full bg-zinc-800/40 animate-pulse"></p>
        <p className="w-[90%] bg-zinc-800/50 animate-pulse h-6 rounded-2xl"></p>
        <p className="h-24 w-full bg-zinc-800/50 animate-pulse rounded-2xl"></p>
      </div>
      <div className="card flex flex-col bg-zinc-900/50 rounded-2xl p-4 animate-puls gap-4 py-12">
        <p className="h-12 w-12 rounded-full bg-zinc-800/40 animate-pulse"></p>
        <p className="w-[90%] bg-zinc-800/50 animate-pulse h-6 rounded-2xl"></p>
        <p className="h-24 w-full bg-zinc-800/50 animate-pulse rounded-2xl"></p>
      </div>
    </div>
  );
};

export default SkeletonMain;
