import React from "react";

//! Essential import for data access
import { content } from "../data/contents";
import { Project } from "./shared/Carousel/Project";

interface GalleryProps {
    // Callback to notify parent that a portrait was clicked
    onPortraitClick: (project: Project) => void;
}
// Dataset instance for gallery and carousel sections
const { gallery, carousel } = content;

// Projects portrait images static dataset loaded from content
const portraits = carousel.projects.artists;

const Gallery: React.FC<GalleryProps> = ({ onPortraitClick }) => {
    return (
        <section id="gallery" className={gallery.className}>
            <h4 className={gallery.title.className}>
                {gallery.title.content}
            </h4>
            {/*Grid Layout*/}
            <div className={`${gallery.gridLayout.className} `}>
                <div className={gallery.gridLayout.colspan10.className}>
                    <div className={`${gallery.gridLayout.colspan10.container.className}`}>
                        {
                            portraits.slice(0, 6).map((portrait) => (
                                <div key={portrait.id}
                                    className={`${gallery.portraits.className}`}
                                    onClick={() => onPortraitClick(portrait)}> {/*Notify parent with project id and update project when clicking */}
                                    <img
                                        src={portrait.portrait_src}
                                        alt={portrait.title}
                                        title={portrait.title}
                                        className={`${gallery.portraits.content.className}`}
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