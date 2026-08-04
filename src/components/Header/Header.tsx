import { DesktopMenu } from "./DesktopMenu";
import { LinhaMenu } from "./LinhaMenu";
import { Logo } from "./Logo";

export function Header() {
    
    return (
        <header className="relative w-full bg-black flex justify-between items-center px-4 md:px-6 lg:px-8 2xl:px-10 h-[100px]">

            <Logo />

            <DesktopMenu />

            <LinhaMenu />
        </header>
    );
}