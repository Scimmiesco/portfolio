import "../../globals.css";
import SwitchTema from "./switcher_tema/switch_tema";

export default function Menu() {
  var itensMenu = [
    {
      id: 1,
      nome: "home",
      rotulo: "Início",
    },
    {
      id: 2,
      nome: "face",
      rotulo: "Sobre mim",
    },
    {
      id: 3,
      nome: "code",
      rotulo: "Projetos",
    },
    {
      id: 4,
      nome: "mail",
      rotulo: "Fala comigo",
    },
  ];
  return (
    <section className="flex flex-row w-full h-fit z-40 fixed px-8">
      <nav className="flex flex-row w-full m-auto gap-4">
        <ul className="flex flex-row gap-1 m-auto min-w-fit flex-1 items-center">
          {itensMenu.map((item) => (
            <li
              key={item.id}
              className="hover:bg-dark w-fit whitespace-nowrap px-2 group transition-colors ease-linear duration-300 bg-white border-2 border-dark flex flex-row justify-around items-center flex-1 first:rounded-l-3xl last:rounded-r-3xl rounded-md"
            >
              <span className="delay-200 duration-100 text-3xl group-hover:text-white material-symbols-rounded m-1 items-center text-dark">
                {item.nome}
              </span>
              <p className="group-hover:text-white text-2xl delay-200 duration-100 text-center m-auto text-dark">
                {item.rotulo}
              </p>
            </li>
          ))}
        </ul>
        <ul className="my-auto">
          <li >
            <SwitchTema idPrefix="switch_menu"></SwitchTema>
          </li>
        </ul>
      </nav>
    </section>
  );
}
