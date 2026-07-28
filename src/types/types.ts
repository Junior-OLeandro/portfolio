import type { AnimationVariant } from "../animations/variants";


export type DesignerSideProps = {
    position: number;
};

export type DeveloperSideProps = {
    position: number;
};

export type DividerProps = {
    position: number;
    setPosition: React.Dispatch<React.SetStateAction<number>>;
};

export type ProjectCategory = "developer" | "designer";

export type ProjectSize = "large" | "medium" | "small";


export interface ProjectHighlight {
    title: string;
    description: string;
    icon: string;
}

export interface Project {
    id: number;

    title: string;

    description: string;

    subtitle?: string;

    longDescription?: string;

    image: string;

    gallery?: string[];

    category: ProjectCategory;

    size: ProjectSize;

    /** Ordem da animação */
    order: number;

    /** Animação utilizada pelo card */
    animation: AnimationVariant;


    technologies: string[];

    features?: string[];

    highlights?: ProjectHighlight[];

    github?: string;

    demo?: string;

    nextProjectId?: number;

    icon?: string;
}