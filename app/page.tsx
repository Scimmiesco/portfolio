'use client'
import { useEffect, useState } from "react";
import Footer from "./src/components/footer/footer";
import Projetos from "./src/components/projetos/projetos";
import SobreMim from "./src/components/sobreMim/sobre_mim";
import { FiraCode } from "@/app/ui/fonts";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-2 tablet:min-w-[768px] tablet:max-w-[75%] mx-auto gap-2">
      <SobreMim />
      <Projetos />
      <Footer />
    </main>
  );
}
