import "../../globals.css";

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
    <section className="flex flex-row w-full h-fit z-48 fixed px-8">
      <nav className="flex flex-row flex-1">
        <ul className="flex flex-row gap-1 m-auto w-2/3 items-center">
          {itensMenu.map((item) => (
            <li key={item.id} className="hover:bg-dark group transition-colors ease-linear duration-300 bg-white border-2 border-dark flex flex-row justify-around items-center  flex-1 rounded-md first:rounded-l-3xl last:rounded-r-3xl p-1">
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
          <li className="w-12 h-12 hover:bg-dark group transition-colors ease-linear duration-300 bg-white border-2 border-dark flex flex-row items-center rounded-full  p-1">
            <span className="delay-200 duration-100 text-3xl group-hover:text-white material-symbols-rounded m-1 items-center text-dark">
              light_mode
            </span>
          </li>
        </ul>
      </nav>
    </section>
  );
}
