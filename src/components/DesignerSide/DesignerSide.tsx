import { Link } from "react-router-dom";

export function DesignerSide() {
    return (
        <section className="designer">
            <h1 className="designer text-6xl">Designer</h1>

            <span>
                Criatividade que dá
                <br />
                forma às ideias.
            </span>

            <p>
                Mais de 14 anos criando marcas, interfaces e experiências
                que unem estratégia e estética.
            </p>

            <ul className="designer flex gap-3 text-[20px]">
                <li className="theme-button"><Link to="/projects">Ver Projetos</Link></li>
            </ul>
        </section>
    )
}