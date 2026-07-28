

import { Animated } from "../../../../components/animations/Animated";
import type { Project } from "../../../../types/types";
import { iconMap } from "./ProjectIcons";


interface Props {
    project: Project;
}

export function MainProject({ project }: Props) {
    return (

        <main className={` ${project.category} grid grid-rows-[360px_2px_1fr] gap-1`}>

            <section className="grid grid-cols-[45%_55%] h-[330px] ">


                <div className="p-8 overflow-hidden flex items-center justify-center">
                    <Animated animation="slideLeft">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="max-w-full max-h-80  object-contain"
                        />
                    </Animated>
                </div>

                <Animated animation="slideRight">
                    <div className="p-5 flex flex-col max-h-50">

                        <div>
                            <h1 className="text-3xl font-bold">
                                {project.subtitle}
                            </h1>


                        </div>


                        <p className="mt-3 text-1xl leading-7 ">
                            {project.longDescription}
                        </p>


                        <div className="mt-3 flex flex-wrap gap-3">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="p-2 rounded-md border-2 border-gray-700"
                                >
                                    {tech}

                                </span>

                            ))}
                        </div>


                        <div className="grid gap-3 grid-cols-2 mt-3 max-w-[700px]">

                            {project.highlights?.map((item) => {

                                const Icon = iconMap[item.icon as keyof typeof iconMap];

                                return (
                                    <div
                                        key={item.title}
                                        className="flex gap-3"
                                    >

                                        <div className="mt-1">
                                            <Icon size={22} strokeWidth={1.8} />
                                        </div>

                                        <div>
                                            <h4 className="font-semibold">
                                                {item.title}
                                            </h4>

                                            <p className="text-sm">
                                                {item.description}
                                            </p>
                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                    </div>
                </Animated>
            </section>

            <div
                className="h-[2px] w-full "
                style={{
                    background:
                        project.category === "designer"
                            ? "var(--designer-primary)"
                            : "var(--developer-primary)",
                    opacity: 0.2,
                }}
            />

            <section className="grid grid-cols-[400px_2px_1fr]  max-h-55 mt-5">

                <Animated animation="slideLeft">
                    <aside className="ml-5">

                        <h3 className="text-2xl font-semibold mb-2 ">
                            Recursos
                        </h3>

                        <ul>

                            {project.features?.map((feature) => (

                                <li
                                    key={feature}
                                    className="flex items-center text-[var(--text-secondary)]"
                                >
                                    • {feature}
                                </li>

                            ))}

                        </ul>



                    </aside>
                </Animated>
                <div
                    className="h-full "
                    style={{
                        background:
                            project.category === "designer"
                                ? "var(--designer-primary)"
                                : "var(--developer-primary)",
                        opacity: 0.2,
                    }}
                />



                <section className="rounded-2xl relative m-3 justify-between">



                        <Animated animation="fadeUp">
                    <div className="grid grid-cols-4 gap-8 place-items-center object-contain">
                            {project.gallery?.map((image) => (

                                <img
                                    key={image}
                                    src={image}
                                    className="max-h-45 object-contain transition-transform duration-300 ease-out hover:scale-105 "
                                />

                            ))}
                    </div>
                        </Animated>


                </section>

            </section>
        </main>
    );
}