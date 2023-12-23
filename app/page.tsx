import Projetos from "./src/components/projetos/projetos";
import SobreMim from "./src/components/sobre_mim";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-3/4 mx-auto min-h-[100svh] gap-2 my-1">
      <section className="w-full text-center dark:bg-dark bg-white pt-8 rounded-3xl border-2 border-white">
        <h1 className="text-[6vw] leading-[7vw] text-dark dark:text-white">OLÁ, SOU O PEDRO</h1>
      </section><SobreMim></SobreMim>
      <Projetos></Projetos>
    </main>
  );
}
