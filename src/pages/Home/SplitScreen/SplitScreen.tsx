import { useState } from "react";

import { DesignerSide } from "../../../components/DesignerSide/DesignerSide";
import { DeveloperSide } from "../../../components/DeveloperSide/DeveloperSide";
import { Divider } from "../../../components/Divider/Divider";




export function SplitScreen() {

    const [position, setPosition] = useState(50);

    return (
        <section className="relative h-full overflow-hidden">

            <DesignerSide position={position} />

            <DeveloperSide position={position} />
            

            <Divider position={position} setPosition={setPosition}
/>


        </section>
    );
}