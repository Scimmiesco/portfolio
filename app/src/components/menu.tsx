'use client'
import React, { useEffect } from "react";
import "../../globals.css";
import SwitchTema from "./switcher_tema/switch_tema";
import useDarkMode from "./toogle_tema";

export default function Menu({ temaCookie }: any) {
  var itensMenu = [
    {
      id: 1,
      nome: "home",
      rotulo: "Início",
    },

  ];
  const [tema, setTema] = useDarkMode(temaCookie);

  const handleDarkModeToggle = (isChecked: boolean) => {
    setTema(isChecked ? "light" : "dark");
  };

  return (
    <section className="flex justify-center flex-row w-full h-fit z-40 fixed px-8 py-2">
      <nav className="flex flex-row justify-center gap-4 w-full"> <ul className="my-auto">
        <li>
          <SwitchTema
            onToggle={handleDarkModeToggle} temalocalStorage={temaCookie} idPrefix="switch_menu"></SwitchTema>
        </li>
      </ul>
        <ul className="flex flex-row gap-1 items-center">
          {itensMenu.map((item) => (
            <li
              key={item.id}
              className="bg-white dark:border-white hover:bg-dark dark:bg-dark dark:hover:bg-white px-8 group transition-colors ease-linear duration-300  border-2 border-dark flex flex-row justify-around items-center flex-1 first:rounded-l-3xl last:rounded-r-3xl rounded-md"
            >
              <span className="text-dark dark:text-white group-hover:text-white dark:group-hover:text-dark delay-200 text-3xl  material-symbols-rounded m-1 items-center ">
                {item.nome}
              </span>

            </li>
          ))}
        </ul>

      </nav>
    </section>
  );
}
