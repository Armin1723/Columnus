import { sidebarLinks } from "@/public/utils";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";

const LeftSidebar = () => {
  const theme = useSelector((state: any) => state.theme.value);
  return (
    <aside
      className={`max-sm:hidden ${
        theme === "dark" && "bg-black text-white"
      } flex flex-col flex-1 justify-between items-end p-12 font-semibold border-r ${theme === 'dark' ? 'border-gray-800' : 'border-gray-300'} w-inner w-gray-400`}
    >
      <div className="links flex flex-col flex-1 items-start gap-4 ">
        {sidebarLinks.map((link, index) => {
          return (
            <Link href={link.href} key={index} className={`w-32 ${theme === 'dark' && 'hover:bg-gray-900'} flex p-2 px-4 justify-start rounded-lg hover:border border-blue-700`}>                
              <p>icon</p>
              <p>{link.name}</p>
            </Link>
          );
        })}
      </div>

      <SignedIn>
        <SignOutButton >
          <div className={`logout flex items-center gap-4 cursor-pointer p-2 px-4 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-300/70'}`}>
            <p className="max-sm:hidden">Logout</p>
            <FiLogOut />
          </div>
        </SignOutButton>
      </SignedIn>
    </aside>
  );
};

export default LeftSidebar;
