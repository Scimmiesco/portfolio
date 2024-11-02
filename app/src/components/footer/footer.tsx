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
    <section className="container-padrao  flex flex-row text-center items-center justify-between rounded-b-3xl rounded-t-md">
      <a className="linkSeta dark:text-white" href="mailto:p.almeida@live.com ">
        <div className="flex justify-center text-center items-center">
          <i className="fi fi-br-envelope text-center text-4xl animacaoClick"></i>
          <p className="text-lg font-semibold px-1 whitespace-nowrap text-center ">
            P.ALMEIDA@LIVE.COM
          </p>
        </div>
      </a>
      <nav>
        <ul className="flex flex-row gap-4">
          {icones.redesSociais.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                target="_blank"
                title={`Ícone com link para o site do ${item.nome}`}
                className="flex justify-center animacaoClick"
              >
                <i
                  className={`${item.classe} text-4xl text-dark dark:text-white `}
                ></i>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
