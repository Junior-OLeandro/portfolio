import { SEO } from "../../components/seo/SEO";
import { SplitScreen } from "./SplitScreen/SplitScreen";

export function Home() {
    return (
        <>
            <SEO
                title="Junior Oliveira | Desenvolvedor Front-end & UI/UX Designer"
                description="Portfólio de Junior Oliveira, desenvolvedor front-end e designer especializado em React, TypeScript, UI/UX e aplicações web."
                canonical="https://junior-oleandro.github.io/portfolio/"
            />

            <SplitScreen />
        </>
    );

}
