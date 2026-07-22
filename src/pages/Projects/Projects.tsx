import "..//Projects/projects.css";
import { projects } from "./ProjectCard/Project";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const Projects = () => {
    return <section className="projects ml-10 mr-10 ">

        <header className="designer flex justify-between items-center ml-10 mr-10 mb-5 mt-5">

            <h2 className="font-bold ">
                Alguns dos trabalhos que desenvolvi unindo estratégia,
                design e tecnologia.
            </h2>

            <div className="filters text-(--text-secondary)">
                <button className="active">Todos</button>
                <button>Developer</button>
                <button>Design</button>
            </div>
        </header>


    

            <div className="projects-grid">

                {projects.map(project => (

                    <ProjectCard
                        key={project.id}
                        project={project}
                    />

                ))}

            </div>



    </section>
}