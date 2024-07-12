"use client";
import Navbar from "@/components/shared/Navbar";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { useSelector } from "react-redux";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const theme = useSelector((state: any) => state.theme.value);
  const primary = theme === "dark" ? "black" : "white";
  const textPrimary = theme === "dark" ? "white" : "black";

  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorBackground: primary,
          colorText: textPrimary,
          colorTextOnPrimaryBackground: textPrimary,
          colorInputBackground: primary,
          colorInputText: textPrimary,
          colorNeutral: "gray",
        },
      }}
    >
      <main
        className={`w-screen h-[100dvh] flex justify-between flex-1 flex-col overflow-hidden ${
          theme === "dark" && "bg-black/90 text-white"
        }`}
      >
        <Navbar />
        <div className="grid place-items-center h-[90dvh] overflow-y-scroll">
          <ClerkLoading>Skeleton</ClerkLoading>
          <ClerkLoaded>{children}</ClerkLoaded>
        </div>
      </main>
    </ClerkProvider>
  );
};

export default layout;
