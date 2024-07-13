// 'use client';
import React from "react";
import { FaMountainSun } from "react-icons/fa6";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import { toggle } from "@/lib/redux/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { SignOutButton, SignedIn, UserButton, useAuth } from "@clerk/nextjs";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";

const cinzel = Cinzel({ subsets: ["latin"] });

const Navbar = () => {
  const theme = useSelector((state: any) => state.theme.value);
  const dispatch = useDispatch();

  const { userId } = useAuth()

  return (
    <nav
      className={` ${
        theme === "dark"
          ? "bg-black text-white border-gray-800"
          : "border-gray-300"
      } flex justify-between backdrop-blur-lg items-center h-16 overflow-hidden px-4 border-b sticky top-0 `}
    >
      <Link
        href="/" 
        className={`${cinzel.className} navRight logo flex flex-col items-center justify-center h-full select-none`}
      >
        <div className="line1 flex text-3xl max-sm:text-2xl font-extrabold tracking-tighter -mb-1">
          <p className="">Colu</p>
          <FaMountainSun className="mx-1" />
          <p className="">nS</p>
        </div>
        <div className="line2 text-sm font-[inter] tracking-wider max-sm:hidden">
          Express yourself
        </div>
      </Link>

      <div className="navLeft flex items-center justify-center gap-4">
        <div className="bordr-2 rounded-full flex items-center justify-center object-contain">
          {userId ? (
            <UserButton />
          ) : (
            <div className=" rounded-full flex items-center justify-center">
              <RxAvatar size={32} />
            </div>
          )}
        </div>
        <div className="flex cursor-pointer hover:opacity-75 sm:hidden">
          <SignedIn>
            <SignOutButton>
              <FiLogOut />
            </SignOutButton>
          </SignedIn>
        </div>
        <div onClick={() => dispatch(toggle())} className="duration-0">
          {theme === "dark" ? (
            <BsSunFill size={24} />
          ) : (
            <BsMoonFill size={24} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
