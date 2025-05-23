"use client";

import {useState} from "react";
import "./projetos.css";
import InfoProjetos from "../infoProjetos/info_projeto";
import Image from "next/image";

export default function Projetos() {
    const projetos: Project[] = [
        {
            id: 1,
            modalInfo: {
                title: "Área Insted",
                frameworks: {
                    items: [{id: 1, name: "Angular 15", link: "https://angular.io/"}],
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
                        {id: 5, name: "Ngrx-Store", link: "https://ngrx.io/guide/store"},
                    ],
                },
                deployments: {
                    items: [{id: 1, name: "Vercel", link: "https://vercel.com/"}],
                },
            },
            images: [
                {id: 1, url: "/projetos/areaInsted/desktop_ava.png", alt: "alt"},
                {id: 2, url: "/projetos/areaInsted/mobile_ava.png", alt: "alt"},
            ],
            resume: {
                paragraph: [
                    "No Projeto Integrador da faculdade Insted, o desenvolvimento do Ambiente Virtual de Aprendizagem (AVA) culmina com foco no frontend, implementado em Angular com TypeScript. Essa escolha se deve à robustez, modularidade e manutenção facilitada do Angular, além da segurança e eficiência da tipagem estática do TypeScript. ",
                    "O deploy do frontend foi realizado na plataforma Vercel, escolhida pela sua simplicidade e agilidade, garantindo uma hospedagem rápida e confiável, melhorando a experiência dos alunos ao utilizar o sistema.",
                ],
            },
            link: "https://dev.azure.com/palmeida0253/Area%20Insted/_git/Backend",
        },
        {
            id: 2,
            modalInfo: {
                title: "Área Insted",
                frameworks: {
                    items: [
                        {id: 1, name: ".NET Framework 6.0", link: "https://angular.io/"},
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
            images: [
                {id: 1, url: "/projetos/areaInsted/desktop_ava.png", alt: "alt"},
                {id: 2, url: "/projetos/areaInsted/mobile_ava.png", alt: "alt"},
            ],
            resume: {
                paragraph: [
                    "O backend foi implementado como uma Web API integrada ao SQL Server, utilizando solicitações HTTP para fornecer dados dinâmicos ao frontend, garantindo gestão eficiente, segurança e integridade das informações.",
                    "A API foi implantada na plataforma Azure, ampliando a escalabilidade, confiabilidade e acessibilidade do sistema, proporcionando uma experiência integrada e eficiente para os usuários.",
                ],
            },
            link: "https://webapi20230927142946.azurewebsites.net/swagger/index.html",
        },
        {
            id: 3,
            modalInfo: {
                title: "Elaine Oliveira",
                frameworks: {
                    items: [
                        {
                            id: 1,
                            name: "Angular 18",
                            link: "https://angular.io/",
                        },
                        {
                            id: 2,
                            name: "NodeJS Express",
                            link: "https://expressjs.com/",
                        },
                    ],
                },
                libraries: {
                    items: [
                        {
                            id: 1,
                            name: "Angular Material",
                            link: "https://v15.material.angular.io/",
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
                    ],
                },
                deployments: {
                    items: [
                        {
                            id: 1,
                            name: "VPS Webtropia",
                            link: "https://www.webtropia.com/",
                        },
                    ],
                },
            },
            images: [
                {id: 1, url: "/projetos/lpElaine/desktop_elaine.png", alt: "alt"},
                {id: 1, url: "/projetos/lpElaine/mobile_elaine.png", alt: "alt"},
            ],
            resume: {
                paragraph: [
                    "Projeto implementado em VPS própria, utilizando containers e a nova estrutura do Angular 18 com foco em componentização.",
                    "Backend desenvolvido com ExpressJS para armazenar informações de usuários e produtos.",
                    "Habilidades aplicadas na construção da landing page incluem integração com Kiwify para gestão de pagamentos, otimização de SEO para melhorar a visibilidade nos motores de busca, design responsivo com Tailwind CSS, e uso de práticas de marketing digital para conversão de leads.",
                    "Foi realizado além da parte da LP a tela de login, com recuperação de senha (com envio de e-mail). Acesso de administrador e cliente. E parte de adição, exclusão e edição de registros. ",
                ],
            },
            link: "https://www.lojaelaineoliveira.com.br/",
        },
        {
            id: 4,
            modalInfo: {
                title: "Santos ADV",
                frameworks: {
                    items: [
                        {
                            id: 1,
                            name: "Angular 18",
                            link: "https://angular.io/",
                        },
                    ],
                },
                libraries: {
                    items: [
                        {
                            id: 1,
                            name: "Angular Material",
                            link: "https://v18.material.angular.io/",
                        },
                    ],
                },
                deployments: {
                    items: [
                        {
                            id: 1,
                            name: "Vercel",
                            link: "https://www.vercel.com/",
                        },
                    ],
                },
            },
            images: [
                {
                    id: 1,
                    url: "/projetos/souzaFernandes/desktop_souza.png",
                    alt: "alt",
                },
                {id: 1, url: "/projetos/souzaFernandes/mobile_souza.png", alt: "alt"},
            ],
            resume: {
                paragraph: [
                    "Desenvolvi um site profissional para o escritório de advocacia Santos Advocacia, utilizando Angular 18, focado em uma arquitetura moderna e componentizada.",
                    "A interface do site foi projetada com design responsivo utilizando Tailwind CSS, garantindo uma experiência visual atraente e funcional em todos os dispositivos.",
                    "Para garantir a visibilidade do site nos motores de busca, foram aplicadas técnicas de otimização SEO, complementadas por práticas de marketing digital para atração e retenção de clientes.",
                ],
            },
            link: "https://www.lojaelaineoliveira.com.br/",
        },
        {
            id: 4,
            modalInfo: {
                title: "FotonSíntese",
                frameworks: {
                    items: [
                        {
                            id: 1,
                            name: "Angular 19",
                            link: "https://angular.io/",
                        },
                    ],
                },
                libraries: {
                    items: [
                        {
                            id: 1,
                            name: "Angular Material",
                            link: "https://v15.material.angular.io/",
                        },
                    ],
                },
                deployments: {
                    items: [
                        {
                            id: 1,
                            name: "Vercel",
                            link: "https://www.vercel.com/",
                        },
                    ],
                },
            },
            images: [
                {
                    id: 1,
                    url: "/projetos/souzaFernandes/desktop_souza.png",
                    alt: "alt",
                },
                {id: 1, url: "/projetos/souzaFernandes/mobile_souza.png", alt: "alt"},
            ],
            resume: {
                paragraph: [
                    "Desenvolvi a presença digital da FotonSíntese, uma empresa de energia solar que combina inovação e sustentabilidade, com uma identidade visual moderna e cativante.",
                    "A landing page foi concebida para refletir a visão da empresa: democratizar o acesso à energia renovável de forma confiável e acessível. O design da interface priorizou simplicidade e elegância, destacando a modernidade e o dinamismo que representam a FotonSíntese.Além da estrutura do site, projetei a logomarca, integrando o nome da empresa a um estilo minimalista e contemporâneo. As cores vibrantes foram escolhidas estrategicamente para transmitir energia, positividade e confiança, alinhando-se aos valores da marca.",
                    "A interface do site foi projetada com design responsivo utilizando Tailwind CSS.",
                    "Para garantir a visibilidade do site nos motores de busca, foram aplicadas técnicas de otimização SEO, complementadas por práticas de marketing digital para atração e retenção de clientes.",
                ],
            },
            link: "https://www.lojaelaineoliveira.com.br/",
        },
    ];

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
        <section className="container-padrao dark:border-white border-dark border-[6px] border-solid relative">
            <div className="flex flex-row tablet:justify-start justify-center items-center pb-8 tablet:p-0">
                <h1 className="tituloNaBorda text-dark text-center  dark:text-white
                                !hidden tablet:!block absolute
                                !-top-[6px] !left-0 !translate-x-1/4 !-translate-y-1/2 bg-white px-8 py-4">
                    PROJETOS
                </h1>
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -top-[6px] px-12  dark:bg-dark bg-white py-4">
                    <h1 className="text-destaque dark:text-destaque w-full text-center text-nowrap">
                        {projetos[indexProjeto].modalInfo.title.toUpperCase()}
                    </h1>

          <span
              onClick={projetoAnterior}
              className="-left-7   !top-[16px]  absolute cursor-pointer animacaoClick text-dark dark:text-white text-center material-symbols-rounded text-7xl md:text-8xl"
          >
            chevron_left
          </span>
        <span
            onClick={proximoProjeto}
            className="-right-7 top-[16px]
             absolute cursor-pointer animacaoClick text-dark dark:text-white text-center material-symbols-rounded text-7xl md:text-8xl "
        >
            chevron_right
          </span>
                    </div>
                </div>

            <ul className="flex tablet:justify-end justify-center tablet:items-center gap-2 my-auto">
                <li>
                    <a
                        target="_blank"
                        href={projetos[indexProjeto].link}
                        className="my-auto"
                    >
                        <div className="group icone-padrao animacaoClick">
                            <i className="fi fi-sr-address-card groupHover-padrao"></i>
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href={projetos[indexProjeto].link}
                        className="my-auto"
                    >
                        <div className="group icone-padrao animacaoClick">
                            <i className="fi fi-sr-display-code groupHover-padrao"></i>
                        </div>
                    </a>
                </li>

            </ul>
            <div className="flex flex-col flex-grow relative">
                <div className="flex tablet:flex-row flex-col justify-center flex-wrap tablet:gap-2 gap-4">
                    {projetos[indexProjeto].images.map((item, index: number) => (

                        <div
                            key={index}
                            className={
                                "relative tablet:min-h-[50svh] min-h-[33vh] w-full" +
                                (index == 1 ? " tablet:w-1/5" : " tablet:w-1/2")
                            }
                        >
                            <Image
                                src={item.url}
                                fill
                                alt={item.alt}
                                className="object-contain tablet:object-left object-center"
                            ></Image>
                        </div>
                    ))}
                    <div className="hidden desktop:block border-[6px] border-solid rounded-sm w-1/6 min-w-fit min-h-[33vh] tablet:min-h-[50vh] border-dark dark:border-white absolute right-0 top-0">
                        <InfoProjetos projeto={projetos[indexProjeto]}/>
                </div>
                </div>
                <div className="min-h-fit p-2 ">
                    <div className="desktop:hidden block border-[6px] border-solid rounded-sm w-full min-w-fit min-h-[33vh] tablet:min-h-fit border-dark dark:border-white">
                        <InfoProjetos projeto={projetos[indexProjeto]}/>
                    </div>
                    {projetos[indexProjeto].resume.paragraph.map((item, index) => (
                        <p
                            key={index}
                            className={`text-xl text-pretty p-2 text-dark dark:text-white`}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
