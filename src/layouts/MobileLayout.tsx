import { Outlet } from "react-router-dom";
import { HeaderMobile } from "../components/Header/HeaderMobile";

export function MobileLayout() {
    return (
        <>
            <HeaderMobile />

            <main className="flex-1">
                <Outlet />
            </main>
        </>
    );
}