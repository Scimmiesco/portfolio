import { useEffect, useState } from "react";
import "./info_projeto.css";
import "../../../styles/tagAEffect.css";
import "../../../interfaces/IProjetos";
import { FiraCode } from "@/app/ui/fonts";

export default function InfoProjetos({ projeto }: { projeto: Project }) {
  const [modalFechado, setModalFechado] = useState<boolean>(true);

  const toggleModalAberto = () => {
    setModalFechado(!modalFechado);
  };

  return (
    <section className="relative infoSection">
      <button
        onClick={toggleModalAberto}
        className="icone-padrao group relative"
      >
        <i className="fi fi-sr-info">
        </i>
      </button>
      {modalFechado ? null : (
        <div
          id="modal"
          className={`${modalFechado
            ? "opacity-0 h-0 w-0 transition-none"
            : "opacity-95 min-w-[225px] min-h-fit transition-opacity duration-150 linear"
            } modal absolute px-1 py-1  bg-white dark:bg-dark border-2  dark:border-white white -top-0 left-16 rounded-l-md z-40 rounded-3xl `}
        >
          <div>
            <div className="">
              <h3
                className={`${modalFechado ? "opacity-0 transition-none" : "opacity-1"
                  } text-dark dark:text-white text-center text-3xl`}
              >
                {projeto.modalInfo.title}
              </h3>
            </div>
            <nav
              id="navModal"
              className={`nav ${modalFechado ? "opacity-0" : "opacity-1"}`}
            >
              <ul className={`dark:text-white`}>
                <li>
                  <h4 className="text-2xl py-1">Framework</h4>
                  {projeto.modalInfo.frameworks.items.map((item, index) => (
                    <li key={index} className={FiraCode.className}>
                      <a className="linkSeta" href={item.link}>
                        <p className="text-lg px-1 whitespace-nowrap">{item.name}</p>
                      </a>
                    </li>
                  ))}
                </li>
                <li>
                  <h4 className="text-2xl py-1">Bibliotecas</h4>
                  {projeto.modalInfo.libraries.items.map((item, index) => (
                    <li key={index} className={FiraCode.className}>
                      <a className="linkSeta" href={item.link} target="_blank">
                        <p className="text-lg px-1 whitespace-nowrap">{item.name}</p>
                      </a>
                    </li>
                  ))}
                </li>
                {projeto.modalInfo.deployments != null && (
                  <li>
                    <h4 className="text-2xl py-1">Implantação</h4>
                    {projeto.modalInfo.deployments?.items.map(
                      (item, index) => (
                        <li key={index} className={FiraCode.className}>
                          <a
                            className="linkSeta"
                            href={item.link}
                            target="_blank"
                          >
                            <p className="text-lg px-1 whitespace-nowrap">{item.name}</p>
                          </a>
                        </li>
                      )
                    )}
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </section>
  );
}
