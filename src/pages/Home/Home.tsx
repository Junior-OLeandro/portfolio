import { useMediaQuery } from "../../hooks/useMediaQuery";
import { SplitScreen } from "./SplitScreen/SplitScreen";
import { MobileHome } from "./MobileHome/MobileHome";

export function Home() {

    const isMobile = useMediaQuery("(max-width: 1024px)");

    return isMobile
        ? <MobileHome />
        : <SplitScreen />;
}