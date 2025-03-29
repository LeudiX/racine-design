import React from 'react';
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

//! Essential import for data access
import { content } from "../../../data/contents";
import { Project } from "./Project";

interface MobileMenuProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isSidebarOpen: boolean) => void;
    projects: readonly Project[];
    onButtonClick: (projectId: string) => void;
    className: string;
}

// Dataset instance for carousel section
const { carousel } = content;

const MobileMenu: React.FC<MobileMenuProps> = ({ isSidebarOpen, setIsSidebarOpen, projects, onButtonClick, className }) => {
    return (
        <div className={`${carousel.projects.className} ${className}`}>
            {projects.slice(0, 5).map((project) => (
                <button
                    key={project.id}
                    onClick={() => onButtonClick(project.id)} // Updated handler
                    className={carousel.button.className}
                >
                    {project.title} {/*Proyect 1st artist's name*/}
                </button>

            ))}
            {/*Sidebar Button Toggle*/}
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={carousel.button.className}>
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