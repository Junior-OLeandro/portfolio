export type DesignerSideProps = {
    position: number;
}

export type DeveloperSideProps = {
    position: number;
}

export type DividerProps = {
    position: number;
    setPosition: React.Dispatch<React.SetStateAction<number>>;
}

export type ProjectCategory = "developer" | "designer";

export type ProjectSize = "large" | "medium" | "small";

export interface Project {
    id: number;

    title: string;

    description: string;

    longDescription?: string;

    image: string;

    gallery?: string[];

    category: ProjectCategory;

    size: ProjectSize;

    technologies: string[];

    features?: string[];

    github?: string;

    demo?: string;

    nextProjectId?: number;

    icon?: string;

    subtitle?: string;

    highlights?: {
        title: string;
        description: string;
        icon: string;
    }[];
}