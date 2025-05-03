import React from "react";
import Image from "next/image";

export default function Footer() {
  const icones = {
    redesSociais: [
      {
        id: 1,
        nome: "Instagram",
        classe: "fi fi-brands-instagram",
        link: "https://www.instagram.com",
      },
      {
        id: 2,
        nome: "Github",
        classe: "fi fi-brands-github",
        link: "https://www.github.com",
      },
      {
        id: 3,
        nome: "Linkedin",
        classe: "fi fi-brands-linkedin",
        link: "https://www.linkedin.com",
      },
    ],
  };

  return (
    <section className="container-padrao  flex flex-row text-center items-center justify-center tablet:justify-between rounded-b-3xl rounded-t-md
    border-[6px] border-solid border-dark flex-wrap dark:border-white">
      <a className="linkSeta dark:text-white" href="mailto:p.almeida@live.com ">
          <h3 className="px-1 whitespace-nowrap text-center">
            P.ALMEIDA@LIVE.COM
          </h3>
      </a>
      <nav>
        <ul className="flex flex-row gap-4 flex-wrap">
          {icones.redesSociais.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                target="_blank"
                title={`Ícone com link para o site do ${item.nome}`}
                className="flex justify-center animacaoClick"
              >
                <h3 className="">{item.nome}</h3>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
