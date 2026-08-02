import { useEffect, useRef } from "react";
import type { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "./menuItems";

interface Props {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function MenuMobile({ isOpen, setIsOpen }: Props) {

    const menuRef = useRef<HTMLDivElement>(null);

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

    }, [setIsOpen]);

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `theme-button transition-all duration-300 ${
            isActive ? "nav-active" : ""
        }`;

    const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
        `${navLinkClass({ isActive })} block px-5 py-5 transition-colors duration-300`;

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
                ${
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

        </div>
    );
}