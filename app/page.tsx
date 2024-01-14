'use client'
import { useEffect, useState } from "react";
import Footer from "./src/components/footer/footer";
import Projetos from "./src/components/projetos/projetos";
import SobreMim from "./src/components/sobre_mim";

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
    <main className="flex flex-col items-center justify-between w-[98%] tablet:min-w-[768px] tablet:max-w-[75%] mx-auto min-h-[100svh] gap-2 my-1">
      <section className="flex w-full min-h-[12vh] items-end justify-center dark:bg-dark bg-white pt-8 rounded-3xl border-2 border-white">
        <h1 className="text-3xl tablet:text-[6vh] m-1 leading-[6vw] text-dark dark:text-white">
          OLÁ, SOU O PEDRO
        </h1>
      </section>
      <SobreMim />
      <Projetos />
      <Footer />
    </main>
  );
}
