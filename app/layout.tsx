import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./Favicon.ico";

import "./globals.css";
import WrapperComponent from "./WrapperComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Columns",
  description: "Express Yourself",
  icons: {
    icon: "./Favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}}`}>
        <WrapperComponent children={children} />
      </body>
    </html>
  );
}
