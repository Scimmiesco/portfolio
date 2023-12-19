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


  const tema = new Cookies().get("tema")
  console.log(tema)

  return (
    <html lang="pt-br" className={tema?.value}>
      <body className="m-1 rounded-3xl min-h-[100svh] dark:bg-dark bg-white relative">
          <PontoSeguidor />
          <Menu></Menu>
          {children}
      </body>
    </html>
  );
}
