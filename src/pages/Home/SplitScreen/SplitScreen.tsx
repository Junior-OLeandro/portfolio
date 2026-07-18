import { DesignerSide } from "../../../components/DesignerSide/DesignerSide"
import { DeveloperSide } from "../../../components/DeveloperSide/DeveloperSide"
import { Divider } from "../../../components/Divider/Divider"
import { Portrait } from "../../../components/Portrait/Portrait"

export function SplitScreen() {
    return (
        <>
            <div className="split-screen">

                <DesignerSide />

                <DeveloperSide />

                <Portrait />

                <Divider />

            </div>
        </>
    )
}
