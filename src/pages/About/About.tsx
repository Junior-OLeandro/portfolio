import { Animated } from "../../components/animations/Animated";

import { timeline } from "../../constants/timeline";

export function About() {
    return (

        <main className="flex flex-col h-[calc(100vh-120px)] px-20 ">


            <section className="text-center ">
                <Animated animation="fadeUp">
                    <h1 className="designer text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase m-7 tracking-[0.15em]">
                        POR TRÁS DO CÓDIGO.
                    </h1>
                </Animated>


            </section>



            <section className="grid grid-cols-[1fr_430px_1fr] flex-1 min-h-0">


                <aside className="designer flex flex-col justify-start pt-20">
                    <Animated animation="slideLeft">
                        <span className="uppercase tracking-[0.25em] md:text-[13px]  xl:text-[15px] 2xl:text-[20px]">
                            Criatividade
                        </span>

                        <h2 className="md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-2 -ml-1">
                            Designer
                        </h2>

                        <p className="mt-5 font-semibold max-w-70 2xl:max-w-90 leading-6 md:text-[13px]  xl:text-[15px] 2xl:text-[18px] ">
                            Mais de 14 anos desenvolvendo marcas, identidades visuais e experiências que unem estratégia,criatividade e resultado.
                        </p>

                        <div className="mt-12 font-semibold flex flex-wrap gap-4 max-w-75 leading-8 2xl:max-w-100 md:text-[13px]  xl:text-[15px] 2xl:text-[18px]">

                            <h3>
                                Branding • UI Design • Marketing
                                <br /> Social Media • Empreendedorismo
                            </h3>

                        </div>

                    </Animated>
                </aside>

                <section className="relative flex flex-1 h-full">


                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] rounded-full bg-gradient-to-b from-[var(--designer-primary)] to-[var(--developer-primary)]" />


                    <div
                        className="relative grid flex-1 h-full "
                        style={{
                            gridTemplateRows: `repeat(${timeline.length}, minmax(0,1fr))`,
                        }}
                    >
                        {timeline.map((item) => (

                            <div
                                key={item.id}
                                className="group grid grid-cols-[minmax(0,1fr)_20px_minmax(0,1fr)] items-center"
                            >



                                <div className="designer flex justify-end ">

                                    {item.color === "designer" && (

                                        <div className="relative max-w-[300px] text-right pr-5">
                                            <Animated animation="fadeUp">
                                                <span className=" md:text-[13px]  xl:text-[15px] 2xl:text-[18px] leading-8 ">
                                                    {item.year}
                                                </span>

                                                <h3 className=" md:text-[15px]  xl:text-[20px] 2xl:text-[25px] leading-8 font-semibold">
                                                    {item.title}
                                                </h3>

                                            </Animated>
                                            <div
                                                className="absolute top-0 right-full mr-5 -translate-y-1/2 w-[330px] rounded-xl border-2 border-(--designer-primary) bg-black p-4  opacity-0 invisible translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 
                                "
                                            >
                                                <p className=" md:text-[13px]  xl:text-[15px] 2xl:text-[18px] leading-6">
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


                                <div className="developer flex">

                                    {item.color === "developer" && (

                                        <div className="relative max-w-[270px] pl-5">
                                            <Animated animation="fadeUp">
                                                <span className="text-[15px] 2xl:text-[17px] ">
                                                    {item.year}
                                                </span>

                                                <h3 className="font-semibold text-[18px] md:text-[15px]  2xl:text-[23px]">
                                                    {item.title}
                                                </h3>

                                            </Animated>
                                            <div
                                                className=" absolute top-0 left-full ml-5 -translate-y-1/2 w-[330px] rounded-xl border-2 border-[var(--developer-primary)] bg-black p-4 opacity-0 invisible -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0"
                                            >
                                                <p className=" md:text-[13px]  xl:text-[15px] 2xl:text-[17px] leading-6">
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


                <aside className="developer flex flex-col justify-start items-end text-end pt-20">

                    <Animated animation="slideRight">
                        <span className="uppercase tracking-[0.25em] md:text-[13px]  xl:text-[15px] 2xl:text-[20px]">
                            Tecnologia
                        </span>

                        <h2 className="md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-2">
                            Developer
                        </h2>

                        <p className="mt-5 max-w-100 2xl:max-w-100 leading-6 md:text-[13px]  xl:text-[15px] 2xl:text-[18px] 2xl:leading-7">
                            Hoje transformo ideias em aplicações modernas utilizando tecnologias atuais e boas práticas de desenvolvimento.
                        </p>


                        <h4 className="mt-12 leading-6 md:text-[13px]  xl:text-[15px] 2xl:text-[18px] 2xl:leading-7">
                            React • TypeScript • JavaScript
                            <br /> Tailwind • Supabase • Git
                        </h4>


                    </Animated>
                </aside>

            </section>

        </main>

    );
}