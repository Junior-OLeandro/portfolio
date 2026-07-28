import { PageTransition } from "../../components/ageTransition";
import { SplitScreen } from "./SplitScreen/SplitScreen";

export function Home() {
    return (
        <PageTransition>
            <SplitScreen />
        </PageTransition>
        );
}