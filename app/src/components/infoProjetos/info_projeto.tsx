"use client";
import "./info_projeto.css";
import "../../../styles/tagAEffect.css";
import "../../../interfaces/Iprojetos";
import { useEffect, useState } from "react";

export default function InfoProjetos({ projeto }: { projeto: Project }) {

  const [modalFechado, setModalFechado] = useState<boolean>(true);

  const toogleModalAberto = () => {
    setModalFechado(!modalFechado);
  };

  useEffect(() => {
    const fecharModalAoClicarFora = (event: MouseEvent) => {
      const modal = document.getElementById("modal");

      if (
        !modalFechado &&
        event.target instanceof Element &&
        !modal?.contains(event.target as Node)
      ) {
        setModalFechado(true);
      }
    };

    document.addEventListener("click", fecharModalAoClicarFora);

    return () => {
      document.removeEventListener("click", fecharModalAoClicarFora);
    };
  }, [modalFechado]);



  return (
    <section className="relative infoSection">
      <button
        onClick={toogleModalAberto}
        className="cursor-none w-10 h-10 group dark:bg-dark border-2 dark:border-white border-dark hover:bg-black rounded-full flex items-center p-1"
      >
        <span className="material-symbols-rounded text-dark group-hover:text-white dark:text-white text-center m-auto">
          info
        </span>
      </button>
      {modalFechado ? null : (
        <div
          id="modal"
          className={`${modalFechado
            ? "opacity-0 h-0 w-0 transition-none"
            : "opacity-95 min-w-[200px] min-h-fit transition-opacity duration-150 linear"
            } modal absolute p-1 bg-white dark:bg-dark border-2 border-dark dark:border-white white top-0 right-10 z-40 rounded-3xl m-2 shadow-md shadow-dark`}
        >
          <div>
            <div className="">
              <h3
                className={`${modalFechado ? "opacity-0 transition-none" : "opacity-1"
                  } text-dark dark:text-white text-center text-2xl p-2`}
              >
                {projeto.title}
              </h3>
            </div>
            <nav
              id="navModal"
              className={`nav ${modalFechado ? "opacity-0" : "opacity-1"}`}
            >
              <ul
                className={`dark:text-white`}
              >
                <li>
                  <h4 className="text-xl p-1">
                    Framework
                  </h4>
                  {projeto.frameworks.items.map((item, index) => (
                    <li key={index}>
                      <a className="linkSeta" href={item.link}>
                        <p className="px-3">{item.name}</p>
                      </a>
                    </li>
                  ))}
                </li>
                <li>
                  <h4 className="text-xl p-1">
                    Bibliotecas
                  </h4>
                  {projeto.libraries.items.map((item, index) => (
                    <li key={index}>
                      <a className="linkSeta" href={item.link} target="_blank">
                        <p className="px-3">{item.name}</p>
                      </a>
                    </li>
                  ))}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </section>
  );
}
