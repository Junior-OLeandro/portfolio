import { Link } from "react-router-dom";

import designerIcon from "/src/assets/images/vetor-designer.svg";
import designerProject from "/src/assets/images/foto-designerproject.webp";


export function DesignerSide() {
    return (
        <section
            className=" designer relative h-[calc(100vh-120px)] overflow-hidden">
            
            <div className="mx-auto h-full max-w-[1600px]">
                <div className="absolute top-10 left-1/2 z-45 -translate-x-[53%] whitespace-nowrap pointer-events-none">
                    <h3 className="designer text-2xl tracking-[0.2em] uppercase font-light">
                        DO CONCEITO AO CÓDIGO.
                    </h3>
                </div>

                
                <div className="grid h-full grid-cols-2">

                    
                    <div className=" flex flex-col justify-center pl-12 xl:pl-20">
                        <img
                            src={designerIcon}
                            alt="Designer"
                            className="mb-8 w-36"
                        />

                        <h1 className="mb-6 text-7xl">
                            Designer
                        </h1>

                        <h2 className="mb-8 text-3xl leading-tight">
                            Criatividade que dá
                            <br />
                            forma às ideias.
                        </h2>

                        <p className="mb-10 w-72 text-lg leading-8">
                            Mais de 14 anos criando marcas,
                            interfaces e experiências que unem
                            estratégia e estética.
                        </p>

                        <ul>
                            <li className="theme-button">
                                <Link to="/projects">Projetos ↗</Link>
                            </li>
                        </ul>

                    </div>



                    <div className="flex flex-col justify-center items-end pr-12 xl:pr-20">
                        <span className="mb-8 text-2xl">
                            Identidade • Design • Criatividade
                        </span>

                        <img
                            src={designerProject}
                            alt="Projeto"
                            className="w-[420px] opacity-60"
                        />
                    </div>
                </div>
            </div>
            
        </section>
    );
}