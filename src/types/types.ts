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

    image?: string;

    category: ProjectCategory;

    size: ProjectSize;

    technologies: string[];

    github?: string;

    demo?: string;
}