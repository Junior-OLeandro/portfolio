import { useMediaQuery } from "../hooks/useMediaQuery";
import { DesktopLayout } from "./DesktopLayout";
import { MobileLayout } from "./MobileLayout";


export function ResponsiveLayout() {
    const isMobile = useMediaQuery("(max-width: 1024px)");

    return isMobile
        ? <MobileLayout />
        : <DesktopLayout />;
}