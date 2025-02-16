/*This component handles light/dark mode switching*/
import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

// Define the props interface to include an optional `onThemeChange` callback
interface ThemeToggleProps {
    onThemeChange?: (isDarkMode: boolean) => void;
}


const ThemeToggle: React.FC<ThemeToggleProps> = ({ onThemeChange }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        localStorage.setItem('theme','light');
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
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
        >
            {isDarkMode ? <SunIcon className="h-6 w-6 text-yellow-400" /> : <MoonIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />}
        </button>
    );

};
export default ThemeToggle;