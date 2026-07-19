import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export function MainLayout() {
    return (
        <div className="flex flex-col h-screen">

            <Header />

            <main className="flex-1 relative overflow-hidden">
                <Outlet />
            </main>

        </div>
    );
}