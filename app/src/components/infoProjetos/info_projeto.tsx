"use client";
import "./info_projeto.css";
import { useState } from "react";

export default function InfoProjetos() {
  const [modalFechado, setModalAberto] = useState<boolean>(true);

  const toogleModalAberto = () => {
    setModalAberto(!modalFechado);
  };

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

      <div
        className={` ${
          modalFechado ? " hidden opacity-0 h-0 w-0" : " opacity-95 "
        } modal absolute bg-white border-2 border-dark w-64 h-96 white top-0 right-10 z-40 rounded-3xl m-2 shadow-sm shadow-dark`}
      >
        <h3 className="text-dark text-center text-2xl p-2">Área Insted</h3>
        <nav
          className={`
         ${modalFechado ? "hidden opacity-0" : "opacity-1 "} nav`}
        >
          <ul>
            <li>
              <h4 className="text-xl p-1">Framework</h4>
              <p className="px-3">Angular 15.2</p>
            </li>
            <li>
              <h4 className="text-xl p-1">Bibliotecas</h4>
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
              <a href="https://www.npmjs.com/package/crypto-js" target="blank">
                <p className="px-3">Crypto-Js</p>
              </a>
              <a href="https://www.npmjs.com/package/jwt-decode" target="blank">
                <p className="px-3">JWT-Decode</p>
              </a>
              <a href="https://ngrx.io/guide/store" target="blank">
                <p className="px-3">Ngrx-Store</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
