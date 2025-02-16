import React from "react";
import ThemeToggle from "./ThemeToggle";


const DarKModeTest: React.FC = () => {
    return (
        <div className="min-h-screen">
            <ThemeToggle />
            <div className="p-4">
                <h1 className="text-2xl font-bold">Dark Mode Test</h1>
                <p>Toggle the theme to see the background color change.</p>
            </div>
        </div>
    );
};
export default DarKModeTest;
