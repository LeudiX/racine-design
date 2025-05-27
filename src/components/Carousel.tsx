import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types"; // Import Swiper types properly
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//! Essential import for data access
import { content } from "../data/contents";
import { Project } from "../components/shared/Carousel/Project" // Common Projects interface
import Sidebar from "./shared/Carousel/Sidebar";
import MobileMenu from "./shared/Carousel/MobileMenu";
import DesktopMenu from "./shared/Carousel/DesktopMenu";


interface CarouselProps {
    activeProjectId: string | null;
    setActiveProjectId: (projectId: string) => void;
    activeProject: Project | null;
    setActiveProject: (project: Project | null) => void;
    isDarkMode: boolean;
    activeSubtitleIndex: number;
    setActiveSubtitleIndex: (index: number) => void;
}

// Dataset instance for carousel section
const { carousel } = content;

// Default projects static dataset loaded from content
const default_projects = carousel.projects.artists;

const Carousel: React.FC<CarouselProps> = ({ activeProjectId, setActiveProjectId, activeProject, setActiveProject, activeSubtitleIndex, setActiveSubtitleIndex, isDarkMode }) => {

    // Find the active project
    const project: Project = default_projects.find((p) => p.id === activeProjectId)!;

    // Ref to track if the project change originated from a subtitle click
    const isSubtitleClickRef = useRef(false);

    // Get the active subtitle and media
    const activeSubtitle = project.projects[activeSubtitleIndex];
    const media = activeSubtitle?.media || [];

    // Track the current displayed title, media and index
    const [currentTitle, setCurrentTitle] = useState<string>(project.title);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [lastMediaType, setLastMediaType] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    //Function to handle the Sidebar open and close events
    const handleToggleSidebar = (isOpen: boolean) => {
        setIsSidebarOpen(isOpen);
    };

    // Ref to track the current video element
    const videoRef = useRef<HTMLVideoElement | null>(null);

    // Ref to track the Swiper instance
    const swiperRef = useRef<SwiperClass | null>(null);

    //  Reset states when switching projects (but not for subtitle clicks)
    useEffect(() => {
        if (!isSubtitleClickRef.current) {
            setActiveSubtitleIndex(0); // Only reset subtitle index for project button clicks
        }
        setCurrentTitle(project.title);
        setLastMediaType(null); // Reset media tracking on project change
        setActiveIndex(0) //Reset pagination on project change

        if (swiperRef.current) {
            swiperRef.current.slideTo(0, 0); //Force Swiper to go to the first slide with no animation
        }
        // Reset the ref after handling
        isSubtitleClickRef.current = false;
    }, [activeProjectId, project.title, setActiveSubtitleIndex]);


    // Function to handle subtitle click in the sidebar menu
    const handleSubtitleClick = (projectId: string, subtitleIndex: number) => {
        isSubtitleClickRef.current = true; // Mark the project change as a subtitle click
        setActiveProjectId(projectId); // Update the active project
        setActiveSubtitleIndex(subtitleIndex); // Update the active subtitle
        setActiveIndex(0); // Reset the active index when a new subtitle is selected
        if (swiperRef.current) {
            swiperRef.current.slideTo(0, 0); //Force Swiper to go to the first slide with no animation
        }
    };

    // Function to handle video play/pause
    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                void videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    // Function to get project titles through slides changes
    const handleSlideChange = (swiper: SwiperClass) => {
        const newIndex: number = swiper.activeIndex; // Ensure activeIndex is always a number
        setActiveIndex(newIndex)

        const activeMedia = media[newIndex];
        if (!activeMedia) return;

        /**
         * DEBUG: ONLY
         * console.log(`🔄 Swiping to index: ${newIndex} | Media type: ${activeMedia.type}`);
         */

        // Track media type transitions
        if (activeMedia.type === "image") {
            setCurrentTitle(activeMedia.name ?? project.title);
            setLastMediaType("image");
        } else if (activeMedia.type === "video") {
            if (lastMediaType === "image") {
                setCurrentTitle(project.title); // Reset title when going back to video
            }
            setLastMediaType("video");
        }
    };

    return (
        <section id="carousel" className={carousel.className}>
            {/* Inject custom Swiper styles */}
            <style>{carousel.swiperStyles}</style>

            <div>
                {/*External Sidebar Component*/}
                <Sidebar isDarkMode={isDarkMode} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={handleToggleSidebar} projects={default_projects} onSubtitleClick={handleSubtitleClick} activeProject={activeProject} setActiveProject={setActiveProject} />
            </div>

            {/*Grid Layout*/}
            <div className={`${carousel.gridLayout.className}`}>
                {/* 1st Column: Projects Grid */}
                <div className="col-span-2 md:col-start-1">

                    <h4 className={`${carousel.title.className}`}>
                        {currentTitle} {/*Dinamically loads project title or media title*/}
                    </h4>
                    <h6 className={carousel.subtitle.className}>
                        {activeSubtitle?.subtitle} {/*Project subtitle*/}
                    </h6>

                    {/*Custom Menu (Visible on Mobile)*/}
                    <MobileMenu className="md:hidden" isSidebarOpen={isSidebarOpen} setIsSidebarOpen={handleToggleSidebar} projects={default_projects} onSubtitleClick={handleSubtitleClick} activeProject={activeProject} setActiveProject={setActiveProject} />

                    {/*Custom Menu (Visibile on Desktop)*/}
                    <DesktopMenu className="hidden md:block" projects={default_projects} onSubtitleClick={handleSubtitleClick} activeProject={activeProject} setActiveProject={setActiveProject} />

                </div>
                {/* 2nd Column: Swiper Carousel */}
                <div className="md:col-span-6 md:col-start-4">
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper; // Store the Swiper instance
                        }}
                        onSlideChange={handleSlideChange}
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        className={carousel.swiper.className}
                    >
                        {media.map((item, index) => (
                            <SwiperSlide key={index}>
                                {/* Pagination Display (Current Slide / Total) */}
                                <div className="absolute top-2 right-2 bg-[#ffffff80] text-gray-700 px-2 py-1 rounded-full">
                                    {activeIndex + 1} / {media.length}
                                </div>
                                <div className={carousel.swiperSlide.className}
                                    onClick={item.type === "video" ? handleVideoClick : undefined}>
                                    {item.type === "image" ? (
                                        <img
                                            src={item.url}
                                            alt={item.title}
                                            className={carousel.swiperSlide.media.className}
                                            title={item.title}
                                        />
                                    ) : (
                                        <video
                                            ref={videoRef}
                                            src={item.url}
                                            autoPlay
                                            title={item.title}
                                            muted
                                            loop
                                            className={carousel.swiperSlide.media.className}
                                        />
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Hide Prev Button if at first slide */}
                    <style>
                        {activeIndex === 0
                            ? ".swiper-button-prev { display: none; }"
                            : ".swiper-button-prev { display: flex; }"}
                    </style>

                    {/* Hide Next Button if at last slide */}
                    <style>
                        {activeIndex === media.length - 1
                            ? ".swiper-button-next { display: none; }"
                            : ".swiper-button-next { display: flex; }"}
                    </style>
                </div>
            </div>
        </section >
    )
}
export default Carousel;