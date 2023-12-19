import SwitchTema from "../switcher_tema/switch_tema";
import "./projetos.css";

export default function Projetos() {

  var itensMenuProjeto = [
    {
      id: 1,
      nome: "info",
    },
    {
      id: 2,
      nome: "open_in_new",
    },
    {
      id: 3,
      nome: "folder_data",
    },
  ];

  return (
    <section className="dark:bg-dark bg-white grid grid-rows-10 grid-cols-9 grid-flow-row gap-2 p-4 rounded-3xl min-h-[75vh]  w-full justify-center">
      <div className="flex justify-center flex-row items-center row-span-2 col-span-5">
        <span className="text-dark dark:text-white text-center material-symbols-rounded text-8xl leading-1">
          code
        </span>
        <h2 className="text-dark text-center text-5xl dark:text-white">PROJETOS</h2>
      </div>
      <div className="flex place-items-end justify-end row-span-1 col-span-4 items-end">
        {itensMenuProjeto.map((item) => (
          <li key={item.id}
            className="w-10 h-10 bg-white dark:bg-dark border-2 dark:border-white border-dark rounded-full flex items-center p-1 mx-2 my-auto">
            <span className="material-symbols-rounded text-dark dark:text-white text-center m-auto">
              {item.nome}
            </span></li>
        ))}
        <div className="my-auto">
          <SwitchTema idPrefix="switch_projeto_1"></SwitchTema>
        </div>
      </div>
      <div className="flex flex-col items-end bg-insted_dark bg-center bg-cover card row-start-3 row-span-8 col-span-5  rounded-3xl"></div>
      <div className="card  bg-insted_home_dark bg-start bg-cover bg-no-repeat row-span-9 col-span-2  rounded-3xl"></div>
      <div className="card bg-insted_perfil_dark bg-start bg-cover bg-no-repeat row-span-9 col-span-2  rounded-3xl"></div>
    </section>
  );
}
