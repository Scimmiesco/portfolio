"use client";

import { useEffect, useState } from "react";
import "../../../globals.css";
import "./switch_tema.css";
import { getCookie, setCookie } from 'cookies-next';
export default function SwitchTema({ idPrefix = "", onToggle, temalocalStorage }: any) {

  const temaCheckboxId = `${idPrefix}tema_checkbox`;
  
  const [isChecked, setIsChecked] = useState(temalocalStorage === 'light' ? true : false);


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
        className="opacity-0 cursor-none absolute w-10 h-10 "
        checked={isChecked}
        onChange={handleToggle}
      />
      <label
        htmlFor={temaCheckboxId}
        className="cursor-none overflow-hidden relative w-10 h-10 bg-white dark:bg-dark border-2 dark:border-white border-dark rounded-full flex items-center p-1 z-30"
      >
        <span
          id={`${idPrefix}dark_icon`}
          className="material-symbols-rounded text-dark dark:text-white text-3xl"
        >
          dark_mode
        </span>
        <span
          id={`${idPrefix}light_icon`}
          className="light_icon material-symbols-rounded text-dark dark:text-white text-3xl absolute translate-x-10 opacity-0"
        >
          light_mode
        </span>
      </label>
    </div>
  );
}
