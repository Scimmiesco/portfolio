import { FiraCode } from "@/app/ui/fonts";

export default function SobreMim() {
  return (
    <section className="dark:bg-dark bg-white grid grid-rows-4 grid-cols-9 p-4 rounded-3xl w-full justify-center border-2 border-white">
      <div className="flex justify-center flex-row items-center row-span-1 col-span-5">
        <span className="text-dark dark:text-white text-center material-symbols-rounded text-8xl leading-1">
          face
        </span>
        <h2 className="text-dark text-center text-5xl dark:text-white">
          Sobre mim
        </h2>
      </div>
      <div className="row-span-2 col-span-9">
        <p
          className={`' ${FiraCode.className} text-center dark:text-white text-2xl  '`}
        >
          Desenvolvedor Frontend e UX/UI Designer.
          <br />
          Iniciando minha jornada, aprendendo a aprender.
          <br />
          Criando arte e código, para serem a mesma coisa.
        </p>
      </div>
    </section>
  );
}
