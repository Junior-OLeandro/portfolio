import { Link } from "react-router-dom";
import { Animated } from "../../../components/animations/Animated";
import portraitMobile from "..//..//..//assets/images/foto.webp"
import designerIcon from "/src/assets/images/vetor-designer.svg";
import developerIcon from "/src/assets/images/vetor-developer.svg";
import { timeline } from "../../../constants/timeline";
import { useState } from "react";
import { ChevronDown } from "lucide-react";


import { projects } from "../../Projects/ProjectCard/Project";
import { ProjectCard } from "../../Projects/ProjectCard/ProjectCard";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";



export function MobileHome() {
    return (

        <main className="overflow-x-hidden w-full">
            <header>
                <Animated animation="fadeUp">
                    <div className="my-3 align-middle z-45 whitespace-nowrap pointer-events-none">
                        <h3 className="text-2xl tracking-[0.1em] uppercase font-medium text-center bg-gradient-to-t from-[var(--developer-primary)] to-[var(--designer-primary)] bg-clip-text text-transparent">
                            DO CONCEITO <br />
                            AO CÓDIGO
                        </h3>
                    </div>
                </Animated>
            </header>

            <section className="relative h-[55vh] min-h-[320px] max-h-[650px] overflow-hidden">

                <div className="absolute inset-0 pointer-events-none items-end">

                    <Animated animation="slideLeft">
                        <div
                            className=" absolute top-15 left-[clamp(16px,10vw,80px)] flex flex-col items-center gap-3"
                        >
                            <img
                                src={designerIcon}
                                alt="Designer"
                                className=" w-[clamp(32px,15vw,106px)] h-auto"
                            />

                            <span
                                className=" text-[clamp(0.7rem,3vw,1.5rem)] font-bold uppercase tracking-[0.15em] text-[var(--designer-primary)]"
                            >
                                Designer
                            </span>
                        </div>
                    </Animated>

                    <Animated animation="slideRight">
                        <div
                            className=" absolute top-15 right-[clamp(16px,10vw,80px)] flex flex-col items-center gap-3"
                        >
                            <img
                                src={developerIcon}
                                alt="Developer"
                                className="w-[clamp(32px,15vw,106px)] h-auto"
                            />

                            <span
                                className=" text-[clamp(0.7rem,3vw,1.5rem)] font-bold uppercase tracking-[0.1em] text-[var(--developer-primary)]"
                            >
                                Developer
                            </span>
                        </div>
                    </Animated>

                </div>
                <div className="absolute inset-0">
                    <Animated animation="fadeUp">
                        <img
                            src={portraitMobile}
                            alt="Retrato Junior Oliveira"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[75%] w-auto max-w-none object-contain select-none pointer-events-none"
                        />
                    </Animated>
                </div>
                <div
                    className="absolute bottom-0 left-0 h-[2px] w-full"
                    style={{
                        background:
                            "linear-gradient(90deg, var(--designer-primary), var(--developer-primary))",
                    }}
                />

            </section>

            <section>
                <div className="text-center ">
                    <Animated animation="fadeUp">
                        <h1 className="text-2xl tracking-[0.1em] uppercase font-medium text-center bg-gradient-to-t from-[var(--developer-primary)] to-[var(--designer-primary)] bg-clip-text text-transparent my-3">
                            UMA TRAJETÓRIA <br /> EM EVOLUÇÃO
                        </h1>
                    </Animated>

                </div>

                <section className="relative flex flex-1 h-full">


                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] rounded-full bg-gradient-to-b from-[var(--designer-primary)] to-[var(--developer-primary)]" />


                    <div
                        className="relative grid flex-1 "
                        style={{
                            gridTemplateRows: `repeat(${timeline.length}, minmax(0,1fr))`,
                        }}
                    >
                        {timeline.map((item) => {
                            const [openId, setOpenId] = useState<number | null>(null);
                            const isOpen = openId === item.id;

                            return (



                                <div
                                    key={item.id}
                                    className="grid grid-cols-[minmax(0,1fr)_20px_minmax(0,1fr)] items-center"
                                >



                                    <div className="designer flex justify-end ">

                                        {item.color === "designer" && (

                                            <div
                                                className="relative text-right pr-2 cursor-pointer"
                                                onClick={() => setOpenId(isOpen ? null : item.id)}
                                            >
                                                <Animated animation="fadeUp">
                                                    <span className="text-[13px]">
                                                        {item.year}
                                                    </span>

                                                    <div className="flex items-center ">


                                                        <h3 className="font-semibold text-[15px]">
                                                            {item.title}
                                                        </h3>
                                                        <ChevronDown
                                                            size={16}
                                                            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                                }`}
                                                        />
                                                    </div>

                                                </Animated>

                                                <div
                                                    className={` absolute  mt-4 w-[70vw] max-w-[250px] rounded-xl border-2 ${item.color === "designer" ? "border-[var(--designer-primary)]" : "border-[var(--developer-primary)]"} bg-black p-4 z-50 transition-all duration-300 ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                                                >
                                                    <p className="text-sm leading-6 text-center">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>

                                        )}

                                    </div>


                                    <div className="flex justify-center">

                                        <div
                                            className={`w-5 h-5 rounded-full border-4 border-black transition-all duration-300
        ${isOpen ? "scale-125" : ""}
        ${item.color === "designer"
                                                    ? "bg-[var(--designer-primary)]"
                                                    : "bg-[var(--developer-primary)]"
                                                }`}
                                        />

                                    </div>


                                    <div className="developer flex ">
                                        {item.color === "developer" && (
                                            <div
                                                className="relative inline-block pl-2 cursor-pointer"
                                                onClick={() => setOpenId(isOpen ? null : item.id)}
                                            >
                                                <Animated animation="fadeUp">

                                                    <span className="text-[13px]">
                                                        {item.year}
                                                    </span>


                                                    <div className="flex  items-center ">

                                                        <ChevronDown
                                                            size={16}
                                                            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                                }`}
                                                        />
                                                        <h3 className="font-semibold text-[15px]">
                                                            {item.title}
                                                        </h3>

                                                    </div>
                                                </Animated>

                                                <div
                                                    className={` absolute -translate-x-1/2 mt-4 w-[70vw] max-w-[250px] rounded-xl border-2 ${item.color === "developer" ? "border-[var(--developer-primary)]" : "border-[var(--designer-primary)]"} bg-black p-4 z-50 transition-all duration-300 ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                                                >
                                                    <p className="text-sm leading-6 text-center">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </section>
            </section>




            <section className="mx-auto px-5 ">

                <section className="designer flex justify-center mx-3 my-4">
                    <Animated animation="fadeUp">
                        <h2 className="font-bold text-center text-[15px]">
                            Alguns dos trabalhos que desenvolvi unindo estratégia,
                            design e tecnologia.
                        </h2>
                    </Animated>
                </section>

                <section className="h-full projects-grid-mobile">
                    {projects.map((project) => (
                        <Animated
                            key={project.id}
                            animation={project.animation}
                            className={`project ${project.size} ${project.category}`}
                        >
                            <ProjectCard project={project} />
                        </Animated>
                    ))}
                </section>

            </section>


            <section className="px-5 flex flex-col items-center">

                <Animated animation="fadeUp">
                    <section className="text-center py-4">


                        <h1 className="developer text-4xl uppercase tracking-[0.1em]">
                            Conte sua ideia!
                        </h1>




                    </section>
                </Animated>

                <section className="grid text-center gap-15  ">
                    <Animated animation="fadeUp">

                        <div className="developer ">

                            <h2 className="designer text-3xl ">
                                Soluções que fazem sentido.
                            </h2>

                            <p className="mt-3 leading-6">
                                Se você busca unir estratégia, design e desenvolvimento em um único projeto, estou pronto para transformar sua ideia em uma experiência digital marcante.
                            </p>

                            <div className="mt-5 mx-3 grid grid-cols-2">

                                <a
                                    href="mailto:junior.oleandrobq@gmail.com"
                                    className="flex items-center gap-4 rounded-md p-4 transition-all duration-300 "
                                >
                                    <FiMail className="text-2xl " />

                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest">
                                            E-mail
                                        </h3>


                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/5532984575340"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 rounded-md p-4 transition-all duration-300 "
                                >
                                    <FaWhatsapp className="text-2xl l" />

                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest">
                                            WhatsApp
                                        </h3>

                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/junior-oleandro/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 rounded-md p-4 transition-all duration-300"
                                >
                                    <FiLinkedin className="text-2xl " />

                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest ">
                                            LinkedIn
                                        </h3>

                                    </div>
                                </a>

                                <a
                                    href="https://github.com/Junior-OLeandro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 rounded-md p-4 transition-all duration-300"
                                >
                                    <FiGithub className="text-2xl " />

                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest ">
                                            GitHub
                                        </h3>

                                    </div>
                                </a>

                            </div>

                        </div>
                    </Animated>

                    <Animated animation="slideRight">

<h2 className="developer text-3xl mb-5">
                                Envie sua mensagem
                            </h2>

                        <form
                            action="https://formspree.io/f/xbdnqdzj"
                            method="POST"
                            className="designer w-full space-y-3 "
                        >
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome"
                                required
                                className="w-full border-b bg-transparent py-3 outline-none placeholder:text-(--text-muted)"
                            />

                            <input
                                type="text"
                                name="contato"
                                placeholder="Contato (e-mail ou telefone)"
                                required
                                className="w-full border-b bg-transparent py-3 outline-none placeholder:text-(--text-muted)"
                            />

                            <input
                                type="text"
                                name="assunto"
                                placeholder="Assunto"
                                required
                                className="w-full border-b bg-transparent py-3 outline-none placeholder:text-(--text-muted)"
                            />

                            <textarea
                                name="mensagem"
                                placeholder="Mensagem"
                                rows={5}
                                required
                                className="w-full border-b bg-transparent py-3 outline-none resize-none placeholder:text-(--text-muted)"
                            />

                            <button
                                type="submit"
                                className="theme-button mt-3 mb-10"
                            >
                                Enviar Mensagem →
                            </button>
                        </form>
                    </Animated>
                </section>

            </section>



        </main>
    );
}