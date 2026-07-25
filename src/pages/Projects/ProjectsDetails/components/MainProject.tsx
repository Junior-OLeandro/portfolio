import { Link } from "react-router-dom";

import type { Project } from "../../../../types/types";

interface Props {
    project: Project;
}

export function MainProject({ project }: Props) {
    return (

        <main className="grid grid-rows-[55%_45%] h-full">
            <section className="grid grid-cols-[45%_55%]">
                <div className="bg-yellow-800  "><img
                src={project.image}
                alt={project.title}
            /></div>
                <div className="bg-red-800"><p>{project.description}</p></div>
            </section>
            <section className="grid grid-cols-[320px_1fr]">
                <div className="bg-blue-300">{project.technologies.map(tech => (
                        <span
                            key={tech}
                            className="tech"
                        >
                            {tech}
                        </span>
                    ))}</div>
                <div className="bg-green-800"><div className="bg-yellow-800  "><img
                src={project.image}
                alt={project.title}
            /></div>

            <div className="bg-yellow-800 grid grid-cols-4">
            <div className="bg-yellow-800 "><img
                src={project.image}
                alt={project.title}
            /></div>
            <div className="bg-yellow-800  "><img
                src={project.image}
                alt={project.title}
            /></div>
            <div className="bg-yellow-800  "><img
                src={project.image}
                alt={project.title}
            /></div></div>
            </div>
            </section>
        </main>
    );
}