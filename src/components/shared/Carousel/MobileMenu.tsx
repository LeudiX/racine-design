import React from 'react';
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

//! Essential import for data access
import { content } from "../../../data/contents";
import { Project } from "./Project";

interface MobileMenuProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isSidebarOpen: boolean) => void;
    projects: readonly Project[];
    activeProject: Project | null;
    setActiveProject: (project: Project | null) => void;
    onSubtitleClick: (projectId: string, subtitleIndex: number) => void;
    className: string;
}

// Dataset instance for carousel section
const { carousel } = content;

const MobileMenu: React.FC<MobileMenuProps> = ({ isSidebarOpen, setIsSidebarOpen, projects, setActiveProject, onSubtitleClick, className }) => {
    return (
        <div className={`${carousel.projects.className} ${className}`}>
            {projects.slice(0, 5).map((project) => (
                <button
                    key={project.id}
                    onClick={() =>{setActiveProject(project); onSubtitleClick(project.id,0)}} // Updated handler
                    className={carousel.button.className}
                >
                    {project.title} {/*Proyect 1st artist's name*/}
                </button>

            ))}
            {/*Sidebar Button Toggle*/}
            <button onClick={() => { setIsSidebarOpen(!isSidebarOpen) }} className={carousel.button.className}>
                more
                {isSidebarOpen ? (
                    <XMarkIcon aria-hidden="true" className="-mr-3 size-4 inline-block" />
                ) : (
                    <ChevronDownIcon aria-hidden="true" className="-mr-3 size-4 inline-block" />
                )}

            </button>
        </div>
    )
}

export default MobileMenu;