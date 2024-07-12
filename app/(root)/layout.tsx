"use client";
import Navbar from "@/components/shared/Navbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import BottomBar from "@/components/shared/BottomBar";
import { ClerkProvider } from "@clerk/nextjs";
import { useSelector } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const theme = useSelector((state: any) => state.theme.value);
  const primary = theme === "dark" ? "black" : "white";
  const textPrimary = theme === 'dark' ? 'white' : 'black'
  
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
      <main className="flex flex-col justify-between flex-1 h-[100dvh]">
        <Navbar />
        <section className="flex justify-between flex-1">
          <LeftSidebar />
          <div className="max-sm:w-screen max-lg:min-w-[70vw] min-w-[50vw] flex flex-1">
            {children}
          </div>
          <RightSidebar />
        </section>
        <BottomBar />
      </main>
    </ClerkProvider>
  );
}
