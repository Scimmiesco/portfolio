import { FiraCode } from "@/app/ui/fonts";
import SVG_iconeEu from "./icone_eu";
import SwitchTema from "../switcher_tema/switch_tema";
import useDarkMode from "../toogle_tema";

export default function SobreMim({ temaCookie }: any) {
  const [tema, setTema] = useDarkMode(temaCookie);
  const handleDarkModeToggle = (isChecked: boolean) => {
    setTema(isChecked ? "light" : "dark");
  };
  return (
    <section className="grid grid-cols-1 grid-flow-col grid-rows-2 tablet:grid-cols-2 tablet:grid-flow-row  text-center items-center justify-around gap-2 rounded-t-3xl rounded-b-md w-5/6">
      <div className="flex flex-col justify-center tablet:gap-2 gap-8 items-center containerDark">
        <SVG_iconeEu />
        <div className="flex flex-col tablet:flex-row gap-4 tablet:gap-2 w-full justify-center items-center">
          <h1 className="text-3xl tablet:text-6xl leading-[6vw]  tablet:whitespace-nowrap">
            OLÁ, SOU O PEDRO
          </h1>
          <SwitchTema
            onToggle={handleDarkModeToggle}
            iconePadrao={temaCookie}
            idPrefix="switch_menu"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center containerDark">
        <p>Desenvolvedor Frontend e UX/UI Designer.</p>
        <p>Combinado código e arte, lógica e estética.</p>
        <p>Transformando ideias abstratas em realidades tangíveis.</p>
      </div>
    </section>
  );
}
