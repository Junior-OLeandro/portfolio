import { LinhaMenu } from "./LinhaMenu";
import { Logo } from "./Logo";
import { MenuMobile } from "./MobileMenu";

export function HeaderMobile() {
    
    return (
        <header className="fixed z-50 w-full bg-black flex justify-between items-center  px-4 py-4">

            <Logo />

            <MenuMobile />

            <LinhaMenu />
        </header>
    );
}