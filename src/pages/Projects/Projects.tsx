import "..//Projects/projects.css";
import { projects } from "./ProjectCard/Project";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const Projects = () => {
    return <section className="projects ml-10 mr-10 ">

        <header className="designer flex justify-center ml-10 mr-10 mb-7 mt-7">

            <h2 className="font-bold ">
                Alguns dos trabalhos que desenvolvi unindo estratégia,
                design e tecnologia.
            </h2>

            
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