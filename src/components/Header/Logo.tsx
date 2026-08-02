import { Animated } from "../animations/Animated";

export function Logo() {
    return (
        <Animated animation="slideLeft">
            <h1 className="designer text-3xl font-medium">Junior Oliveira</h1>
        </Animated>
    )
}