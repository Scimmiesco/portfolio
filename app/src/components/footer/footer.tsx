import React from "react";
import Image from "next/image";

export default function Footer() {
  const icones = {
    redesSociais: [
      {
        id: 1,
        nome: "Linkedin",
        link: "https://www.linkedin.com",
        sources: {
          default: "/redes_sociais/linkedin.png",
          dark: "/redes_sociais/linkedin_dark_mode.png",
        },
        alt: "Ícone do Linkedin",
      },
      {
        id: 2,
        nome: "Github",
        link: "https://www.github.com",
        sources: {
          default: "/redes_sociais/github.png",
          dark: "/redes_sociais/github_dark_mode.png",
        },
        alt: "Ícone do Github",
      },
      {
        id: 3,
        nome: "Instagram",
        link: "https://www.instagram.com",
        sources: {
          default: "/redes_sociais/instagram.png",
          dark: "/redes_sociais/instagram_dark_mode.png",
        },
        alt: "Ícone do Instagram",
      },
    ],
  };

  return (
    <section className="relative flex flex-row flex-1 justify-between text-center items-center border-2 border-white dark:bg-dark bg-white gap-2 p-4 rounded-3xl w-full">
      <a className="linkSeta " href="mailto:p.almeida@live.com">
        <div className="flex justify-center text-center items-center">
          <span className="material-symbols-rounded text-center text-[44px]">
            mail
          </span>
          <p className="text-lg px-1 whitespace-nowrap text-center ">
            P.ALMEIDA@LIVE.COM
          </p>
        </div>
      </a>
      <nav>
        <ul className="flex flex-row">
          {icones.redesSociais.map((item) => (
            <li key={item.id} className="m-2">
              <a
                href={item.link}
                target="_blank"
                title={item.nome}
                className="flex justify-center"
              >
                <Image
                  className="bg-center bg-cover active:transform active:scale-100 hover:transform hover:scale-125 transition-transform ease-in-out duration-300"
                  src={item.sources.default}
                  width={44}
                  height={44}
                  alt={item.alt}
                ></Image>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
