import { Link } from "react-router-dom";

import developerIcon from "/src/assets/images/vetor-developer.svg";
import developerProject from "/src/assets/images/foto-developerproject.webp";
import type { DeveloperSideProps } from "../../types/types";
import portraitDeveloper from "/src/assets/images/foto-developer.webp";
import { Animated } from "../animations/Animated";



export function DeveloperSide({ position }: DeveloperSideProps) {
    return (
        <section
            className="developer absolute top-0 left-0 w-full h-[calc(100vh-100px)] overflow-hidden "
            style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
            <div className="mx-auto h-full max-w-full ">
                <Animated animation="slideRight">
                    <div className="absolute top-10 left-1/2 z-45 -translate-x-[53%] whitespace-nowrap pointer-events-none">
                        <h3 className="developer text-2xl tracking-[0.2em] uppercase font-light 4xl:text-3xl">
                            DO CONCEITO AO CÓDIGO
                        </h3>
                    </div>
                </Animated>


                <div className="absolute bottom-0 left-1/2 -translate-x-[51%] z-[-1] pointer-events-none">
                    <div className="relative">
                        <Animated animation="fadeUp">
                            <img
                                src={portraitDeveloper}
                                alt="Retrato Developer"
                                className="h-[70vh]"
                            />
                        </Animated>
                    </div>
                </div>

                <div className="grid h-full w-full grid-cols-2 items-center">

                    <div className="flex flex-col  pl-12 xl:pl-20 ">

                        <span className="mb-5 text-[21px] 4xl:mb-10">
                            Código • Performance • Experiência
                        </span>

                        <img
                            src={developerProject}
                            alt="Projeto de desenvolvedor"
                            className="w-[330px]"
                        />

                    </div>

                    <Animated animation="slideRight">
                        <div className="flex flex-col pr-12 xl:pr-20 items-end">

                            <img
                                src={developerIcon}
                                alt="Developer ícone"
                                className="mb-5 w-36 4xl:w-46 4xl:mb-10"
                            />

                            <h1 className="mb-5 text-6xl 4xl:text-7xl 4xl:mb-10">
                                Developer
                            </h1>

                            <h2 className="mb-5 text-2xl leading-tight text-end 4xl:text-[42px] 4xl:mb-10">
                                Código que transforma
                                <br />
                                ideias em realidade.
                            </h2>

                            <p className="mb-5 w-[300px] text-[18px] leading-8 4xl:text-[22px] 4xl:w-[400px] text-end 4xl:mb-10">
                                Transformo ideias em aplicações  modernas, funcionais e escaláveis.
                            </p>

                            <ul>
                                <li className="theme-button text-[20px] 4xl:text-2xl">
                                    <Link to="/projects">Projetos ↖</Link>
                                </li>
                            </ul>

                        </div>
                    </Animated>
                </div>
            </div>
        </section>
    );
}