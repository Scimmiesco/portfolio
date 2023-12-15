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
      nome: "image",
      rotulo: "Projetos",
    },
    {
      id: 4,
      nome: "mail",
      rotulo: "Fala comigo",
    },
  ];
  return (
    <section className="p-2 w-full h-auto  bg-white">
      <nav className="w-2/3 m-auto">
        <ul className="flex flex-row gap-1 items-center">
          {itensMenu.map((item) => (
            <li className="hover:bg-dark group cursor-pointer transition-all delay-100 ease-in-out bg-white border-2 border-dark flex flex-row justify-around items-center  flex-1 rounded-md first:rounded-l-3xl last:rounded-r-3xl p-1">
              <span className="group-hover:text-white material-symbols-rounded m-1 items-center text-dark">
                {item.nome}
              </span>
              <p className="group-hover:text-white text-center m-auto text-dark">
                {item.rotulo}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
