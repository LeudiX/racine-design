import React from "react";
import { ImgLogo } from "./shared/ImgLogo/ImgLogo";
import Navbar from "./shared/Navbar";
import ThemeToggle from "./shared/ThemeToggle";
import { content } from "../data/contents";

interface HeroContainerProps {
    scrollToSection: (id: string) => void;
    isDarkMode: boolean;
    onThemeChange: (isDarkMode: boolean) => void;
}

const { heroContainer } = content;

const HeroContainer: React.FC<HeroContainerProps> = ({ scrollToSection, isDarkMode, onThemeChange }) => {

    return (
        <div className={`${isDarkMode ? "bg-gray-900 transition-colors duration-300" : "bg-white transition-colors duration-300"} fixed top-0 left-0 right-0 z-50`}>
            <div className="flex items-center justify-between p-2 hover:shadow-md">
                {/* Logo */}
                <div className="ml-3">
                    <ImgLogo
                        imgID="racineLogo"
                        imgSrcLight={heroContainer.logoOnLight} // Path to light mode logo
                        imgSrcDark={heroContainer.logoOnDark} // Path to dark mode logo
                        imgAlt="Racine Halftonewhite Logo"
                        className="h-16 w-16 mr-[2.5rem]" // Adjust size as needed
                        theme={isDarkMode ? "dark" : "light"} // Pass the current theme
                        scrollToSection={scrollToSection} //Props passed from parent to child component
                    />
                </div>
                {/* Navbar */}
                <Navbar isDarkMode={isDarkMode} scrollToSection={scrollToSection} /> {/*Props passed from parent to child component*/}
                {/* Theme Toggle */}
                <div className="mx-3">
                    <ThemeToggle onThemeChange={onThemeChange} />
                </div>
            </div>
        </div >
    );
};
export default HeroContainer;