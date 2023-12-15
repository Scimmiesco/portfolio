import type { Metadata } from "next";
import "./globals.css";
import Menu from "./src/components/menu";


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
    <html lang="pt-br" className="bg-white ">
      <body className="m-1 rounded-3xl min-h-[100svh]">
        
        <Menu></Menu>
        {children}
      </body>
    </html>
  );
}
