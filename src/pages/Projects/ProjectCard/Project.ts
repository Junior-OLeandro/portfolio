

import type { Project } from "../../../types/types";
import mineiro from "..//..//..//assets/images/foto-developerproject.webp";
import pixel from "..//..//..//assets/images/foto-designerproject.webp";

export const projects: Project[] = [

    {
        id: 1,
        title: "Mineiro Hamburgueria",
        description: "Sistema completo de pedidos online com painel administrativo e integração ao WhatsApp.",
        image: mineiro,
        category: "developer",
        size: "large",
        technologies: [
            "React",
            "TypeScript",
            "Supabase"
        ],
        github: "",
        demo: ""
    },

    {
        id: 2,
        title: "Pixel",
        description: "Identidade visual completa.",
        image: pixel,
        category: "designer",
        size: "medium",
        technologies: [
            "Designer",
            "Identidade Visual",
        ],
        github: "",
        demo: ""
    },

    {
        id: 3,
        title: "Landing Page Imobiliária",
        description: "Landing page moderna para captação de clientes com formulário integrado.",
        image: "",
        category: "designer",
        size: "medium",
        technologies: [
            "Figma",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        github: "",
        demo: ""
    },

    {
        id: 4,
        title: "Dashboard Financeiro",
        description: "Painel para acompanhamento de receitas, despesas e indicadores.",
        image: "",
        category: "developer",
        size: "medium",
        technologies: [
            "React",
            "TypeScript",
            "Chart.js"
        ],
        github: "",
        demo: ""
    },

    {
        id: 5,
        title: "Loja Virtual",
        description: "Interface responsiva para e-commerce com catálogo e carrinho de compras.",
        image: "",
        category: "designer",
        size: "large",
        technologies: [
            "React",
            "Tailwind CSS",
            "Vite"
        ],
        github: "",
        demo: ""
    },

    {
        id: 6,
        title: "Sistema de Agendamentos",
        description: "Aplicação para gerenciamento de clientes, horários e serviços.",
        image:"",
        category: "developer",
        size: "medium",
        technologies: [
            "React",
            "TypeScript",
            "Supabase"
        ],
        github: "",
        demo: ""
    }

];