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
    <section className="relative">
      <div
        onClick={toggleModalAberto}
        className="cursor-pointer icone-padrao group relative animacaoClick"
      >
        <i className="fi fi-sr-info groupHover-padrao"></i>
      </div>
      {modalFechado ? null : (
        <div
          id="modal"
          className={`${
            modalFechado
              ? "opacity-0 max-h-0 h-0 w-0"
              : "opacity-1 min-w-72 min-h-fit duration-150 linear"
          } modal absolute px-1 py-1 top-12 -left-56 xl:-left-full rounded-xl z-50  border-2 border-solid border-dark dark:border-white transition-all duration-300`}
        >
          <div>
            <div className="">
              <h3
                className={`${
                  modalFechado ? "opacity-0" : "opacity-1"
                }  text-center text-3xl`}
              >
                {projeto.modalInfo.title}
              </h3>
            </div>
            <nav
              id="navModal"
              className={`nav ${modalFechado ? "opacity-0" : "opacity-1"}`}
            >
              <ul>
                <li>
                  <h4 className="text-2xl py-1 ">Framework</h4>
                  {projeto.modalInfo.frameworks.items.map((item, index) => (
                    <li key={index} className={FiraCode.className}>
                      <a className="linkSeta" href={item.link} target="_blank">
                        <p className="text-lg px-1 whitespace-nowrap">
                          {item.name}
                        </p>
                      </a>
                    </li>
                  ))}
                </li>
                <li>
                  <h4 className="text-2xl py-1">Bibliotecas</h4>
                  {projeto.modalInfo.libraries.items.map((item, index) => (
                    <li key={index} className={FiraCode.className}>
                      <a className="linkSeta" href={item.link} target="_blank">
                        <p className="text-lg px-1 whitespace-nowrap">
                          {item.name}
                        </p>
                      </a>
                    </li>
                  ))}
                </li>
                {projeto.modalInfo.deployments != null && (
                  <li>
                    <h4 className="text-2xl py-1">Implantação</h4>
                    {projeto.modalInfo.deployments?.items.map((item, index) => (
                      <li key={index} className={FiraCode.className}>
                        <a
                          className="linkSeta"
                          href={item.link}
                          target="_blank"
                        >
                          <p className="text-lg px-1 whitespace-nowrap">
                            {item.name}
                          </p>
                        </a>
                      </li>
                    ))}
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
