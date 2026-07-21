export interface TimelineItem {
    id: number;
    year: string;
    title: string;
    description: string;
    color: "designer" | "developer";
}

export const timeline: TimelineItem[] = [
    {
        id: 1,
        year: "2010",
        title: "Designer Gráfico",
        description:
            "Início da carreira criando identidades visuais, materiais gráficos e peças para empresas.",
        color: "designer",
    },
    {
        id: 2,
        year: "2014",
        title: "Empreendedor",
        description:
            "Fundação da primeira empresa, adquirindo experiência em gestão, marketing e atendimento.",
        color: "designer",
    },
    {
        id: 3,
        year: "2020",
        title: "UI Design",
        description:
            "Comecei a focar em interfaces digitais e experiência do usuário.",
        color: "designer",
    },
    {
        id: 4,
        year: "2024",
        title: "ADS",
        description:
            "Ingresso na graduação e aprofundamento em programação.",
        color: "developer",
    },
    {
        id: 5,
        year: "2025",
        title: "Desenvolvedor",
        description:
            "Primeiros projetos completos utilizando React, TypeScript e Supabase.",
        color: "developer",
    },
];