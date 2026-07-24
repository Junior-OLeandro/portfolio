import { Link } from "react-router-dom";
import type { Project } from "../../../types/types";

interface Props {
    project: Project;
}

export function ProjectCard({ project }: Props) {
    return (
        <article className={`project  ${project.size} ${project.category}`}>

            <img
                src={project.image}
                alt={project.title}
            />

            <div className="overlay">

                

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technologies">

                    {project.technologies.map(tech => (
                        <span
                            key={tech}
                            className="tech"
                        >
                            {tech}
                        </span>
                    ))}

                </div>

                <Link
                    to={`/projects/${project.id}`}
                    className="project-link w-40 mt-1 rounded-full p-2"
                >
                    Ver Projeto →
                </Link>

            </div>

        </article>
    );
}