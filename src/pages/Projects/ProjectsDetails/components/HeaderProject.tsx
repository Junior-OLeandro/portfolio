import { Link } from "react-router-dom";

import type { Project } from "../../../../types/types";
import { Animated } from "../../../../components/animations/Animated";

interface Props {
    project: Project;
}

export function HeaderProject({ project }: Props) {
    return (
        <header className="mx-10 my-2 2xl:my-8 flex justify-between items-center">
            <Animated animation="fadeUp">
                <ul>
                    <li className={`developer`}>
                        <Link
                            to={`/projects`}
                            className="rounded-md px-3 py-2 transition-all duration-300 font-bold md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[26px]"
                        >
                            ← Projetos
                        </Link>
                    </li>
                </ul>
            </Animated>

            <a
                href={`https://${project.demo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300"
            >
                <div>
                    <h3 className="font-bold md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] uppercase tracking-widest">
                        {project.demo}
                    </h3>
                </div>
            </a>

            <Animated animation="fadeUp">
                <h2 className="font-bold md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[30px]">{project.title}</h2>

            </Animated>
        </header>
    );
}