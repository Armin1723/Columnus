import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import  '@/public/Favicon.ico';

import "./globals.css";
import WrapperComponent from "./WrapperComponent";

const mulish = Mulish( { subsets : ['latin'], weight : ['400']})

export const metadata: Metadata = {
  title: "Columns",
  description: "Express Yourself"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} `}>
        <WrapperComponent children={children} />
      </body>
    </html>
  );
}
