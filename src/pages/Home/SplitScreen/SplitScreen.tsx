import { useState } from "react";

import { DesignerSide } from "../../../components/DesignerSide/DesignerSide";
import { DeveloperSide } from "../../../components/DeveloperSide/DeveloperSide";
import { Divider } from "../../../components/Divider/Divider";
import { PageTransition } from "../../../components/ageTransition";

export function SplitScreen() {
    const [position, setPosition] = useState(50);

    return (
        <section className="relative h-full">
            <PageTransition>
            <DesignerSide position={position} />
            <DeveloperSide position={position} />
            <Divider position={position} setPosition={setPosition} />
            </PageTransition>
        </section>
    );
}