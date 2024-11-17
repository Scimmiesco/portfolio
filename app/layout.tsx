import type { Metadata } from "next";
import "./globals.css";
import Menu from "./src/components/menu";
import PontoSeguidor from "./src/components/cursor";
import { cookies } from "next/headers";
import { ConcertOne, FiraCode } from "@/app/ui/fonts";
import { Children, cloneElement } from "react";

export const metadata: Metadata = {
  title: "Pedro Almeida",
  description: "Meu portfólio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const temaCookie = cookies().get("tema")?.value || "light";

  return (
    <html lang="pt-br">
      <body
        className={`${ConcertOne.variable} ${FiraCode.variable} antialiased w-full flex flex-col justify-start min-h-screen bg-[#011114]`}
      >
        {Children.map(children, (child) =>
          cloneElement(child as React.ReactElement, { temaCookie })
        )}
      </body>
    </html>
  );
}
