import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Animated } from "../animations/Animated";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // Função de classes padrão para o Desktop
    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `theme-button transition-all duration-300 ${
            isActive ? "nav-active" : ""
        }`;

    // Função de classes combinadas para o Mobile
    const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
        `${navLinkClass({ isActive })} block px-5 py-5 transition-colors duration-300`;

    const navItems = [
        { to: "/", label: "Home", end: true },
        { to: "/about", label: "Sobre", end: true },
        { to: "/projects", label: "Projetos" },
        { to: "/contact", label: "Contatos" },
    ];

    return (
        <header className="relative w-full bg-black flex justify-between items-center px-4 md:px-6 lg:px-8 2xl:px-10 h-[100px]">
            <Animated animation="slideLeft">
                <div>
                    <h1 className="designer text-3xl font-medium">Junior Oliveira</h1>
                </div>
            </Animated>

            {/* Menu Desktop */}
            <Animated animation="fadeUp">
                <nav className="hidden lg:block">
                    <ul className="flex gap-3 text-[20px] 4xl:text-[26px]">
                        {navItems.map((item) => (
                            <li key={item.to} className="theme-button developer">
                                <NavLink
                                    to={item.to}
                                    end={item.end}
                                    className={navLinkClass}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Animated>

            {/* Botão Hambúrguer Mobile */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden developer"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Menu Mobile Dropdown */}
            <nav
                className={`shadow-[0_10px_30px_rgba(0,0,0,0.7)] absolute top-full left-0 w-full bg-black lg:hidden z-50 transition-all duration-500 ease-in-out ${
                    isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-6 pointer-events-none"
                }`}
            >
                <ul className="developer flex flex-col text-[20px]">
                    {navItems.map((item) => (
                        <li key={item.to} className="border-b border-zinc-800 p-6">
                            <NavLink
                                to={item.to}
                                end={item.end}
                                onClick={() => setIsOpen(false)}
                                className={mobileNavLinkClass}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div
                    className="h-[2px] w-full"
                    style={{
                        background:
                            "linear-gradient(90deg, var(--designer-primary), var(--developer-primary))",
                    }}
                />
            </nav>

            {/* Linha Inferior do Header */}
            <div
                className="absolute bottom-0 left-0 h-[2px] w-full"
                style={{
                    background:
                        "linear-gradient(90deg, var(--designer-primary), var(--developer-primary))",
                }}
            />
        </header>
    );
}