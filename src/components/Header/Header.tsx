import { Link } from "react-router-dom";



export function Header() {
    return <header className="relative w-full bg-black designer flex justify-between items-center p-8 h-[100px]">
        <h1 className="designer text-3xl font-medium">Junior Oliveira</h1>
        <nav>
            <ul className="developer flex gap-3 text-[20px]">
                <li className="theme-button"><Link to="/">Home</Link></li>
                <li className="theme-button"><Link to="/about">Sobre</Link></li>
                <li className="theme-button"><Link to="/projects">Projetos</Link></li>
                <li className="theme-button"><Link to="/contact">Contatos</Link></li>
            </ul>
        </nav>
        <div className="absolute bottom-0 left-0 h-[2px] w-full"
            style={{
                background:
                    "linear-gradient(90deg, var(--designer-primary), var(--developer-primary))",
            }} />
    </header>

}