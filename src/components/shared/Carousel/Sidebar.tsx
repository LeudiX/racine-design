import React from "react";
import { Menu, MenuButton, Transition } from "@headlessui/react";
import { Project } from "./Project" // Common Projects interface

interface SidebarProps {
    isDarkMode: boolean;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isSidebarOpen: boolean) => void;
    activeProject: Project | null;
    setActiveProject: (project: Project | null) => void;
    projects: readonly Project[]; // Accept readonly arrays
    onSubtitleClick: (projectId: string, subtitleIndex: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode, isSidebarOpen, setIsSidebarOpen, activeProject, setActiveProject, projects, onSubtitleClick }) => {
    // Close sidebar and reset states
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    // Close project dropdowns and reset states
    const closeProjectTree = () => {
        setActiveProject(null);
    };

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
                    onClick={closeSidebar}
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
                    className={`fixed top-[6.5rem] ${isDarkMode ? "bg-black text-white transition-colors duration-300" : "bg-white text-gray-950 transition-colors duration-300"} left-0 h-full w-64 shadow-lg z-50`}>
                    <div className="p-4">
                        {/* Main Projects */}
                        {
                            projects.map((project) => (
                                <div key={project.id}>
                                    {/*Project Main Title*/}
                                    <MenuButton className={`w-full`}>
                                        <a
                                            onClick={() => { setActiveProject(project); onSubtitleClick(project.id, 0) }}
                                            className={`block rounded-full font-inter md:text-sm scale-y-90 tracking-tight leading-none lowercase transition-colors cursor-pointer border border-gray-600 hover:border-transparent md:px-2.5 py-0.5
                                                   `}
                                        >
                                            {project.title}
                                        </a>
                                    </MenuButton>
                                    {/* Subtitles */}
                                    {activeProject?.id === project.id && (
                                        <Transition
                                            show={activeProject?.id === project.id}
                                            enter="transition-all duration-300"
                                            enterFrom="opacity-0 translate-y-4"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition-all duration-300"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-4"
                                        >
                                            <div className="pl-8">
                                                {project.projects.map((subtitle, index) => (
                                                    <MenuButton key={index} className="w-full">
                                                        <a
                                                            onClick={() => {
                                                                onSubtitleClick(project.id, index);
                                                                closeProjectTree();
                                                                closeSidebar();
                                                            }}
                                                            className={`block rounded-full font-inter md:text-sm scale-y-90 tracking-tight leading-none lowercase transition-colors cursor-pointer border border-gray-600 hover:border-transparent md:px-2.5 py-0.5 
                                                                    }`}
                                                        >
                                                            {subtitle.subtitle}
                                                        </a>
                                                    </MenuButton>
                                                ))}
                                            </div>
                                        </Transition>
                                    )}
                                </div>
                            ))}
                    </div>
                </Menu>
            </Transition>
        </>
    );
};

export default Sidebar;