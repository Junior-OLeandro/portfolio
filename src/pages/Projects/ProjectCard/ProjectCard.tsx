import { Link } from "react-router-dom";
import type { Project } from "../../../types/types";

interface Props {
    project: Project;
}

export function ProjectCard({ project }: Props) {
    return (
        <article className={`project ${project.size} ${project.category}`}>

            <img
                src={project.image}
                alt={project.title}
            />

            <div className="overlay">

                

                <h3 className="font-bold md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]">{project.title}</h3>

                <p className="md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">{project.description}</p>

                <div className="technologies">

                    {project.technologies.map(tech => (
                        <span
                            key={tech}
                            className="tech md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]"
                        >
                            {tech}
                        </span>
                    ))}

                </div>

                <Link
                    to={`/projects/${project.id}`}
                    className="project-link w-40 mt-2 rounded-full p-2 text-center"
                >
                    Ver Projeto →
                </Link>

            </div>

        </article>
    );
}