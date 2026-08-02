import { SplitScreen } from "./SplitScreen/SplitScreen";
import { MobileHome } from "./MobileHome/MobileHome";

export function Home() {

    const isMobile = window.innerWidth < 1024;

    return isMobile
        ? <MobileHome />
        : <SplitScreen />;
}