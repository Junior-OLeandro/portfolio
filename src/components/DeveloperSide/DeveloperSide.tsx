import { Link } from "react-router-dom";

import developerIcon from "/src/assets/images/vetor-developer.svg";
import developerProject from "/src/assets/images/foto-developerproject.webp";
import type { DeveloperSideProps } from "../../types/types";
import portraitDeveloper from "/src/assets/images/foto-developer.webp";


export function DeveloperSide({ position }: DeveloperSideProps) {
    return (
        <section
            className="developer absolute top-0 left-0 w-full h-[calc(100vh-100px)] overflow-hidden "
            style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
            <div className="mx-auto h-full max-w-full ">

                <div className="absolute top-10 left-1/2 z-45 -translate-x-[53%] whitespace-nowrap pointer-events-none">
                    <h3 className="developer text-2xl tracking-[0.2em] uppercase font-light">
                        DO CONCEITO AO CÓDIGO.
                    </h3>
                </div>


                <div className="absolute bottom-0 left-1/2 -translate-x-[51%] z-[-1] pointer-events-none">
                    <div className="relative">
                        <img
                            src={portraitDeveloper}
                            alt="Retrato Developer"
                            className="h-[70vh]"
                        />
                    </div>
                </div>

                <div className="grid h-full w-full grid-cols-2 items-center">


                    <div className="flex flex-col justify-center pl-12 xl:pl-20">
                        <span className="mb-8 text-[21px]">
                            Código • Performance • Experiência
                        </span>

                        <img
                            src={developerProject}
                            alt="Projeto"
                            className="w-[330px]"
                        />
                    </div>


                    <div className="flex flex-col items-end pr-12 xl:pr-20 ">
                        <img
                            src={developerIcon}
                            alt="Developer"
                            className="mb-8 w-36"
                        />

                        <h1 className="mb-6 text-6xl">
                            Developer
                        </h1>

                        <h2 className="mb-8 text-2xl leading-tight text-end">
                            Código que transforma
                            <br />
                            ideias em realidade.
                        </h2>

                        <p className="mb-10 w-72 text-lg leading-8 text-end">
                            Transformo ideias em aplicações  modernas, funcionais e escaláveis.
                        </p>

                        <ul>
                            <li className="theme-button">
                                <Link to="/projects">Projetos ↖</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
}