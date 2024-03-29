"use client";
import { useState } from "react";
import SwitchTema from "../switcher_tema/switch_tema";
import "./projetos.css";
import InfoProjetos from "../infoProjetos/info_projeto";
import { FiraCode } from "@/app/ui/fonts";
import Image from "next/image";

export default function Projetos() {
  var linkMenuProjeto = [
    {
      idProjeto: 1,
      botoes: [
        {
          id: 1,
          nome: "open_in_new",
          link: "https://areainsted.vercel.app/login",
        },
        {
          id: 2,
          nome: "folder_data",
          link: "https://github.com/Scimmiesco/portfolio",
        },
      ],
    },
    {
      idProjeto: 2,
      botoes: [
        {
          id: 1,
          nome: "open_in_new",
          link: "https://webapi20230927142946.azurewebsites.net/swagger/index.html",
        },
        {
          id: 2,
          nome: "folder_data",
          link: "https://dev.azure.com/palmeida0253/Area%20Insted/_git/Backend",
        },
      ],
    },
  ];
  const projetos: Project[] = [
    {
      id: 1,
      modalInfo: {
        title: "Área Insted FRONTEND",
        frameworks: {
          items: [{ id: 1, name: "Angular 15.2", link: "https://angular.io/" }],
        },
        libraries: {
          items: [
            {
              id: 1,
              name: "Angular Material",
              link: "https://v15.material.angular.io/",
            },
            {
              id: 2,
              name: "SwiperJS",
              link: "https://swiperjs.com/swiper-api",
            },
            {
              id: 3,
              name: "Crypto-Js",
              link: "https://www.npmjs.com/package/crypto-js",
            },
            {
              id: 4,
              name: "JWT-Decode",
              link: "https://www.npmjs.com/package/jwt-decode",
            },
            { id: 5, name: "Ngrx-Store", link: "https://ngrx.io/guide/store" },
          ],
        },
        deployments: {
          items: [{ id: 1, name: "Vercel", link: "https://vercel.com/" }],
        },
      },
      images: {
        default: [
          { id: 1, url: "/areaInsted_front/area_insted_light.png", alt: "alt" },
          { id: 2, url: "/areaInsted_front/area_home_light.png", alt: "alt" },
          { id: 3, url: "/areaInsted_front/area_perfil_light.png", alt: "alt" },
        ],
        dark: [
          { id: 1, url: "/areaInsted_front/area_insted_dark.png", alt: "alt" },
          { id: 2, url: "/areaInsted_front/area_home_dark.png", alt: "alt" },
          { id: 3, url: "/areaInsted_front/area_perfil_dark.png", alt: "alt" },
        ],
      },
      resume: {
        paragraph: [
          "No contexto do Projeto Integrador da faculdade Insted, o desenvolvimento do Ambiente Virtual de Aprendizagem (AVA) ao longo de diversos semestres culmina em uma conclusão abrangente. Ao enfocar o frontend, destaca-se a escolha da utilização do Angular com Typescript para a implementação da interface de usuário. Essa decisão foi motivada pela robustez, modularidade e facilidade de manutenção oferecidas pelo Angular, juntamente com os benefícios adicionais de tipagem estática proporcionados pelo Typescript, que contribuem para um desenvolvimento mais seguro e eficiente.",
          " No que diz respeito ao deploy, o serviço do frontend foi implantado utilizando os recursos da plataforma Vercel. Esta escolha se justifica pela simplicidade, agilidade e facilidade de uso oferecidas pela Vercel, proporcionando uma hospedagem rápida e confiável para o frontend Angular do AVA. O uso dessa plataforma agrega eficiência ao processo de deploy, garantindo uma entrega contínua e uma experiência de usuário otimizada para os alunos durante a interação com o sistema.",
        ],
      },
    },
    {
      id: 2,
      modalInfo: {
        title: "Área Insted BACKEND",
        frameworks: {
          items: [
            { id: 1, name: ".NET Framework 6.0", link: "https://angular.io/" },
          ],
        },
        libraries: {
          items: [
            {
              id: 1,
              name: "Azure Identity",
              link: "https://learn.microsoft.com/en-us/dotnet/api/overview/azure/identity-readme?view=azure-dotnet",
            },
            {
              id: 2,
              name: "Azure Key Vault",
              link: "https://learn.microsoft.com/pt-br/aspnet/core/security/key-vault-configuration?view=aspnetcore-8.0",
            },
            {
              id: 3,
              name: "Web API Core",
              link: "https://learn.microsoft.com/pt-br/aspnet/core/tutorials/first-web-api?view=aspnetcore-8.0&tabs=visual-studio",
            },
            {
              id: 4,
              name: "Entity Framework",
              link: "https://learn.microsoft.com/pt-br/aspnet/core/data/entity-framework-6?view=aspnetcore-8.0",
            },
            {
              id: 5,
              name: "NetCore Mailkit",
              link: "https://www.nuget.org/packages/NETCore.MailKit/",
            },
          ],
        },
        deployments: {
          items: [
            {
              id: 1,
              name: "Azure Websites",
              link: "https://azure.microsoft.com/en-us/products/app-service/web",
            },
          ],
        },
      },
      images: {
        default: [
          { id: 1, url: "/areaInsted_back/swagger_metodos.png", alt: "alt" },
          { id: 2, url: "/areaInsted_back/swagger_metodos.png", alt: "alt" },
          { id: 3, url: "/areaInsted_back/swagger_metodos.png", alt: "alt" },
        ],
      },
      resume: {
        paragraph: [
          "Quanto ao backend, o projeto concentra-se na implementação de uma Web API integrada com o SQL Server. Essa abordagem utiliza solicitações HTTP para fornecer informações dinâmicas ao frontend, visando a eficiente gestão de dados, garantia de segurança e integridade das informações armazenadas no SQL Server, além de oferecer suporte eficaz às operações educacionais.",
          "É relevante mencionar que o serviço da API foi implantado utilizando os recursos da plataforma Azure, integrando-se ao banco de dados. Essa estratégia de deploy na nuvem amplia a escalabilidade, confiabilidade e acessibilidade do sistema, contribuindo para uma experiência completa e integrada aos usuários finais por meio de interações HTTP entre o frontend e o backend.",
        ],
      },
    },
  ];
  const [projetoClaro, setProjetoClaro] = useState<boolean>(true);
  const [resumoExpandido, setResumoExpandido] = useState<boolean>(false);

  const handleResumoExpandido = () => {
    setResumoExpandido(!resumoExpandido);
  };

  const handleDarkModeToggle = (isChecked: boolean) => {
    setProjetoClaro(isChecked);
  };

  const [indexProjeto, setIndexProjeto] = useState<number>(0);

  function proximoProjeto() {
    if (indexProjeto >= projetos.length - 1) {
      setIndexProjeto(0);
    } else {
      setIndexProjeto(indexProjeto + 1);
    }
  }

  function projetoAnterior() {
    if (indexProjeto === 0) {
      setIndexProjeto(projetos.length - 1);
    } else {
      setIndexProjeto(indexProjeto - 1);
    }
  }

  return (
    <section className=" relative border-2 border-white dark:bg-dark bg-white grid grid-rows-10 grid-cols-9 grid-flow-row gap-2 p-4 rounded-3xl min-h-[75vh]  w-full justify-center">
      <div className="grid items-center row-span-2 tablet:row-span-1 col-span-5 grid-rows-subgrid tablet:grid-cols-subgrid">
        <h2 className="text-dark text-center tablet:text-5xl text-3xl dark:text-white row-start-1 row-span-1 col-span-4 ">
          PROJETOS
        </h2>
        <div className="row-start-2 row-span-1 tablet:col-span-1 text-center">
          <span
            onClick={projetoAnterior}
            className="active:transform active:scale-100 hover:transform hover:scale-125 transition-transform ease-in-out duration-300 text-dark dark:text-white text-center material-symbols-rounded text-8xl"
          >
            chevron_left
          </span>
          <span
            onClick={proximoProjeto}
            className="active:transform active:scale-100 hover:transform hover:scale-125 transition-transform ease-in-out duration-300 text-dark dark:text-white text-center material-symbols-rounded text-8xl "
          >
            chevron_right
          </span>
        </div>
      </div>
      <div className="flex place-items-end justify-end row-span-1 col-span-4 items-end gap-2 my-auto">
        {projetos[indexProjeto].images.dark != null && (
          <div className="my-auto">
            <SwitchTema
              onToggle={handleDarkModeToggle}
              iconePadrao={projetoClaro ? "light" : "dark"}
              idPrefix="switch_projeto_1"
            ></SwitchTema>
          </div>
        )}
        {linkMenuProjeto.map(
          (projeto) =>
            projeto.idProjeto === projetos[indexProjeto].id &&
            projeto.botoes.map((botao) => (
              <a
                key={botao.id}
                target="_blank"
                href={botao.link}
                className="my-auto cursor-none"
              >
                <div
                  key={botao.id}
                  className="w-10 h-10 bg-white group dark:bg-dark border-2 hover:bg-black dark:border-white border-dark rounded-full flex items-center p-1"
                >
                  <span className="material-symbols-rounded text-dark group-hover:text-white dark:text-white text-center m-auto">
                    {botao.nome}
                  </span>
                </div>
              </a>
            ))
        )}
        <InfoProjetos projeto={projetos[indexProjeto]}></InfoProjetos>
      </div>

      {projetoClaro || projetos[indexProjeto].images.dark == null
        ? projetos[indexProjeto].images.default.map((item, index: number) => (
            <div
              key={index}
              className={` 
          ${index === 0 ? "row-start-3 row-span-8 col-span-5" : ""}
          relative card dois bg-insted_home_dark bg-start bg-cover bg-no-repeat row-span-9 col-span-2  rounded-3xl`}
            >
              <Image
                src={item.url}
                fill
                alt={item.alt}
                style={{
                  borderRadius: "24px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              ></Image>
            </div>
          ))
        : projetoClaro == false &&
          projetos[indexProjeto].images.dark != null &&
          projetos[indexProjeto].images.dark?.map((item, index: number) => (
            <div
              key={index}
              className={` 
          ${index === 0 ? "row-start-3 row-span-8 col-span-5" : ""}
          relative card dois bg-insted_home_dark bg-start bg-cover bg-no-repeat row-span-9 col-span-2  rounded-3xl`}
            >
              <Image
                src={item.url}
                fill
                alt={item.alt}
                style={{
                  borderRadius: "24px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              ></Image>
            </div>
          ))}

      <div
        style={
          resumoExpandido
            ? { maxHeight: "44rem", transition: "max-height 0.5s ease-out" }
            : { maxHeight: "11rem", transition: "max-height 0.5s ease-in-out" }
        }
        className={`
      ${resumoExpandido ? "max-h-fit pb-6" : "max-h-44 "}
      resumoExpandido relative grid col-span-9 overflow-clip `}
      >
        {projetos[indexProjeto].resume.paragraph.map((item, index) => (
          <p
            key={index}
            className={` ${FiraCode.className} text-xl text-justify p-2 text-dark dark:text-white `}
          >
            {item}
          </p>
        ))}

        <div
          className={`
        ${resumoExpandido ? "hidden" : "dark:shadow-dark shadow-white"}
        absolute z-30 w-full h-full shadow-3xl `}
        ></div>
      </div>
      <div
        onClick={handleResumoExpandido}
        className={`${resumoExpandido ? "" : ""}
        z-30 absolute bottom-0 left-1/2 mb-1 w-10 h-10 bg-white group dark:bg-dark border-2 hover:bg-black dark:border-white border-dark rounded-full flex items-center p-1      
        `}
      >
        <span className="material-symbols-rounded text-dark group-hover:text-white dark:text-white text-center m-auto">
          {resumoExpandido ? "arrow_drop_up" : "arrow_drop_down"}
        </span>
      </div>
    </section>
  );
}
