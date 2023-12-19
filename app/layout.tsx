import type { Metadata } from "next";
import { Cookies } from "react-cookie";
import "./globals.css";
import Menu from "./src/components/menu";
import PontoSeguidor from "./src/components/cursor";


export const metadata: Metadata = {
  title: "Pedro Almeida",
  description: "Meu portfólio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="pt-br">
      <body className="m-1 rounded-3xl min-h-[100svh] dark:bg-white bg-dark relative">
        <PontoSeguidor />
        <Menu></Menu>
        {children}
      </body>
    </html>
  );
}
