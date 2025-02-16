import React from "react";

import dorian_portrait from '/media/gallery/dorian.png';
import teezo_portrait from '/media/gallery/teezo.png';
import mattox_portrait from '/media/gallery/mattox.png';
import lilnas_portrait from '/media/gallery/lil_nas.png';
import others_portrait from '/media/gallery/others.png';
import paper_mag from '/media/gallery/paper_mag.png';


const Gallery: React.FC = () => {

    const portraits =
        [{ src: dorian_portrait, alt: "Dorian", title: "Dorian Electra" },
        { src: teezo_portrait, alt: "Teezo", title: "Teezo" },
        { src: mattox_portrait, alt: "Mattox", title: "Mattox" },
        { src: lilnas_portrait, alt: "LilNasX", title: "Lil NasX" },
        { src: others_portrait, alt: "Others", title: "Others" },
        { src: paper_mag, alt: "Paper Mag", title: "Paper Mag" }]

    return (
        <section id="gallery" className="scroll-section items-center md:my-20 my-10 p-10 snap-start w-screen min-h-screen max-h-[120vh] flex-shrink-0 overflow-y-auto">
            <h4 className="font-allumi font-bold  uppercase mb-2 text-left text-2xl max-w-2xl w-full">
                Gallery
            </h4>
            {/*Grid Layout*/}
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-2 hidden md:block">
                    {/* This column is intentionally left empty */}
                </div>
                <div className="col-span-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 overflow-visible">
                        {
                            portraits.map((image, index) => (
                                <div key={index} className="relative overflow-visible cursor-pointer">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        title={image.title}
                                        className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-120 hover:z-10"
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Gallery;