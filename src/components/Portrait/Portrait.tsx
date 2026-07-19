import portraitDesigner from "/src/assets/images/foto-designer.webp";
import portraitDeveloper from "/src/assets/images/foto-developer.webp";

type PortraitProps = {
    isDesigner: boolean;
}


export function Portrait({ isDesigner }: PortraitProps) {
    return (
        <>
            {/* FRASE */}
            <div
                className="
                designer
                    absolute
                    top-10
                    left-1/2
                    -translate-x-1/2
                    z-40
                    whitespace-nowrap
                    pointer-events-none
                "
            >
                <h3 className="text-2xl tracking-[0.2em] uppercase font-light">
                    DO CONCEITO AO CÓDIGO.
                </h3>
            </div>

            {/* FOTO */}
            <div
                className="
                    absolute
                    left-1/2
                    bottom-0
                    -translate-x-1/2
                    z-[-1]
                    pointer-events-none
                    opacity-70
                "
            >


                <img
                    src={isDesigner ? portraitDesigner : portraitDeveloper}
                    alt="Junior Oliveira" className="h-[70vh]"
                />
            </div>
        </>
    );
}