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
  const temaCookie = cookies().get("tema")?.value || "light" as string;

  return (
    <html lang="pt-br">
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap" rel="stylesheet" />
      </header>
      <body className="flex flex-col justify-start rounded-3xl min-h-[100svh] dark:bg-dark bg-dark relative overflow-x-hidden">
        <PontoSeguidor />
        <Menu temaCookie={temaCookie}></Menu>
        {children}
      </body>
    </html>
  );
}
