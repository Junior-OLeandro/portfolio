import { ArrowLeft, ArrowRight } from "lucide-react";
import type { DividerProps } from "../../types/types";

const [isDragging, setIsDragging] = useState(false);

export function Divider({ position, setPosition }: DividerProps) {
    return (
        <>

            <div
                onMouseDown={() => setIsDragging(true)}
                className="divider absolute top-0 left-1/2 -translate-x-1/2 h-full w-px z-20"
                style={{
                    background: "linear-gradient(to bottom, var(--designer-primary), var(--developer-primary))",
                }}
            />


            <div
                className="divider absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2 items-center"
            >
                <ArrowLeft className="arrow-left" color="var(--designer-primary)" size={28} />
                <ArrowRight className="arrow-right" color="var(--developer-primary)" size={28} />
            </div>
        </>
    );
}