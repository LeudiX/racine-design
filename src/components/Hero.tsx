import React from "react";

//! Essential import for data access
import { content } from "../data/contents";

// Dataset instance for hero section
const { hero } = content;

const Hero: React.FC = () => {
    return (
        <section id="hero" className={hero.className}>
            <h4 className={hero.title.className}>
                {hero.title.first} <br /> {hero.title.second} <br /> {hero.title.third}
            </h4>
            <div className={hero.images.container.className}>
                <span>
                    <img
                        src={hero.images.first.image}
                        className={hero.images.first.className}
                        alt={hero.images.first.alt}
                    />
                </span>
                <span>
                    <img
                        src={hero.images.second.image}
                        className={hero.images.second.className}
                        alt={hero.images.second.alt}
                    />
                </span>
            </div>
            <div className={hero.description.container.className}>
                <p className={hero.description.className}>
                    {hero.description.content}
                </p>
            </div>
        </section>
    );
};
export default Hero;
