

import { Animated } from "../../components/animations/Animated";
import { SEO } from "../../components/seo/SEO";
import "..//Projects/projects.css";
import { projects } from "./ProjectCard/Project";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const Projects = () => {
  return ( 
  <>
    <SEO
    title="Projetos | Junior Oliveira"
    description="Conheça os projetos de desenvolvimento web, aplicações e interfaces criados por Junior Oliveira."
    canonical="https://junior-oleandro.github.io/portfolio/projects"
/>

    <section className="mx-auto  px-8 h-[calc(100vh-190px)]">

      <section className="designer flex justify-center ml-10 mr-10 mb-4 mt-4">
        <Animated animation="fadeUp">
          <h2 className="font-bold md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-2xl">
            Alguns dos trabalhos que desenvolvi unindo estratégia,
            design e tecnologia.
          </h2>
        </Animated>

      </section>


      <section className="projects-grid h-full">
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
  </>
  )
}