"use client";
import "./info_projeto.css";
import "../../../styles/tagAEffect.css";
import { useEffect, useState } from "react";

export default function InfoProjetos() {
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
const projetos = {[
  "AreaInsted"]
}
  const areaInstedInfo = {
    title: "Área Insted",
    framework: {
      title: "Framework",
      items: [{ id: 1, name: "Angular 15.2", link: "https://angular.io/" }],
    },
    libraries: {
      title: "Bibliotecas",
      items: [{ 
        [
        { name: "Angular Material", link: "https://v15.material.angular.io/" },
        { name: "SwiperJS", link: "https://swiperjs.com/swiper-api" },
        { name: "Crypto-Js", link: "https://www.npmjs.com/package/crypto-js" },
        {
          name: "JWT-Decode",
          link: "https://www.npmjs.com/package/jwt-decode",
        },
        { name: "Ngrx-Store", link: "https://ngrx.io/guide/store" },
    ]}],
    },
  };

  return (
    <section className="relative infoSection">
      <button
        onClick={toogleModalAberto}
        className="w-10 h-10 bg-white dark:bg-dark border-2 dark:border-white border-dark rounded-full flex items-center p-1"
      >
        <span className="material-symbols-rounded text-dark dark:text-white text-center m-auto">
          info
        </span>
      </button>
      {modalFechado ? null : (
        <div
          id="modal"
          className={`${
            modalFechado
              ? "opacity-0 h-0 w-0 transition-none"
              : "opacity-95 min-w-[200px] min-h-fit transition-opacity duration-150 linear"
          } modal absolute p-1 bg-white dark:bg-dark border-2 border-dark dark:border-white white top-0 right-10 z-40 rounded-3xl m-2 shadow-md shadow-dark`}
        >
          <div>
            <div className="">
              <h3
                className={`${
                  modalFechado ? "opacity-0 transition-none" : "opacity-1"
                } text-dark dark:text-white text-center text-2xl p-2`}
              >
                {areaInstedInfo.title}
              </h3>
            </div>
            <nav
              id="navModal"
              className={`nav ${modalFechado ? "opacity-0" : "opacity-1"}`}
            >
              <ul
                className={`${
                  modalFechado ? "opacity-0" : "opacity-1"
                } dark:text-white`}
              >
                <li>
                  <h4 className="text-xl p-1">
                    {areaInstedInfo.framework.title}
                  </h4>
                  {areaInstedInfo.framework.items.map((item, index) => (
                    <li key={index}>
                      <a className="linkSeta" href={item.link}>
                        <p className="px-3">{item.name}</p>
                      </a>
                    </li>
                  ))}
                </li>
                <li>
                  <h4 className="text-xl p-1">
                    {areaInstedInfo.libraries.title}
                  </h4>
                  {areaInstedInfo.libraries.items.map((item, index) => (
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
