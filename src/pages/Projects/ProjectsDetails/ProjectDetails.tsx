import { useParams } from "react-router-dom";
import { HeaderProject } from "./components/HeaderProject/HeaderProject";
import { projects } from "../ProjectCard/Project";
import { MainProject } from "./components/MainProject/MainProject";


export function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((projetoClicado) => String(projetoClicado.id) === id);

    if (!project) {
        return <p>Projeto não encontrado.</p>;
    }

    return (
        <main className={`h-[calc(100vh-120px)] ${project.category}`}>
            <HeaderProject project={project} />
            <MainProject project={project}/>
        </main>
    );
}