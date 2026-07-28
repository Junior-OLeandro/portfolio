import { Link } from "react-router-dom";

import type { Project } from "../../../../types/types";

interface Props {
    project: Project;
}

export function HeaderProject({ project }: Props) {
    return (
        <header className="m-5 flex justify-between items-center">
            <ul>
                <li className={`developer`}>
                    <Link
                        to={`/projects`}
                        className="rounded-md p-4 transition-all duration-300"
                    >
                        ← Projetos
                    </Link>
                </li>
            </ul>


            <a
                href={`https://${project.demo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300"
            >
                <div>
                    <h3 className="text-sm uppercase tracking-widest">
                        {project.demo}
                    </h3>
                </div>
            </a>


            <div>
                <h2 className="text-3xl">{project.title}</h2>
            </div>
        </header>
    );
}