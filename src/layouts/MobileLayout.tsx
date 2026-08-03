import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export function MobileLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}

