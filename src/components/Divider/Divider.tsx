import { ArrowLeft, ArrowRight } from "lucide-react";
import type { DividerProps } from "../../types/types";
import { useState } from "react";
import { useEffect } from "react";


export function Divider({ position, setPosition }: DividerProps) {

    const [isDragging, setIsDragging] = useState(false);





    useEffect(() => {
        function onMove(e: MouseEvent) {
            if (!isDragging) return;

            const percentage = Math.min(
                Math.max((e.clientX / window.innerWidth) * 100, 0),
                100
            );

            setPosition(percentage);
        }

        function onUp() {
            setIsDragging(false);
        }

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        };
    }, [isDragging, setPosition]);


    return (
        <>

            <div
                onMouseDown={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                }}
                className="absolute top-0 -translate-x-1/2 h-full z-20 flex justify-center cursor-col-resize"
                style={{ left: `${position}%`, width: "24px"}}>
                <div
                    className="divider h-full w-px pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to bottom, var(--designer-primary), var(--developer-primary))"}}
                />
            </div>

            <div
                className="divider absolute bottom-10 -translate-x-1/2 z-30 flex gap-2 items-center"
                style={{ left: `${position}%` }}>
                <ArrowLeft className="arrow-left" color="var(--designer-primary)" size={28} />
                <ArrowRight className="arrow-right" color="var(--developer-primary)" size={28} />
            </div>
        </>
    );
}