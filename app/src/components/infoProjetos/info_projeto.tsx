import "./info_projeto.css";
import "../../../styles/tagAEffect.css";
import "../../../interfaces/IProjetos";
import { FiraCode } from "@/app/ui/fonts";

export default function InfoProjetos({ projeto }: { projeto: Project }) {

  return (
    <section className="relative text-center">
      <h2 className="hidden xl:block">
        INFO
      </h2>
        <div
          id="modal"
          className={`

           px-1 py-1 top-12 -left-56 xl:-left-full rounded-xl z-50 transition-all duration-300`}
        >
          <div>
            <nav
            >
              <ul className="flex flex-row justify-around flex-wrap desktop:flex-col">
                <li className="">
                  <h3 className="py-1 ">Framework</h3>
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
                  <h3 className="py-1">Bibliotecas</h3>
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
                    <h3 className="py-1">Implantação</h3>
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

    </section>
  );
}
