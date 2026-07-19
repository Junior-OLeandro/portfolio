import { useState } from "react";

import { DesignerSide } from "../../../components/DesignerSide/DesignerSide";
import { DeveloperSide } from "../../../components/DeveloperSide/DeveloperSide";
import { Divider } from "../../../components/Divider/Divider";
import { Portrait } from "../../../components/Portrait/Portrait";

export function SplitScreen() {

    const [isDesigner, setIsDesigner] = useState(true);

    return (
        <section className="relative h-full overflow-hidden">

            <DesignerSide />

            <DeveloperSide />

            <Divider />

            <Portrait isDesigner={isDesigner} />

        </section>
    );
}