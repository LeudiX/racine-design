import React from "react";

import ParallaxContainer from "./shared/ParallaxContainer/ParallaxContainer";

//import images
import parallax_leafs from '/media/about/parallax_leafs_cloud.png';
import parallax_arm_blue from '/media/about/parallax_arm_blue.png';
import parallax_park from '/media/about/parallax_park_cloud.png';
import xavier_cloud from '/media/about/xavier_cloud.png';
import arm from '/media/about/arm.png';
import black_person_cut from '/media/about/black_person_cut.png';

const parallaxData = [
    {
        bgImage: parallax_leafs,
        fgImage: xavier_cloud,
        fgSize: "w-48 md:w-64 lg:w-72",
        width:"w-72 md:w-96",
        text: "Émile Racine is a Montreal-based designer working at the intersection of industrial design, couture and art.",
        textPosition: "right",
        fgPosition: "center",
    },
    {
        bgImage: parallax_arm_blue,
        fgImage: arm,
        fgSize: "w-96 md:w-96 lg:w-96",
        width:"w-72 md:w-xl",
        text: "After graduated, Racine was selected as a mentee for Lignes de Fuite, where he immersed himself in fashion, honed his technical skills, and began developing his brand. International recognition followed in 2020, when he started creating one-of-a-kind for world-renowned artists. His platform boots quickly became an iconic creation, remaining a defining staple of the brand to this day.",
        text2:"In recent years, Racine's growing interest in spirituality has added a new dimension to his craft. He embraces a balanced approach where the trascendent and the earthbound meet, channeling archetypal forces through his art while aligning his creative process with a responsible approach putting visionary craftsmanship at the forefront.",
        textPosition: "left",
        fgPosition: "right",
    },
    {
        bgImage: parallax_park,
        fgImage: black_person_cut,
        fgSize: "w-56 md:w-56 lg:w-56",
        width:"w-72 md:w-md",
        text: "Racine's passion for music first sparked his creative journey, drawing inspiration from the icy, metallic deconstructed club sound of the early 2010s.",
        text2:"His debut footwear project, realized in Barcelona in 2017, was refined through eco-design strategies like modularity, wich he further developed in his final year of industrial design studies in Montreal",
        textPosition: "right",
        fgPosition: "center",
    },
] as const; // ✅ Prevents modifications & enforces literal types (Best for static configs & pre-defined data)

const About: React.FC = () => {

    return (
        <section id="about" className="scroll-section items-center md:my-20 my-10 py-10 snap-start w-screen min-h-screen max-h-[120vh] flex-shrink-0 overflow-y-auto">
            <h4 className="font-allumi font-bold  uppercase mb-2 text-left text-2xl max-w-2xl w-full">
                About
            </h4>
            {/*Grid Layout*/}
            <div className="grid grid-cols-1 md:grid-cols-12 ">
                <div className="col-span-1 hidden md:block">
                    {/* This column is intentionally left empty */}
                </div>
                <div className="col-span-10 -space-y-5">
                    {/* Iteratively Render Containers */}
                    {parallaxData.map((item, index) => (
                        <ParallaxContainer key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default About;