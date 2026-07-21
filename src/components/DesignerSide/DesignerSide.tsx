import { Link } from "react-router-dom";

import designerIcon from "/src/assets/images/vetor-designer.svg";
import designerProject from "/src/assets/images/foto-designerproject.webp";
import portraitDesigner from "/src/assets/images/foto-designer.webp";
import type { DesignerSideProps } from "../../types/types";



export function DesignerSide({ position }: DesignerSideProps) {
    return (
        <section
            className="designer absolute top-0 left-0 w-full h-[calc(100vh-120px)] overflow-hidden justify-between"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >


            <div className="mx-auto h-full max-w-full">
                <div className="absolute top-10 left-1/2 z-45 -translate-x-[53%] whitespace-nowrap pointer-events-none">
                    <h3 className="designer text-2xl tracking-[0.2em] uppercase font-light">
                        DO CONCEITO AO CÓDIGO.
                    </h3>
                </div>

                <div
                    className="absolute bottom-0 left-1/2 -translate-x-[51%] z-[-1] pointer-events-none">

                    <div className="relative ">

                        <img
                            src={portraitDesigner}
                            alt="Retrato Designer"
                            className="h-[70vh]" />
                    </div>
                </div>


                <div className="grid h-full w-full grid-cols-2">


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