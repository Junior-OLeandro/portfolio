import "..//Projects/projects.css";

export const Projects = () => {
    return <section className="projects">

    <header className="projects-header">
        <span>PORTFÓLIO</span>

        <h2>Projetos</h2>

        <p>
            Alguns dos trabalhos que desenvolvi unindo estratégia,
            design e tecnologia.
        </p>

        <div className="filters">
            <button className="active">Todos</button>
            <button>Desenvolvimento</button>
            <button>Design</button>
        </div>
    </header>


    <div className="projects-grid">


        <article className="project large dev">

            <div className="image">
                Screenshot
            </div>

            <div className="content">

                <span className="category">
                    Desenvolvimento
                </span>

                <h3>Mineiro Hamburgueria</h3>

                <p>
                    Sistema completo de pedidos integrado ao WhatsApp.
                </p>

                <div className="techs">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Supabase</span>
                </div>

            </div>

        </article>




        <article className="project medium designer">

            <div className="image">
                Screenshot
            </div>

            <div className="content">

                <span className="category">
                    Design
                </span>

                <h3>Pixel Contabilidade</h3>

                <p>
                    Identidade visual completa.
                </p>

            </div>

        </article>




        <article className="project small dev">

            <div className="image">
                Screenshot
            </div>

            <div className="content">

                <span className="category">
                    Desenvolvimento
                </span>

                <h3>Landing Page</h3>

            </div>

        </article>



        <article className="project small designer">

            <div className="image">
                Screenshot
            </div>

            <div className="content">

                <span className="category">
                    Design
                </span>

                <h3>Logo</h3>

            </div>

        </article>



        <article className="project medium dev">

            <div className="image">
                Screenshot
            </div>

            <div className="content">

                <span className="category">
                    Desenvolvimento
                </span>

                <h3>Painel Administrativo</h3>

            </div>

        </article>



        <article className="project small designer">

            <div className="image">
                Screenshot
            </div>

            <div className="content">

                <span className="category">
                    Design
                </span>

                <h3>Social Media</h3>

            </div>

        </article>



        <article className="project medium designer">

            <div className="image">
                Screenshot
            </div>

            <div className="content">

                <span className="category">
                    Design
                </span>

                <h3>Catálogo</h3>

            </div>

        </article>



        <article className="project large dev">

            <div className="image">
                Screenshot
            </div>

            <div className="content">

                <span className="category">
                    Desenvolvimento
                </span>

                <h3>Meu Portfólio</h3>

            </div>

        </article>

    </div>

</section>
}