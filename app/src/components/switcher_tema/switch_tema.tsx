"use client";

import { useState } from "react";
import "../../../globals.css";
import "./switch_tema.css";
export default function SwitchTema({
  idPrefix = "",
  onToggle,
  iconePadrao,
}: any) {
  const temaCheckboxId = `${idPrefix}tema_checkbox`;

  const [isChecked, setIsChecked] = useState(
    iconePadrao === "light" ? true : iconePadrao === "dark" ? false : true
  );

  const handleToggle = () => {
    const isCheckedToogle = !isChecked;
    setIsChecked(isCheckedToogle);
    onToggle(isCheckedToogle);
  };

  return (
    <div className="relative">
      <input
        type="checkbox"
        id={temaCheckboxId}
        className="opacity-0 absolute w-10 h-10 group hover:bg-dark "
        checked={isChecked}
        onChange={handleToggle}
      />
      <label
        htmlFor={temaCheckboxId}
        className=" 
        !cursor-pointer 
        overflow-hidden 
        group
        icone_cores
        icone-padrao
        relative 
        w-10 h-10
        flex justify-center items-center p-1 z-50"
      >
        <span
          id={`${idPrefix}dark_icon`}
          className="material-symbols-rounded text-3xl groupHover-padrao"
        >
          dark_mode
        </span>
        <span
          id={`${idPrefix}light_icon`}
          className="light_icon material-symbols-rounded text-3xl absolute translate-x-10 opacity-0 groupHover-padrao"
        >
          light_mode
        </span>
      </label>
    </div>
  );
}
