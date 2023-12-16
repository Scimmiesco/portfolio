"use client";
import "../../../globals.css";
import "./switch_tema.css";

export default function SwitchTema() {
  return (
    <div className="ml-10 my-auto relative">
      <input
        type="checkbox"
        id="tema_checkbox"
        className="opacity-0 cursor-none absolute w-10 h-10 "
      />
      <label
        htmlFor="tema_checkbox"
        className="relative w-10 h-10 bg-white border-2 border-dark rounded-full flex items-center p-1 z-30"
      >
        <span
          id="dark_icon"
          className=" material-symbols-rounded text-dark text-3xl"
        >
          dark_mode
        </span>
        <span
          id="light_icon"
          className="light_icon material-symbols-rounded text-dark text-3xl absolute translate-x-10 opacity-0"
        >
          light_mode
        </span>
      </label>
    </div>
  );
}
