import { Link } from "react-router-dom";

import developerIcon from "/src/assets/images/vetor-developer.svg";
import developerProject from "/src/assets/images/foto-developerproject.webp";


export function DeveloperSide() {
    return (
        <section className="developer relative h-[calc(100vh-120px)] overflow-hidden">

            <div className="mx-auto h-full max-w-[1600px]">

                <div className="absolute top-10 left-1/2 z-45 -translate-x-[53%] whitespace-nowrap pointer-events-none">
                    <h3 className="developer text-2xl tracking-[0.2em] uppercase font-light">
                        DO CONCEITO AO CÓDIGO.
                    </h3>
                </div>


                <div className="grid h-full grid-cols-2">

                    <div className="flex flex-col justify-center items-start pl-12 xl:pr-20">
                        <div className="flex flex-col items-center">
                            <span className="mb-8 text-[21px]">
                                Código • Performance • Experiência
                            </span>

                            <img
                                src={developerProject}
                                alt="Projeto"
                                className="w-[330px] opacity-60"
                            />
                        </div>
                    </div>

                    <div
                        className="flex flex-col justify-center items-end pr-15 xl:pl-20">
                        <img
                            src={developerIcon}
                            alt="Designer"
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
                            Criando experiências do conceito ao código.
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