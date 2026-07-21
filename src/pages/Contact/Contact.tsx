import {
    FiMail,
    FiPhone,
    FiLinkedin,
    FiGithub,
} from "react-icons/fi";

export const Contact = () => {
    return (
        <main className="h-[calc(100vh-120px)] px-10">


            <section className="text-center py-4">

                <h1 className="developer text-5xl uppercase tracking-[0.15em]">
                    Entre em Contato
                </h1>

                <h2 className="designer mt-3 text-xl tracking-[0.1em]">
                    Vamos tirar sua ideia do papel.
                </h2>

            </section>


            <section className="grid grid-cols-2 gap-15 mt-7">


                <aside className="developer flex flex-col">

                    <h2 className="text-4xl">
                        Vamos conversar?
                    </h2>

                    <p className="mt-3 max-w-[400px] leading-6">
                        Se você procura alguém para desenvolver um projeto,
                        criar uma identidade visual ou transformar uma ideia
                        em um produto digital, estou à disposição.
                    </p>

                    <div className="designer mt-7 space-y-2 w-120">

                        <a
                            href="mailto:junior.oleandrobq@gmail.com"
                            className="flex items-center gap-4 rounded-xl p-3 transition-all duration-300 "
                        >
                            <FiMail className="text-2xl" />

                            <div>
                                <h3 className="text-sm uppercase tracking-widest">
                                    E-mail
                                </h3>

                                <p className="text-xl">
                                    junior.oleandrobq@gmail.com
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://wa.me/5532984575340"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 rounded-xl p-3 transition-all duration-300 "
                        >
                            <FiPhone className="text-2xl" />

                            <div>
                                <h3 className="text-sm uppercase tracking-widest">
                                    WhatsApp
                                </h3>

                                <p className="text-xl">
                                    (32) 98457-5340
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/junior-oleandro/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 rounded-xl p-3 transition-all duration-300"
                        >
                            <FiLinkedin className="text-2xl " />

                            <div>
                                <h3 className="text-sm uppercase tracking-widest">
                                    LinkedIn
                                </h3>

                                <p className="text-xl">
                                    linkedin.com/in/junior-oleandro/
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/Junior-OLeandro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 rounded-xl p-3 transition-all duration-300"
                        >
                            <FiGithub className="text-2xl" />

                            <div>
                                <h3 className="text-sm uppercase tracking-widest">
                                    GitHub
                                </h3>

                                <p className="text-xl">
                                    github.com/Junior-OLeandro
                                </p>
                            </div>
                        </a>

                    </div>

                </aside>

                {/* ========================= */}
                {/* FORMULÁRIO */}
                {/* ========================= */}

                <section className="flex items-center">

                    <form className="designer w-[400px] max-w-[450px] space-y-4">

                        <input
                            type="text"
                            placeholder="Nome"
                            className="designer w-full border-b bg-transparent py-4 outline-none placeholder:text-(--text-muted)"
                        />

                        <input
                            type="text"
                            placeholder="Contato (e-mail ou telefone)"
                            className="w-full border-b  bg-transparent py-4 outline-none placeholder:text-(--text-muted)"
                        />

                        <input
                            type="text"
                            placeholder="Assunto"
                            className="w-full border-b  bg-transparent py-4 outline-none placeholder:text-(--text-muted)"
                        />

                        <textarea
                            placeholder="Mensagem"
                            rows={5}
                            className="w-full border-b  bg-transparent py-4 outline-none resize-none placeholder:text-(--text-muted)"
                        />

                        <button
                            type="submit"
                            className="theme-button mt-6"
                        >
                            Enviar Mensagem →
                        </button>

                    </form>

                </section>

            </section>

        </main>
    );
}
