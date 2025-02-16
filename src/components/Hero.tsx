import React from "react";
//import rotator_cursor from '../assets/rotator_cursor.webp'
//import rotator_end from '../assets/rotator_end.webp'
import tracers_logo from '../assets/images/hero/Tracers Logo.png'
import racine_mask from '../assets/images/hero/racine_mask.webp'

const Hero: React.FC = () => {

    return (
        <section id="hero" className="scroll-section items-center md:my-15 my-10 md:p-10 p-10 snap-start w-screen min-h-screen max-h-[110vh] flex-shrink-0 flex flex-col overflow-y-auto">
            <h4 className="font-allumi font-bold  uppercase mb-8 text-left text-2xl max-w-2xl w-full">
                Apparel brand <br /> centered at the intersection of <br /> art, consciousness & functionality
            </h4>
            <div className='flex items-center justify-center -space-x-44 md:-space-x-64  lg:-space-x-80'>
                <span>
                    <img src={tracers_logo} className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" alt="Tracers Logo" />
                </span>
                <span>
                    <img src={racine_mask} className="w-full h-48 md:w-full md:h-64 lg:w-full lg:h-80 z-10" alt="Racine Mask" />
                </span>
            </div>
            <div className="md:w-2xl">
                <p className="read-the-docs text-justify text-xs font-bold">
                    Its nomenclature and vision is representative of the work of leading
                    artist Émile Lemay Racine, whose multidisciplinary background ranging
                    from forward-thinking music production to an expertise in the field of
                    industrial design along with a bold,instinctual, and yet result-oriented
                    methodology, has laid the foundation  for the brand's continuous
                    innovation in creating unique, playful and eco-conscious product.
                </p>
            </div>
        </section>
    );

};
export default Hero;