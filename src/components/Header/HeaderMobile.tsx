import { LinhaMenu } from "./LinhaMenu";
import { Logo } from "./Logo";
import { MenuMobile } from "./MobileMenu";

export function HeaderMobile() {
    
    return (
        <header className="fixed z-50 top-0 p-5 w-full bg-black flex justify-between items-center ">

            <Logo />

            <MenuMobile />

            <LinhaMenu />
        </header>
    );
}