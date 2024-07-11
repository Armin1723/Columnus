// "use client";
import React from "react";
import { FaMountainSun } from "react-icons/fa6";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import { toggle } from "@/lib/redux/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const cinzel = Cinzel({ subsets: ["latin"] });

const Navbar = () => {
  const theme = useSelector((state: any) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <nav
      className={` ${theme === 'dark' && 'bg-zinc-900 text-white'} flex justify-between items-center md:h-16 h-12 overflow-hidden px-4 border-b border-gray-400 shadow-lg sticky top-0 `}
    >
      <Link
        href="/"
        className={`${cinzel.className} navRight logo flex flex-col items-center justify-center h-full select-none`}
      >
        <div className="line1 flex text-3xl font-extrabold tracking-tighter -mb-1">
          <p className="max-sm:hidden">Colu</p>
          <FaMountainSun className="mx-1" />
          <p className="max-sm:hidden">nus</p>
        </div>
        <div className="line2 text-sm font-[inter] tracking-wider max-sm:hidden">
          Express yourself
        </div>
      </Link>

      <div className="navLeft">
        userIcon
        <button onClick={() => dispatch(toggle())}>Toggle Theme</button>
      </div>
    </nav>
  );
};

export default Navbar;
