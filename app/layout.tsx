import type { Metadata } from "next";
import "./globals.css";
import Menu from "./src/components/menu";
import PontoSeguidor from "./src/components/cursor";
import { getCookie } from "cookies-next";
import { cookies } from 'next/headers'
export const metadata: Metadata = {
  title: "Pedro Almeida",
  description: "Meu portfólio",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
const temaCookie = cookies().get("tema")?.value as string; 

  return (
    <html lang="pt-br">
      <body className="m-1 rounded-3xl min-h-[100svh] dark:bg-white bg-dark relative">
        <PontoSeguidor />
        <Menu temaCookie={temaCookie}></Menu>
        {children}
      </body>
    </html>
  );
}
