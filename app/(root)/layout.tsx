'use client'
import Navbar from "@/components/shared/Navbar";
import { Provider } from "react-redux";
import { store } from "../store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = localStorage.getItem('user')
  if(!user) {
    // user = await getUser
  }
  return (
    <Provider store={store}>
      <main className={` flex flex-col`}>
        <Navbar />
        <section>{children}</section>
      </main>
    </Provider>
  );
}
