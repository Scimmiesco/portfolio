import type { Metadata } from "next";
import "./globals.css";
import { cookies } from "next/headers";
import { AlumniSans, FiraCode } from "@/app/ui/fonts";
import { Children, cloneElement } from "react";

export const metadata: Metadata = {
    title: "Pedro Almeida",
    description: "Meu portfólio",
};

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    const cookiesStore = await cookies();
    const temaCookie = cookiesStore.get("tema")?.value || "light";

    return (
        <html lang="pt-br" className={temaCookie}>
        <body
            className={`${AlumniSans.variable} ${FiraCode.variable} antialiased w-full flex flex-col justify-start min-h-screen bg-white dark:bg-dark`}
        >
        {Children.map(children, (child) =>
            cloneElement(child as React.ReactElement, { temaCookie })
        )}
        </body>
        </html>
    );
}