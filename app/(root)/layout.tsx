"use client";
import Navbar from "@/components/shared/Navbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import BottomBar from "@/components/shared/BottomBar";
import {
  ClerkLoading,
  ClerkProvider,
  Protect,
} from "@clerk/nextjs";
import { useSelector } from "react-redux";
import SkeletonMain from "@/components/shared/SkeletonMain";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          colorPrimary: "#6c47ff",
        },
      }}
    >
      <main className="flex flex-col justify-between flex-1 h-[100dvh] ">
        <Navbar />
        <section className="flex justify-between flex-1 overflow-hidden">
          <LeftSidebar />
          <div className={`${theme === 'dark' && 'custom-scrollbar-dark'} max-sm:w-screen max-lg:min-w-[70vw] min-w-[50vw] flex flex-1 overflow-y-scroll  `}>
            <ClerkLoading>
              <SkeletonMain />
            </ClerkLoading>
            <Protect>{children}</Protect>
          </div>
          <RightSidebar />
        </section>
        <BottomBar />
      </main>
    </ClerkProvider>
  );
}
