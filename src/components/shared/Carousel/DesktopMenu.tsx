import React from 'react';
import { Menu, MenuButton, Transition } from "@headlessui/react";
import { Project } from "./Project" // Common Projects interface

interface DesktopMenuProps {
    projects: readonly Project[]; // Accept readonly arrays
    activeProject: Project | null;
    setActiveProject: (project: Project | null) => void;
    onSubtitleClick: (projectId: string, subtitleIndex: number) => void;
    className: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ projects, activeProject, setActiveProject, onSubtitleClick, className }) => {
    //const [activeProject, setActiveProject] = useState<Project | null>(null);

    // Close project dropdowns and reset states
    const closeProjectTree = () => {
        setActiveProject(null);
    };

    return (
        <>
            <Menu
                as="div"
                className={className}
            >
                <div>
                    {/* Main Projects */}
                    {
                        projects.map((project) => (
                            <div key={project.id}>
                                {/*Project Main Title*/}
                                <MenuButton className={`w-40`}>
                                    <a
                                        onClick={() => setActiveProject(project)}
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
        </>
    )
}

export default DesktopMenu;
