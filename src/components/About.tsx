import React from "react";
import ParallaxContainer from "./shared/ParallaxContainer/ParallaxContainer";

//! Essential import for data access
import { content } from "../data/contents";

// Dataset instance for about section
const { about } = content;

// Parallax static dataset loaded from content
const parallaxData = about.parallaxData;

const About: React.FC = () => {
    return (
        <section id="about" className={about.className}>
            <h4 className={about.title.className}>
                About
            </h4>
            {/*Grid Layout*/}
            <div className={about.gridLayout.className}>
                <div className={about.gridLayout.colspan10.className}>
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