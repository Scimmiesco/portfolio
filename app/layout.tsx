import type { Metadata } from "next";
import "./globals.css";
import Menu from "./src/components/menu";
import PontoSeguidor from "./src/components/cursor";
import { cookies } from "next/headers";
import { ConcertOne } from "@/app/ui/fonts";
import { Children, cloneElement } from "react";

export const metadata: Metadata = {
  title: "Pedro Almeida",
  description: "Meu portfólio",
};
// ... (imports omitidos para brevidade)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const temaCookie = cookies().get("tema")?.value || "light";

  return (
    <html lang="pt-br">
      <body
        className={`${ConcertOne.className} antialiased flex flex-col justify-start rounded-3xl min-h-[100svh] dark:bg-dark bg-dark relative overflow-x-hidden`}
      >
        <PontoSeguidor />
        <Menu temaCookie={temaCookie} />
        {Children.map(children, (child) =>
          cloneElement(child as React.ReactElement, { temaCookie })
        )}
      </body>
    </html>
  );
}
