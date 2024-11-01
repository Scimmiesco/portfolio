"use client";
import React, { useEffect } from "react";
import "../../globals.css";
import SwitchTema from "./switcher_tema/switch_tema";
import useDarkMode from "./toogle_tema";

export default function Menu({ temaCookie }: any) {
  var itensMenu = [
    {
      id: 1,
      classe: "fi fi-sr-house-blank",
      rotulo: "Início",
    },
  ];

  const [tema, setTema] = useDarkMode(temaCookie);

  const handleDarkModeToggle = (isChecked: boolean) => {
    setTema(isChecked ? "light" : "dark");
  };
  const voltaProTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-fit min-h-screen right-0 z-50 fixed">
      <ul className="flex justify-start items-center flex-col  p-2 gap-4">
        <li>
          <SwitchTema
            onToggle={handleDarkModeToggle}
            iconePadrao={temaCookie}
            idPrefix="switch_menu"
          ></SwitchTema>
        </li>
      </ul>
    </section>
  );
}
