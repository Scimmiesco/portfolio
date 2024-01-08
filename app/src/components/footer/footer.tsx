import React from "react";
import Image from "next/image";

export default function Footer() {
  const icones = {
    redesSociais: [
      {
        id: 1,
        nome: "Linkedin",
        link: "https://www.linkedin.com",
        iconSpan: "linkedin",
      },
      {
        id: 2,
        nome: "Twitter",
        link: "https://www.twitter.com",
        iconSpan: "twitter",
      },
      {
        id: 3,
        nome: "GitHub",
        link: "https://www.github.com",
        iconSpan: "github",
      },
    ],
  };

  return (
    <section className="relative border-2 border-white dark:bg-dark bg-white gap-2 p-4 rounded-3xl w-full justify-center">
      <p>teste</p>
      <nav>
        <ul>
          {icones.redesSociais.map((item) => (
            <li key={item.id}>
              <a href={item.link} target="_blank">
                <Image src={item.url} fill alt={item.alt}></Image>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
