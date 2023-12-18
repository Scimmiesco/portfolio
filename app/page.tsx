import Projetos from "./src/components/projetos/projetos";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-[100svh]">
      <section className="w-full text-center bg-white pt-16">
        <h2 className="text-[10vw] leading-none text-dark dark:text-white">OLÁ, SOU PEDRO</h2>
        <h2 className="text-[10vw] leading-[12vw] text-dark">DEV FRONTEND</h2>
      </section>
      <Projetos></Projetos>
    </main>
  );
}
