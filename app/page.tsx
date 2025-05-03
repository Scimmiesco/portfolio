"use client";
import { useEffect, useState } from "react";
import Footer from "./src/components/footer/footer";
import Projetos from "./src/components/projetos/projetos";
import SobreMim from "./src/components/sobreMim/sobre_mim";
import { FiraCode } from "@/app/ui/fonts";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width <= 768);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-start min-h-screen  p-2 tablet:min-w-[768px] tablet:mx-auto gap-8 w-full">
      <SobreMim />
      <Projetos />
      <Footer />
    </main>
  );
}
