

import type { Project } from "../../../types/types";
import mineiro from "..//..//..//assets/images/foto-developerproject.webp";
import seo from "..//..//..//assets/images/seo-project.webp"
import marcas from "..//..//..//assets/images/branding-project.webp";
import portfolio from "..//..//..//assets/images/portfolio-project.webp"
import mkp from "..//..//..//assets/images/mkp-project.webp"
import social from "..//..//..//assets/images/social-project.webp"

export const projects: Project[] = [

    {
        id: 1,
        title: "Sistema de pedidos",
        description: "Sistema completo de pedidos online com painel administrativo e integração ao WhatsApp.",
        image: mineiro,
        category: "developer",
        size: "large",
        technologies: [
            "HTML",
            "CSS",
            "JS",
            "Supabase"
        ],
        github: "",
        demo: ""
    },

    {
        id: 2,
        title: "Gestão de Marketplaces",
        description: "Criação e operação de lojas virtuais em marketplaces.",
        image: mkp,
        category: "developer",
        size: "medium",
        technologies: [
            "Gestão de Produtos",
            "E-commerce"
        ],
        github: "",
        demo: ""
    },

    {
        id: 3,
        title: "Portfólio Pessoal",
        description: "Portfólio responsivo desenvolvido para apresentar meus projetos, habilidades e experiência de forma moderna e intuitiva.",
        image: portfolio,
        category: "developer",
        size: "large",
        technologies: [
            "React",
            "TS",
            "Tailwind"
        ],
        github: "",
        demo: ""
    },

    {
    id: 4,
    title: "Marketing Digital",
    description: "Planejamento, otimização e gestão de canais digitais para fortalecer marcas e gerar resultados.",
    image: seo,
    category: "developer",
    size: "large",
    technologies: [
        "SEO",
        "Analytics",
        "Google",
        "Meta",
        "Social Media"
    ],
    github: "",
    demo: ""
},

    {
        id: 5,
        title: "Design de marca",
        description: "Criação de marca do zero, desenvolvendo sua identidade visual e personalidade.",
        image: marcas,
        category: "designer",
        size: "medium",
        technologies: [
            "Design de Marca",
            "Vetorização",
            "Branding"
        ],
        github: "",
        demo: ""
    },

    {
    id: 6,
    title: "Social Media",
    description: "Criação de conteúdos estratégicos, artes e campanhas para fortalecer a presença da marca nas redes sociais.",
    image: social,
    category: "designer",
    size: "medium",
    technologies: [
        "Instagram",
        "Facebook",
        "Conteúdo",
        "Design"
    ],
    github: "",
    demo: ""
},

];