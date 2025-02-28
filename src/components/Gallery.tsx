import React from "react";

//! Essential import for data access
import { content } from "../data/contents";

interface GalleryProps {
    // Callback to notify parent that a portrait was clicked
    onPortraitClick: (projectId: string) => void;
}
// Dataset instance for gallery section
const { gallery } = content;

// Images static dataset loaded from content
const images = gallery.portraits.content.images;

const Gallery: React.FC<GalleryProps> = ({ onPortraitClick }) => {
    return (
        <section id="gallery" className={gallery.className}>
            <h4 className={gallery.title.className}>
                {gallery.title.content}
            </h4>
            {/*Grid Layout*/}
            <div className={gallery.gridLayout.className}>
                <div className={gallery.gridLayout.colspan10.className}>
                    <div className={gallery.gridLayout.colspan10.container.className}>
                        {
                            images.map((image) => (
                                <div key={image.id}
                                    className={gallery.portraits.className}
                                    onClick={() => onPortraitClick(image.id)}> {/*Notify parent with project id and update project when clicking */}
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        title={image.title}
                                        className={gallery.portraits.content.className}
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