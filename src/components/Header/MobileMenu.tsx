import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItemsMobile } from "./menuItems";




export function MenuMobile() {
    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);

        if (!element) return;

        const headerHeight = 100;

        const y =
            element.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });

        setIsOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={menuRef} className=" lg:hidden">

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="developer"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            <nav
                className={`absolute top-full left-0 w-full bg-black z-50 transition-all duration-500 ease-in-out shadow-[0_10px_30px_rgba(0,0,0,0.7)]
                ${isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-6 pointer-events-none"
                    }`}
            >
                <ul className="developer flex flex-col text-[20px]">
                    {navItemsMobile.map((item) => (
                        <li
                            key={item.id}
                            className="border-b border-zinc-800 p-6 "
                        >
                            <button
                                type="button"
                                onClick={() => scrollToSection(item.id)}
                                className="block w-full px-5 py-5 text-left transition-all duration-300 !rounded-none"
                            >
                                {item.label}
                            </button>
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

        </div>
    );
}