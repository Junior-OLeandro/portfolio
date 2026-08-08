import { useState } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../../../types/types";

interface Props {
    project: Project;
}

export function ProjectCard({ project }: Props) {

    const [active, setActive] = useState(false);

    function handleCardClick() {
        if (window.matchMedia("(max-width: 1024px)").matches) {
            setActive(prev => !prev);
        }
    }

    return (
        <article
            className={`project ${project.size} ${project.category} ${active ? "active" : ""}`}
            onClick={handleCardClick}
        >

            <img
                src={project.image}
                alt={project.title}
            />

            <div className="overlay">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technologies">
                    {project.technologies.map(tech => (
                        <span key={tech} className="tech">
                            {tech}
                        </span>
                    ))}
                </div>

                <Link
                    to={`/projects/${project.slug}`}
                    className="project-link w-40 mt-2 rounded-full p-2 text-center"
                    onClick={(event) => event.stopPropagation()}
                    onTouchStart={(event) => event.stopPropagation()}
                >
                    Ver Projeto →
                </Link>

            </div>

        </article>
    );
}