'use client'
import React from "react";
import "../../globals.css";
import SwitchTema from "./switcher_tema/switch_tema";
import useDarkMode from "./toogle_tema";

export default function Menu() {
  // Define menu items
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

  // Use useDarkMode hook to manage dark mode state
  const [corTema, setTema] = useDarkMode();

  // Handle dark mode toggle
  const handleDarkModeToggle = () => {
    // Toggle between "light" and "dark"
    setTema(corTema === "dark" ? "light" : "dark");
  };

  return (
    <section className="flex justify-center flex-row w-full h-fit z-40 fixed px-8">
      <nav className="flex flex-row justify-center gap-4 w-full">
        <ul className="flex flex-row gap-1 items-center min-w-[50%] max-w-[75%]">
          {itensMenu.map((item) => (
            <li
              key={item.id}
              className="bg-white hover:bg-dark min-w-fit w-1/4 whitespace-nowrap px-2 group transition-colors ease-linear duration-300  border-2 border-dark flex flex-row justify-around items-center flex-1 first:rounded-l-3xl last:rounded-r-3xl rounded-md"
            >
              <span className="delay-200 duration-100 text-3xl text-dark group-hover:text-white material-symbols-rounded m-1 items-center ">
                {item.nome}
              </span>
              <p className=" text-dark group-hover:text-white text-2xl delay-200 duration-100 text-center m-auto">
                {item.rotulo}
              </p>
            </li>
          ))}
        </ul>
        <ul className="my-auto">
          <li onClick={handleDarkModeToggle}>
            <SwitchTema idPrefix="switch_menu"></SwitchTema>
          </li>
        </ul>
      </nav>
    </section>
  );
}
