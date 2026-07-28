

import { Animated } from "../../components/animations/Animated";
import "..//Projects/projects.css";
import { projects } from "./ProjectCard/Project";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const Projects = () => {
    return <section className="ml-10 mr-10 ">

        <section className="designer flex justify-center ml-10 mr-10 mb-7 mt-7">
            <Animated animation="fadeUp">
                <h2 className="font-bold ">
                    Alguns dos trabalhos que desenvolvi unindo estratégia,
                    design e tecnologia.
                </h2>
            </Animated>

        </section>


        <section className="projects-grid">
        {projects.map((project) => (
          <Animated
            key={project.id}
            animation={project.animation}
            className={`project ${project.size} ${project.category}`}
          >
            <ProjectCard project={project} />
          </Animated>
        ))}
      </section>



    </section>

}