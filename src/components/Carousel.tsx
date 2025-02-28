import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types"; // Import Swiper types properly
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//! Essential import for data access
import { content } from "../data/contents";

interface CarouselProps {
    activeProjectId: string | null;
    setActiveProjectId: (projectId: string) => void;
}

// Dataset instance for carousel section
const { carousel } = content;

// Projects static dataset loaded from content
const projects = carousel.projects.dataset;

const Carousel: React.FC<CarouselProps> = ({ activeProjectId, setActiveProjectId }) => {
    // Find the project data for the selected ID
    const project = projects.find((p) => p.id === activeProjectId) || projects[0];

    // Track the current displayed title, media and index
    const [currentTitle, setCurrentTitle] = useState<string>(project.title);
    const [lastMediaType, setLastMediaType] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Ref to track the current video element
    const videoRef = useRef<HTMLVideoElement | null>(null);

    // Reset everything when switching projects
    useEffect(() => {
        setCurrentTitle(project.title);
        setLastMediaType(null); // Reset media tracking on project change
        setActiveIndex(0) //Reset pagination on project change
    }, [activeProjectId, project.title]);

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
        const activeMedia = project.media[newIndex];

        if (!activeMedia) return;

        console.log(`🔄 Swiping to index: ${newIndex} | Media type: ${activeMedia.type}`);

        // Track media type transitions
        if (activeMedia.type === "image") {
            setCurrentTitle(activeMedia.title ?? project.title);
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
            <h1 className={`${carousel.title.className}`}>
                {currentTitle} {/*Dinamically loads project title or media title*/}
            </h1>
            <h6 className={carousel.subtitle.className}>
                {project.subtitle} {/*Project subtitle*/}
            </h6>
            {/*Grid Layout*/}
            <div className={carousel.gridLayout.className}>
                <div className={carousel.gridLayout.colspan6.className}>
                    <div className={carousel.projects.className}>
                        {projects.map((project, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveProjectId(project.id)} // Update project on click
                                className={carousel.button.className}
                            >
                                {project.title} {/*Proyect 1st artist's name*/}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 2nd Column: Swiper Carousel */}
                <div className="col-span-6">
                    <Swiper
                        onSlideChange={handleSlideChange}
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        className={carousel.swiper.className}
                    >
                        {project.media.map((item, index) => (
                            <SwiperSlide key={index}>
                                {/* Pagination Display (Current Slide / Total) */}
                                <div className="absolute top-2 right-2 bg-[#ffffff80] text-gray-700 px-2 py-1 rounded-full">
                                    {activeIndex + 1} / {project.media.length}
                                </div>
                                <div className={carousel.swiperSlide.className}
                                    onClick={item.type === "video" ? handleVideoClick : undefined}>
                                    {item.type === "image" ? (
                                        <img
                                            src={item.url}
                                            alt={`Slide ${index}`}
                                            className={carousel.swiperSlide.media.className}
                                            title={item.title}
                                        />
                                    ) : (
                                        <video
                                            ref={videoRef}
                                            src={item.url}
                                            autoPlay
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
                        {activeIndex === project.media.length - 1
                            ? ".swiper-button-next { display: none; }"
                            : ".swiper-button-next { display: flex; }"}
                    </style>
                </div>
            </div>
        </section >
    )
}
export default Carousel;