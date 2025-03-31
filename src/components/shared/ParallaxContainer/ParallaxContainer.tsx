import React from "react";
import { iParallaxContainerProps } from "./ParallaxContainer.d";

const ParallaxContainer: React.FC<iParallaxContainerProps> = ({
    bgImage,
    fgImage,
    p,
    fgSize,
    width,
    text,
    text2,
    textPosition,
    fgPosition = "center",
}) => {
    return (
        <div
            className={`section-container relative w-full h-96 bg-cover bg-center ${p} flex items-center justify-center`}
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Foreground Image */}
            <img
                src={fgImage}
                alt="Foreground"
                className={`absolute ${fgPosition === "center" ? "inset-0 mx-auto my-auto" : "right-0"
                    } ${fgSize} object-cover`}
            />

            {/* Text Box */}
            <div
                className={`absolute ${textPosition === "right" ? "md:right-20" : "md:left-20"
                    } bg-gray-800 opacity-80 text-white text-justify p-2 md:p-3 rounded-md shadow-lg ${width}`}
            >
                <p className="font-[Kanit] text-xs md:text-sm font-medium scale-y-90">
                    {text}
                    {text2 && (
                        <>
                            <br />
                            <br />
                            {text2}
                        </>
                    )}</p>
            </div>
        </div>
    );
};
export default ParallaxContainer;