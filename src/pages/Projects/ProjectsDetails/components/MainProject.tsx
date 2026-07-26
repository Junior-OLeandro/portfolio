

import type { Project } from "../../../../types/types";

interface Props {
    project: Project;
}

export function MainProject({ project }: Props) {
    return (

        <main className="grid grid-rows-[55%_45%] ">

            <section className="grid grid-cols-[45%_55%] h-[330px] bg-amber-800">


                <div className="p-8 overflow-hidden flex items-center justify-center">

                    <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-60 object-contain border border-amber-100"
                    />

                </div>


                <div className="p-8 flex flex-col ">

                    <div>
                        <h1 className="text-4xl font-bold">
                            {project.title}
                        </h1>

                        <p className="mt-2 text-lg text-designer-primary">
                            {project.subtitle}
                        </p>
                    </div>


                    <p className="mt-6 text-base leading-7 text-zinc-400">
                        {project.longDescription}
                    </p>


                    <div className="mt-6 flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-2 rounded-lg border"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>


                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-auto">

                        {project.highlights?.map((item) => (

                            <div
                                key={item.title}
                                className="flex gap-3"
                            >


                                <div className="mt-1">

                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        {item.title}
                                    </h4>

                                    <p className="text-sm text-zinc-500">
                                        {item.description}
                                    </p>
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            <section className="grid grid-cols-[350px_1fr] gap-5 h-full">

                {/* Recursos */}
                <aside className="border rounded-xl p-6">

                    <h3 className="text-xl font-semibold mb-5">
                        Recursos
                    </h3>

                    <ul className="space-y-4">

                        {project.features?.map((feature) => (

                            <li
                                key={feature}
                                className="flex items-center gap-3"
                            >
                                • {feature}
                            </li>

                        ))}

                    </ul>

                </aside>

                {/* Galeria */}
                <section className="border rounded-xl p-5">

                    <h3 className="text-xl font-semibold mb-5">
                        Galeria
                    </h3>

                    <div className="grid grid-cols-4 gap-4 h-[180px]">

                        {project.gallery?.map((image) => (

                            <img
                                key={image}
                                src={image}
                                className="w-full h-full object-cover rounded-lg"
                            />

                        ))}

                    </div>

                </section>

            </section>
        </main>
    );
}