import { Link } from "react-router-dom";
import type { Project } from "../../../../../types/types";
import { Animated } from "../../../../../components/animations/Animated";



interface Props {
    project: Project;
}

export function HeaderProject({ project }: Props) {
    return (
        <header className="mx-5 my-5 lg:mx-10 lg:my-2 2xl:my-8">

    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <Animated animation="fadeUp">
            <ul>
                <li className="developer block lg:hidden">
                    <Link
                        to="/#projects"
                        className="rounded-md px-3 py-2 font-bold transition-all duration-300 text-base lg:text-[18px] 2xl:text-[26px]"
                    >
                        ← Voltar
                    </Link>
                </li>
            </ul>
            
            <ul>
                <li className="developer hidden lg:block">
                    <Link
                        to="/projects"
                        className="rounded-md px-3 py-2 font-bold transition-all duration-300 text-base lg:text-[18px] 2xl:text-[26px]"
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
            className="flex justify-center lg:justify-end"
        >
            <h3 className="uppercase tracking-widest text-sm lg:text-base 2xl:text-lg">
                {project.demo}
            </h3>
        </a>

<Animated animation="fadeUp">
            <h2 className="font-bold text-2xl lg:text-[24px] 2xl:text-[30px] text-center lg:text-right">
                {project.title}
            </h2>
        </Animated>

    </div>

</header>
    );
}