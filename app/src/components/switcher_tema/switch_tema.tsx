"use client";

import { useState } from "react";
import "../../../globals.css";
import "./switch_tema.css";
export default function SwitchTema({ idPrefix = "", onToggle, iconePadrao }: any) {

  const temaCheckboxId = `${idPrefix}tema_checkbox`;

  const [isChecked, setIsChecked] = useState(
    iconePadrao === 'light' ? true
      : iconePadrao === 'dark' ? false : true);


  const handleToggle = () => {
    const isCheckedToogle = !isChecked;
    setIsChecked(isCheckedToogle);
    onToggle(isCheckedToogle)
  };

  return (
    <div className="relative">
      <input
        type="checkbox"
        id={temaCheckboxId}
        className="opacity-0 cursor-none absolute w-10 h-10 group hover:bg-dark"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label
        htmlFor={temaCheckboxId}
        className="cursor-none overflow-hidden group hover:bg-dark relative w-10 h-10 bg-white dark:bg-dark border-2 dark:border-white border-dark rounded-full flex items-center p-1 z-30"
      >
        <span
          id={`${idPrefix}dark_icon`}
          className="material-symbols-rounded text-dark dark:text-white text-3xl group-hover:text-white"
        >
          dark_mode
        </span>
        <span
          id={`${idPrefix}light_icon`}
          className="light_icon material-symbols-rounded group-hover:text-white text-dark dark:text-white text-3xl absolute translate-x-10 opacity-0"
        >
          light_mode
        </span>
      </label>
    </div>
  );
}
