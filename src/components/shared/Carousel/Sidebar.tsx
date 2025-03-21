// src/components/Sidebar.tsx
import React from "react";
import { Menu, MenuButton, Transition } from "@headlessui/react";
import { content } from "../../../data/contents";

interface SidebarProps {
    isDarkMode: boolean;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

// Dataset instance for carousel section
const { carousel } = content;

// Extra projects static dataset loaded from content
const extra_projects = carousel.projects.extra;

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode, isSidebarOpen, setIsSidebarOpen }) => {


    return (
        <>
            {/* Sidebar Overlay */}
            <Transition
                show={isSidebarOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div
                    className="fixed inset-0 bg-transparent bg-opacity-50 z-40"
                    onClick={() => setIsSidebarOpen(false)}
                />
            </Transition>

            {/* Sidebar Menu */}
            <Transition
                show={isSidebarOpen}
                enter="transition-transform duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition-transform duration-300"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <Menu
                    as="div"
                    className={`fixed top-[7rem] ${isDarkMode ? "bg-gray-900 text-white transition-colors duration-300" : "bg-white text-gray-800 transition-colors duration-300"} left-0 h-full w-64 shadow-lg z-50`}>
                    <div className="p-4">
                        {
                            extra_projects.map((project, index) => (
                                <MenuButton className={`w-full`} key={index}>
                                    <a className={`block rounded-full font-inter md:text-sm scale-y-90 tracking-tight leading-none lowercase transition-colors cursor-pointer border border-gray-600 hover:border-transparent md:px-2.5 py-0.5`}
                                    >
                                        {project.subtitle}
                                    </a>
                                </MenuButton>
                            ))}
                    </div>
                </Menu>
            </Transition>
        </>
    );
};

export default Sidebar;