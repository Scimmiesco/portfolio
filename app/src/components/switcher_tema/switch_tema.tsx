"use client";

import { useEffect, useState } from "react";
import "../../../globals.css";
import "./switch_tema.css";

export default function SwitchTema({ idPrefix = "", onToggle, temalocalStorage }: any) {
 
  const temaCheckboxId = `${idPrefix}tema_checkbox`;

  const [isChecked, setIsChecked] = useState(temalocalStorage === 'light' ? true : false);

 console.log("temaLocalStorage", temalocalStorage)

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
        className="opacity-1 cursor-none absolute w-10 h-10 "
        checked={isChecked}
        onChange={handleToggle}
      />
      <label
        htmlFor={temaCheckboxId}
        className="relative w-10 h-10 bg-white border-2 border-dark rounded-full flex items-center p-1 z-30"
      >
        <span
          id={`${idPrefix}dark_icon`}
          className="material-symbols-rounded text-dark text-3xl"
        >
          dark_mode
        </span>
        <span
          id={`${idPrefix}light_icon`}
          className="light_icon material-symbols-rounded text-dark text-3xl absolute translate-x-10 opacity-0"
        >
          light_mode
        </span>
      </label>
    </div>
  );
}
