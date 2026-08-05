import { Animated } from "../../../../../components/animations/Animated";
import type { Project } from "../../../../../types/types";
import { iconMap } from "../ProjectIcons";




interface Props {
    project: Project;
}

export function MainProject({ project }: Props) {
    return (

        <section className={` ${project.category} grid grid-rows-[2fr_2px_1fr] h-full w-full`}>

            <section className="grid grid-cols-1 lg:grid-cols-[35%_65%] 3xl:grid-cols-[40%_60%]">


                <div className="flex items-center justify-center">
                    <Animated animation="slideLeft">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="max-h-80 p-3"
                        />
                    </Animated>
                </div>

                <Animated animation="slideRight">
                    <div className="flex flex-col ">

                        <div>
                            <h1 className="font-bold md:text-[18px] lg:text-[22px] xl:text-[26px]  2xl:text-[30px]">
                                {project.subtitle}
                            </h1>


                        </div>


                        <p className="mt-2 leading-6  md:text-[14px]  lg:text-[16px]  3xl:text-[20px] 2xl:text-[20px] 4xl:mt-4 4xl:leading-8 max-w-[750px] 2xl:max-w-[920px]">
                            {project.longDescription}
                        </p>


                        <div className="mt-3 flex flex-wrap gap-3 2xl:mt-5">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="p-2 rounded-md border-2 border-gray-700"
                                >
                                    {tech}

                                </span>

                            ))}
                        </div>


                        <div className="grid gap-3 grid-cols-2 my-3  max-w-[800px] 2xl:max-w-[900px]  4xl:mt-7">

                            {project.highlights?.map((item) => {

                                const Icon = iconMap[item.icon as keyof typeof iconMap];

                                return (
                                    <div
                                        key={item.title}
                                        className="flex gap-2 4xl:mt-5"
                                    >

                                        <div className="mt-1">
                                            <Icon size={22} strokeWidth={1.8} />
                                        </div>

                                        <div>
                                            <h4 className="font-semibold  3xl:text-[20px] 2xl:text-[24px]">
                                                {item.title}
                                            </h4>

                                            <p className="text-[16px] 3xl:text-[18px] 2xl:text-[22px]">
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

            <section className="grid grid-cols-1 lg:grid-cols-[420px_2px_1fr] min-h-[220px] gap-2 4xl:mt-5 2xl:min-h-[350px] ">

                <Animated animation="slideLeft">
                    <aside className="ml-5">

                        <h3 className="text-2xl font-semibold 3xl:mb-1 4xl:text-[24px] ">
                            Recursos
                        </h3>

                        <ul>

                            {project.features?.map((feature) => (

                                <li
                                    key={feature}
                                    className="flex items-center text-[var(--text-secondary)] text-[16px] 4xl:text-[20px]"
                                >
                                    • {feature}
                                </li>

                            ))}

                        </ul>



                    </aside>
                </Animated>
                <div
    className="h-[2px] w-full lg:h-full lg:w-auto"
                    style={{
                        background:
                            project.category === "designer"
                                ? "var(--designer-primary)"
                                : "var(--developer-primary)",
                        opacity: 0.2,
                    }}
                />



                <section className="rounded-2xl relative m-3 justify-between ">



                    <Animated animation="fadeUp">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 place-items-center object-contain">
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
        </section>
    );
}