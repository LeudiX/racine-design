import { useState, useEffect } from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 p-2 rounded-full shadow-md transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                } bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer pointer-events-auto z-50`}
        >
            <ChevronDoubleUpIcon className="w-6 h-6 text-gray-800 dark:text-white" />
        </button>
    );
};

export default ScrollToTop;