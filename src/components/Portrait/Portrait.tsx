import portraitDesigner from "/src/assets/images/foto-designer.webp";
import portraitDeveloper from "/src/assets/images/foto-developer.webp";

type PortraitProps = {
    isDesigner: boolean;
    position: number;
}


export function Portrait({ isDesigner, position }: PortraitProps) {
    return (
        <>

                        <div
                className="absolute bottom-0 -translate-x-[51%] z-[-1] pointer-events-none"
                style={{ left: `${position}%` }}>

                <div className="relative ">

                    <img
                        src={portraitDeveloper}
                        alt="Retrato Developer"
                        className={`absolute left-0 bottom-0 h-[70vh] transition-opacity duration-500
                        ${isDesigner ? "opacity-0" : "opacity-100"}
                        `}
                    />

                    <img
                        src={portraitDesigner}
                        alt="Retrato Designer"
                        className={`h-[70vh] transition-opacity duration-500
                        ${isDesigner ? "opacity-100" : "opacity-0"}
                        `}
                    />



                </div>



            </div>
        </>
    );
}