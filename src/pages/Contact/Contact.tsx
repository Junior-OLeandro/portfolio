import { FiMail, FiLinkedin, FiGithub} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { PageTransition } from "../../components/ageTransition";

export const Contact = () => {
    return (
        <PageTransition>
        <main className="h-[calc(100vh-120px)] px-10">


            <section className="text-center py-4">

                <h1 className="developer text-4xl uppercase tracking-[0.15em]">
                    Conte sua ideia!
                </h1>

                

            </section>


            <section className="grid grid-cols-2 gap-15 mt-7">


                <aside className="developer flex flex-col">

                    <h2 className="designer text-4xl">
                        Soluções que fazem sentido.
                    </h2>

                    <p className="mt-3 max-w-[400px] leading-6">
                        Se você busca unir estratégia, design e desenvolvimento em um único projeto, estou pronto para transformar sua ideia em uma experiência digital marcante.
                    </p>

                    <div className="mt-7 space-y-5 w-40 ">

                        <a
                            href="mailto:junior.oleandrobq@gmail.com"
                            className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300 "
                        >
                            <FiMail className="text-2xl" />

                            <div>
                                <h3 className="text-sm uppercase tracking-widest">
                                    E-mail
                                </h3>

                                <p className="text-xl">
                                    
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://wa.me/5532984575340"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300 "
                        >
                            <FaWhatsapp className="text-2xl" />

                            <div>
                                <h3 className="text-sm uppercase tracking-widest">
                                    WhatsApp
                                </h3>

                                <p className="text-xl">
                                    
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/junior-oleandro/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300"
                        >
                            <FiLinkedin className="text-2xl " />

                            <div>
                                <h3 className="text-sm uppercase tracking-widest">
                                    LinkedIn
                                </h3>

                                <p className="text-xl">
                                    
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/Junior-OLeandro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300"
                        >
                            <FiGithub className="text-2xl" />

                            <div>
                                <h3 className="text-sm uppercase tracking-widest">
                                    GitHub
                                </h3>

                                <p className="text-xl">
                                    
                                </p>
                            </div>
                        </a>

                    </div>

                </aside>


                <form
    action="https://formspree.io/f/xbdnqdzj"
    method="POST"
    className="designer w-[400px] max-w-[450px] space-y-4"
>
    <input
        type="text"
        name="nome"
        placeholder="Nome"
        required
        className="w-full border-b bg-transparent py-4 outline-none placeholder:text-(--text-muted)"
    />

    <input
        type="text"
        name="contato"
        placeholder="Contato (e-mail ou telefone)"
        required
        className="w-full border-b bg-transparent py-4 outline-none placeholder:text-(--text-muted)"
    />

    <input
        type="text"
        name="assunto"
        placeholder="Assunto"
        required
        className="w-full border-b bg-transparent py-4 outline-none placeholder:text-(--text-muted)"
    />

    <textarea
        name="mensagem"
        placeholder="Mensagem"
        rows={5}
        required
        className="w-full border-b bg-transparent py-4 outline-none resize-none placeholder:text-(--text-muted)"
    />

    <button
        type="submit"
        className="theme-button mt-6"
    >
        Enviar Mensagem →
    </button>
</form>

            </section>

        </main>
        </PageTransition>
    );
}
