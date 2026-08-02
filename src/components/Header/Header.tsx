import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DesktopMenu } from "./DesktopMenu";
import { LinhaMenu } from "./LinhaMenu";
import { Logo } from "./Logo";
import { MenuMobile } from "./MobileMenu";

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

    return (
        <header className="relative w-full bg-black flex justify-between items-center px-4 md:px-6 lg:px-8 2xl:px-10 h-[100px]">

            <Logo />

            <DesktopMenu />

            <MenuMobile
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <LinhaMenu />
        </header>
    );
}