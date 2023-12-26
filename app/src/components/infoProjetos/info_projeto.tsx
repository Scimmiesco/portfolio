"use client";
import "./info_projeto.css";
import { useEffect, useState } from "react";

export default function InfoProjetos() {
  const [modalFechado, setModalFechado] = useState<boolean>(true);

  const toogleModalAberto = () => {
    setModalFechado(!modalFechado);
  };
  useEffect(() => {
    const fecharModalAoClicarFora = (event: MouseEvent) => {
      const modal = document.getElementById('modal');

      if (!modalFechado && event.target instanceof Element && !modal?.contains(event.target as Node)) {
        setModalFechado(true);
      }
    };

    document.addEventListener('click', fecharModalAoClicarFora);

    return () => {
      document.removeEventListener('click', fecharModalAoClicarFora);
    };

  }, [modalFechado]);

  return (
    <section className="relative infoSection">
      <button
        onClick={toogleModalAberto}
        className=" w-10 h-10 bg-white dark:bg-dark border-2 dark:border-white border-dark rounded-full flex items-center p-1"
      >
        <span className="material-symbols-rounded text-dark dark:text-white text-center m-auto">
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
          <div
            className=""
          >
            <div className="">
              <h3
                className={`'
         ${modalFechado ? " opacity-0 transition-none" : "opacity-1 "}
         text-dark dark:text-white text-center text-2xl p-2 
         '
         `}
              >
                Área Insted
              </h3>
            </div>
            <nav
              id="navModal"
              className={`' nav
         ${modalFechado ? " opacity-0" : "opacity-1 "} 
         '`}
            >
              <ul className={`' ${modalFechado ? " opacity-0" : "opacity-1"} ' dark:text-white  `}>
                <li>
                  <h4 className="text-xl p-1">Framework</h4>
                  <li>
                    <a>
                      <p className="px-3">Angular 15.2</p>
                    </a>
                  </li>
                </li>
                <li>
                  <li>
                    <h4 className="text-xl p-1">Bibliotecas</h4>
                  </li>
                  <a
                    className=""
                    href="https://v15.material.angular.io/"
                    target="blank"
                  >
                    <p className="px-3">Angular Material</p>
                  </a>
                  <a href="https://swiperjs.com/swiper-api" target="blank">
                    <p className="px-3">SwiperJS</p>
                  </a>
                  <a
                    href="https://www.npmjs.com/package/crypto-js"
                    target="blank"
                  >
                    <p className="px-3">Crypto-Js</p>
                  </a>
                  <a
                    href="https://www.npmjs.com/package/jwt-decode"
                    target="blank"
                  >
                    <p className="px-3">JWT-Decode</p>
                  </a>
                  <a href="https://ngrx.io/guide/store" target="blank">
                    <p className="px-3">Ngrx-Store</p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>)}
    </section>
  );
}
