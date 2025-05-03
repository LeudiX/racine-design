/*This component handles light/dark mode switching*/
import React, { useEffect, useState } from "react";
import { content } from "../../data/contents"
import { ImgTheme } from "./ImgTheme/ImgTheme";

// Define the props interface to include an optional `onThemeChange` callback
interface ThemeToggleProps {
    onThemeChange?: (isDarkMode: boolean) => void;
}

const { heroContainer } = content;

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onThemeChange }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        localStorage.setItem('theme', 'light');
        // Check localStorage for theme preference
        if (localStorage.theme === "light" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: light)").matches)) {
            document.documentElement.classList.add("light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.remove("light");
            setIsDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            localStorage.theme = 'light';
            console.log("Switched to light mode");
        } else {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
            localStorage.theme = 'dark';
            console.log("Switched to dark mode");
        }
        setIsDarkMode(!isDarkMode);
        // Notify parent components about the theme change
        if (onThemeChange) {
            onThemeChange(!isDarkMode);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-transparent"
        >
            <ImgTheme className="h-6 w-6 transition-transform duration-300 hover:scale-y-125  cursor-pointer" imgID={"racineThemeLogo"} imgSrcLight={heroContainer.themeIconOnLight} imgSrcDark={heroContainer.themeIconOnDark} imgAlt={"Racine Theme Icon"} theme={isDarkMode ? "dark" : "light"} />
        </button>
    );

};
export default ThemeToggle;