import { FiraCode } from "@/app/ui/fonts";
import SVG_iconeEu from "./icone_eu";

export default function SobreMim() {
  return (
    <section className="container-padrao  flex flex-row text-center items-center justify-center gap-2 rounded-t-3xl rounded-b-md max-h-[20%] min-h-[20%]">
      <div className="flex flex-col justify-center gap-2 items-center min-w-[50%]">
        <SVG_iconeEu></SVG_iconeEu>
        <h1 className="text-3xl tablet:text-6xl leading-[6vw] text-dark dark:text-white flex-1 text-nowrap">
          OLÁ, SOU O PEDRO
        </h1>
      </div>
      <div className=" w-fit">
        <p >
          Desenvolvedor Frontend e UX/UI Designer.
        </p>
        <p>Combinado código e arte, lógica e estética.</p>
        <p>Transformando ideias abstratas em realidades tangíveis.</p>
      </div>
    </section>
  );
}
