import { Link } from "react-router-dom";

import designerIcon from "/src/assets/images/vetor-designer.svg";
import designerProject from "/src/assets/images/foto-designerproject.webp";
import portraitDesigner from "/src/assets/images/foto-designer.webp";
import type { DesignerSideProps } from "../../types/types";
import { Animated } from "../animations/Animated";





export function DesignerSide({ position }: DesignerSideProps) {
    return (
        <section
            className="designer absolute top-0 left-0 w-full h-[calc(100vh-100px)] overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >


            <div className="mx-auto h-full max-w-full">

                    <Animated animation="slideLeft">
                <div className="absolute top-10 left-1/2 z-45 -translate-x-[53%] whitespace-nowrap pointer-events-none">
                        <h3 className="designer text-2xl tracking-[0.2em] uppercase font-light 4xl:text-3xl">
                            DO CONCEITO AO CÓDIGO
                        </h3>
                </div>
                    </Animated>



                <div
                    className="absolute bottom-0 left-1/2 -translate-x-[51%] z-[-1] pointer-events-none">

                    <div className="relative ">
                        <Animated animation="fadeUp">
                            <img
                                src={portraitDesigner}
                                alt="Retrato Designer"
                                className="h-[70vh]" />
                        </Animated>
                    </div>



                </div>



                <div className="grid h-full w-full grid-cols-2 items-center">


                    <Animated animation="slideLeft">
                        <div className=" flex flex-col  pl-12 xl:pl-20">
                            <img
                                src={designerIcon}
                                alt="Designer"
                                className="mb-4 w-30 4xl:w-40 4xl:mb-10"
                            />

                            <h1 className="mb-4 text-6xl 4xl:text-8xl 4xl:mb-10">
                                Designer
                            </h1>

                            <h2 className="mb-4 text-3xl 4xl:text-5xl leading-tight 4xl:mb-10">
                                Criatividade que dá
                                <br />
                                forma às ideias.
                            </h2>

                            <p className="mb-4 w-[300px] text-[18px] leading-8 4xl:text-[22px] 4xl:w-[350px] 4xl:mb-10">
                                Mais de 14 anos criando marcas,
                                interfaces e experiências que unem
                                estratégia e estética.
                            </p>

                            <ul>
                                <li className="theme-button text-[20px] 4xl:text-2xl">
                                    <Link to="/projects">Projetos ↗</Link>
                                </li>
                            </ul>


                        </div>

                    </Animated>


                    <div className="flex flex-col justify-center items-end pr-12 xl:pr-20">
                        <span className="mb-8 text-2xl">
                            Identidade • Design • Criatividade
                        </span>

                        <img
                            src={designerProject}
                            alt="Projeto"
                            className="w-[350px] 3xl:w-[400px] opacity-60"
                        />
                    </div>
                </div>
            </div>

        </section >
    );
}