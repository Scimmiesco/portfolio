import type { Metadata } from "next";
import { Cookies } from "react-cookie";
import "./globals.css";
import Menu from "./src/components/menu";
import PontoSeguidor from "./src/components/cursor";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "Pedro Almeida",
  description: "Meu portfólio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const theme = new Cookies().get("tema")
  console.log(theme.value)

  return (
    <html suppressHydrationWarning lang="pt-br" className={theme?.value}>
      <body className="m-1 rounded-3xl min-h-[100svh] dark:bg-dark bg-white relative">
        <Providers>
          <PontoSeguidor />
          <Menu></Menu>
          {children}
        </Providers>
      </body>
    </html>
  );
}
