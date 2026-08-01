import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { Animated } from "../../components/animations/Animated";

export const Contact = () => {
    return (

            <main className="h-[calc(100vh-120px)] px-10">


                <section className="text-center py-4">

                    <Animated animation="fadeUp">
                        <h1 className="developer text-4xl uppercase tracking-[0.15em]">
                            Conte sua ideia!
                        </h1>
                    </Animated>



                </section>


                <section className="grid grid-cols-2 gap-15 mt-5">


                    <aside className="developer flex flex-col">
                        <Animated animation="slideLeft">
                            <h2 className="designer text-4xl 4xl:text-5xl 4xl:max-w-[700px]">
                                Soluções que fazem sentido.
                            </h2>

                            <p className="mt-3 max-w-[530px] leading-6 4xl:leading-8 4xl:text-[22px] 4xl:max-w-[600px]">
                                Se você busca unir estratégia, design e desenvolvimento em um único projeto, estou pronto para transformar sua ideia em uma experiência digital marcante.
                            </p>

                            <div className="mt-5 4xl:mt-10 space-y-3 w-40 4xl:w-60">

                                <a
                                    href="mailto:junior.oleandrobq@gmail.com"
                                    className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300 "
                                >
                                    <FiMail className="text-2xl 4xl:text-4xl" />

                                    <div>
                                        <h3 className="text-sm 4xl:text-2xl uppercase tracking-widest">
                                            E-mail
                                        </h3>


                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/5532984575340"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300 "
                                >
                                    <FaWhatsapp className="text-2xl 4xl:text-4xl" />

                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest 4xl:text-2xl">
                                            WhatsApp
                                        </h3>

                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/junior-oleandro/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300"
                                >
                                    <FiLinkedin className="text-2xl 4xl:text-4xl" />

                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest 4xl:text-2xl">
                                            LinkedIn
                                        </h3>

                                    </div>
                                </a>

                                <a
                                    href="https://github.com/Junior-OLeandro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300"
                                >
                                    <FiGithub className="text-2xl 4xl:text-4xl" />

                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest 4xl:text-2xl">
                                            GitHub
                                        </h3>

                                    </div>
                                </a>

                            </div>
                        </Animated>
                    </aside>


                    <Animated animation="slideRight">
                        <form
                            action="https://formspree.io/f/xbdnqdzj"
                            method="POST"
                            className="designer w-[400px] space-y-3 4xl:w-[600px] 4xl:text-2xl"
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
                                className="theme-button mt-3"
                            >
                                Enviar Mensagem →
                            </button>
                        </form>
                    </Animated>
                </section>

            </main>

    );
}
