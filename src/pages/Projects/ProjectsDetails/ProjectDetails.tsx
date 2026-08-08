import { useParams } from "react-router-dom";
import { SEO } from "../../../components/seo/SEO";
import { HeaderProject } from "./components/HeaderProject/HeaderProject";
import { projects } from "../ProjectCard/Project";
import { MainProject } from "./components/MainProject/MainProject";

export function ProjectDetails() {
    const { slug } = useParams();

    const project = projects.find(
        (projetoClicado) =>
            projetoClicado.slug === slug
    );

    if (!project) {
        return <p>Projeto não encontrado.</p>;
    }

    return (
        <>
            <SEO
                title={`${project.title} | Junior Oliveira`}
                description={`Conheça o projeto ${project.title}, desenvolvido por Junior Oliveira.`}
                canonical={`https://junior-oleandro.github.io/portfolio/projects/${project.slug}`}
            />

            <main
                className={`h-[calc(100vh-120px)] pt-20 lg:pt-0 ${project.category}`}
            >
                <HeaderProject project={project} />

                <MainProject project={project} />
            </main>
        </>
    );


}
