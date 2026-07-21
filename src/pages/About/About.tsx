import { timeline } from "../../constants/timeline";

export function About() {
    return (
        <main className="flex flex-col h-[calc(100vh-120px)] overflow-hidden bg-black px-20">

            {/* ========================= */}
            {/* TÍTULO */}
            {/* ========================= */}

            <section className="text-center py-10">

                <h1 className="designer text-6xl uppercase tracking-[0.35em]">
                    Sobre Mim
                </h1>

                <p className="developer mt-4 text-xl tracking-[0.25em]">
                    DO CONCEITO AO CÓDIGO.
                </p>

            </section>

            {/* ========================= */}
            {/* CONTEÚDO */}
            {/* ========================= */}

            <section className="grid grid-cols-[1fr_350px_1fr] flex-1 ">

                {/* ================================= */}
                {/* DESIGNER */}
                {/* ================================= */}

                <aside className="designer flex flex-col justify-center">

                    <span className="uppercase tracking-[0.25em]">
                        Criatividade
                    </span>

                    <h2 className="text-6xl mt-2 ml-[-4px]">
                        Designer
                    </h2>

                    <p className="mt-5 max-w-75 leading-8">
                        Mais de 14 anos desenvolvendo marcas,
                        identidades visuais e experiências
                        que unem estratégia, criatividade
                        e resultado.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-4 max-w-75 leading-8">

                        <h3>
                            Branding • UI Design • Marketing
                            <br /> Social Media • Empreendedorismo
                        </h3>


                    </div>

                </aside>

                {/* ================================= */}
                {/* TIMELINE */}
                {/* ================================= */}

                <section className="relative flex justify-center">

                    {/* Linha */}
                    <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-[3px] rounded-full bg-gradient-to-b from-[var(--designer-primary)] to-[var(--developer-primary)]" />

                    <div className="relative flex flex-col h-full">


                        {timeline.map((item) => (

                            <div
    key={item.id}
    className="group grid grid-cols-[minmax(0,1fr)_60px_minmax(0,1fr)] items-center py-6"
>

                                {/* ===================== */}
                                {/* LADO ESQUERDO */}
                                {/* ===================== */}

                                <div className="flex justify-end">

                                    {item.color === "designer" && (

                                        <div className="relative max-w-[260px] text-right pr-8">

                                            <span className="text-xs text-zinc-500 block">
                                                {item.year}
                                            </span>

                                            <h3 className="designer text-xl font-semibold">
                                                {item.title}
                                            </h3>

                                            {/* Tooltip */}

                                            <div
                                                className="
                                    absolute
                                    top-1/2
                                    right-full
                                    mr-6
                                    -translate-y-1/2

                                    w-64

                                    rounded-xl
                                    border
                                    border-[var(--designer-primary)]
                                    bg-zinc-950

                                    p-4

                                    opacity-0
                                    invisible

                                    translate-x-4

                                    transition-all
                                    duration-300

                                    group-hover:opacity-100
                                    group-hover:visible
                                    group-hover:translate-x-0
                                "
                                            >

                                                <p className="text-sm text-zinc-300 leading-6">
                                                    {item.description}
                                                </p>

                                            </div>

                                        </div>

                                    )}

                                </div>

                                {/* ===================== */}
                                {/* CENTRO */}
                                {/* ===================== */}

                                <div className="flex justify-center">

                                    <div
                                        className={`
                            w-5
                            h-5
                            rounded-full
                            border-4
                            border-black
                            transition-all
                            duration-300
                            group-hover:scale-125

                            ${item.color === "designer"
                                                ? "bg-[var(--designer-primary)]"
                                                : "bg-[var(--developer-primary)]"
                                            }
                        `}
                                    />

                                </div>

                                {/* ===================== */}
                                {/* LADO DIREITO */}
                                {/* ===================== */}

                                <div>

                                    {item.color === "developer" && (

                                        <div className="relative max-w-[260px] pl-8">

                                            <span className="text-xs text-zinc-500 block">
                                                {item.year}
                                            </span>

                                            <h3 className="developer text-xl font-semibold">
                                                {item.title}
                                            </h3>

                                            {/* Tooltip */}

                                            <div
                                                className="
                                    absolute
                                    top-1/2
                                    left-full
                                    ml-6
                                    -translate-y-1/2

                                    w-64

                                    rounded-xl
                                    border
                                    border-[var(--developer-primary)]
                                    bg-zinc-950

                                    p-4

                                    opacity-0
                                    invisible

                                    -translate-x-4

                                    transition-all
                                    duration-300

                                    group-hover:opacity-100
                                    group-hover:visible
                                    group-hover:translate-x-0
                                "
                                            >

                                                <p className="text-sm text-zinc-300 leading-6">
                                                    {item.description}
                                                </p>

                                            </div>

                                        </div>

                                    )}

                                </div>

                            </div>

                        ))}

                    </div>

                </section>

                {/* ================================= */}
                {/* DEVELOPER */}
                {/* ================================= */}

                <aside className="developer flex flex-col justify-center items-end text-right">

                    <span className="uppercase tracking-[0.25em]">
                        Tecnologia
                    </span>

                    <h2 className="text-6xl mt-2">
                        Developer
                    </h2>

                    <p className="mt-5 max-w-75 leading-8 text-zinc-300">
                        Hoje transformo ideias em aplicações
                        modernas utilizando tecnologias
                        atuais e boas práticas de desenvolvimento.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-end gap-4">

                        <h3>
                            React • TypeScript • JavaScript
                            <br /> Tailwind • Git
                        </h3>

                        

                    </div>

                </aside>

            </section>

        </main>
    );
}