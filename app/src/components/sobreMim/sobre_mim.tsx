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
    <section className=" relative
    grid grid-cols-1 grid-rows-2 tablet:grid-row-1 tablet:grid-cols-2 w-full
    text-center items-center gap-2">
      <div className="flex flex-col justify-center tablet:gap-2 gap-8 items-center containerDark">
        <SVG_iconeEu />
        <h2 className="text-5xl font-semibold tablet:text-4xl">
          OLÁ, SOU O PEDRO
        </h2>
        <div className="absolute top-0 left-0">
          <SwitchTema
            onToggle={handleDarkModeToggle}
            iconePadrao={temaCookie}
            idPrefix="switch_menu"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center containerDark font-semibold">
        <p>Desenvolvedor Frontend e UX/UI Designer.</p>
        <p>Combinado código e arte, lógica e estética.</p>
        <p>Transformando ideias abstratas em realidades tangíveis.</p>
      </div>
    </section>
  );
}
