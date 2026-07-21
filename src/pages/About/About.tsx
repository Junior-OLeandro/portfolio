import { timeline } from "../../constants/timeline";

export function About() {
    return (
        <main className="flex flex-col h-[calc(100vh-120px)] overflow-hidden bg-black px-20">


            <section className="text-center py-5">

                <h1 className="designer text-5xl uppercase tracking-[0.15em]">
                    POR TRÁS DO CÓDIGO.
                </h1>

                <p className="developer mt-4 text-xl tracking-[0.25em]">
                    Do conceito ao código.
                </p>

            </section>

            

            <section className="grid grid-cols-[1fr_430px_1fr] flex-1 min-h-0">

                
                <aside className="designer flex flex-col justify-center">

                    <span className="uppercase tracking-[0.25em]">
                        Criatividade
                    </span>

                    <h2 className="text-6xl mt-2 -ml-1">
                        Designer
                    </h2>

                    <p className="mt-5 max-w-70 leading-8">
                        Mais de 14 anos desenvolvendo marcas, identidades visuais e experiências que unem estratégia,criatividade e resultado.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-4 max-w-75 leading-8">

                        <h3>
                            Branding • UI Design • Marketing
                            <br /> Social Media • Empreendedorismo
                        </h3>

                    </div>

                </aside>


                <section className="relative flex justify-center h-120">


                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] rounded-full bg-gradient-to-b from-[var(--designer-primary)] to-[var(--developer-primary)]" />


                    <div className="relative flex flex-col h-full justify-between py-8">

                        {timeline.map((item) => (

                            <div
                                key={item.id}
                                className="group grid grid-cols-[minmax(0,1fr)_20px_minmax(0,1fr)] items-center"
                            >


                                <div className="designer flex justify-end">

                                    {item.color === "designer" && (

                                        <div className="relative max-w-[260px] text-right pr-8">

                                            <span className="text-xs ">
                                                {item.year}
                                            </span>

                                            <h3 className=" text-xl font-semibold">
                                                {item.title}
                                            </h3>


                                            <div
                                                className="absolute top-1/2 right-full mr-6 -translate-y-1/2 w-64 rounded-xl border-2 border-[var(--designer-primary)] bg-black p-4  opacity-0 invisible translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0
                                "
                                            >
                                                <p className="text-sm leading-6">
                                                    {item.description}
                                                </p>
                                            </div>

                                        </div>

                                    )}

                                </div>


                                <div className="flex justify-center">

                                    <div
                                        className={`w-5 h-5 rounded-full border-4 border-black transition-all duration-300 group-hover:scale-125
                                        ${item.color === "designer" ? "bg-[var(--designer-primary)]" : "bg-[var(--developer-primary)]"}`}
                                    />

                                </div>


                                <div className="developer">

                                    {item.color === "developer" && (

                                        <div className="relative max-w-[260px] pl-8">

                                            <span className="text-xs ">
                                                {item.year}
                                            </span>

                                            <h3 className="text-xl font-semibold">
                                                {item.title}
                                            </h3>


                                            <div
                                                className=" absolute top-1/2 left-full ml-6 -translate-y-1/2 w-64 rounded-xl border-2 border-[var(--developer-primary)] bg-black p-4 opacity-0 invisible -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0"
                                            >
                                                <p className="text-sm leading-6">
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


                <aside className="developer flex flex-col justify-center items-end text-end">

                    <span className="uppercase tracking-[0.25em]">
                        Tecnologia
                    </span>

                    <h2 className="text-6xl mt-2">
                        Developer
                    </h2>

                    <p className="mt-5 max-w-75 leading-8  ">
                        Hoje transformo ideias em aplicações modernas utilizando tecnologias atuais e boas práticas de desenvolvimento.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-4 ">

                        <h3>
                            React • TypeScript • JavaScript
                            <br /> Tailwind • Supabase • Git 
                        </h3>

                    </div>

                </aside>

            </section>

        </main>
    );
}