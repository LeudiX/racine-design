import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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

    // Ref to track the current video element
    const videoRef = useRef<HTMLVideoElement | null>(null);

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

    return (
        <section id="carousel" className={carousel.className}>
            {/* Inject custom Swiper styles */}
            <style>{carousel.swiperStyles}</style>

            <h4 className={carousel.title.className}>
                {project.title} {/*Project title*/}
            </h4>

            {/*Grid Layout*/}
            <div className={carousel.gridLayout.className}>
                <div className={carousel.gridLayout.colspan5.className}>
                    <h6 className={carousel.subtitle.className}>
                        {project.subtitle} {/*Project subtitle*/}
                    </h6>
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
                <div className="col-span-6 py-5">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        loop
                        className={carousel.swiper.className}
                    >
                        {project.media.map((item, index) => (
                            <SwiperSlide key={index}>
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
                </div>
            </div>
        </section >
    )
}
export default Carousel;