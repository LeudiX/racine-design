import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface MediaItem {
    type: string;
    url: string;
    title?: string;
}

interface Project {
    id: string;
    title: string;
    subtitle: string;
    artists: string[];
    media: MediaItem[];
}

interface CarouselProps {
    activeProjectId: string | null;
}

const Carousel: React.FC<CarouselProps> = ({ activeProjectId }) => {

    // Custom styles for Swiper navigation and pagination
    const swiperStyles = `
        .swiper-button-next, .swiper-button-prev {
        color: #101828; /* Custom color for arrows */
        width: 35px;
        height: 35px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        }
        .swiper-button-next::after, .swiper-button-prev::after {
        font-size: 15px;
        }
        .swiper-pagination-bullet {
        background-color: rgba(255, 255, 255, 0.5); /* Custom color for pagination dots */
        opacity: 0.5;
        width: 10px;
        height: 10px;
        margin: 0 5px !important;
        }
        .swiper-pagination-bullet-active {
        opacity: 1;
        }
        `;

    //Projects Dataset
    const projects: Project[] = [
        {
            id: "dorian",
            title: "Dorian Electra",
            subtitle: "My Agenda",
            artists: ["Dorian"],
            media: [
                { type: "image", url: "/media/dorian_electra/1.jpeg", title: "Dorian Electra" },
                { type: "video", url: "/media/dorian_electra/dorian_electra_my_agenda_2021.mp4" },
                { type: "image", url: "/media/dorian_electra/2.jpg", title: "Dorian Electra" },
                { type: "image", url: "/media/dorian_electra/3.jpg", title: "Dorian Electra" },
            ],
        },
        {
            id: "lilnas",
            title: "Lil NasX",
            subtitle: "Custom Design",
            artists: ["Lil NasX"],
            media: [
                { type: "video", url: "/media/lil_nasx/lil_nasx_vitaminwater_2022.mp4" },
                { type: "image", url: "/media/lil_nasx/4.jpg", title: "Lil NasX" },
                { type: "image", url: "/media/lil_nasx/5.jpg", title: "Lil NasX" },
                { type: "image", url: "/media/lil_nasx/6.jpg", title: "Lil NasX" },
                { type: "image", url: "/media/lil_nasx/7.jpg", title: "Lil NasX" },
                { type: "image", url: "/media/lil_nasx/8.jpg", title: "Lil NasX" },
            ],
        },
        {
            id: "papermag",
            title: "Paper Mag",
            subtitle: "Interview",
            artists: ["Paper Mag"],
            media: [
                { type: "image", url: "/media/paper_mag/1.jpg", title: "Dorian Electra" },
                { type: "image", url: "/media/paper_mag/2.jpg", title: "Gollum Prince" },
                { type: "image", url: "/media/paper_mag/3.jpg", title: "Lil Texas" },
                { type: "image", url: "/media/paper_mag/4.jpg", title: "Paolo Perfeccion" },
                { type: "image", url: "/media/paper_mag/5.jpg", title: "Dizzy Fae" },
            ],
        }
    ]

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
        <section id="carousel" className="scroll-section items-center md:my-20 my-10 p-10 snap-always w-screen h-screen flex-shrink-0 overflow-y-auto">
            {/* Inject custom Swiper styles */}
            <style>{swiperStyles}</style>

            <h4 className="font-allumi font-bold  uppercase mb-2 text-left text-2xl max-w-2xl w-full">
                {project.title} {/*Project title*/}
            </h4>

            {/*Grid Layout*/}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 md:pb-20">
                <div className="col-span-5 md:col-span-3">
                    <h6 className="text-left text-lg font-bold mb-4">
                        {project.subtitle} {/*Proyect subtitle*/}
                    </h6>
                    <div className="grid grid-cols-3 md:grid-cols-2 gap-2 ">
                        {projects.map((project, index) => (
                            <button
                                key={index}
                                
                                className="rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-2  py-2 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                            >
                                {project.artists[0]} {/*Proyect 1st artist's name*/}
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
                        className="w-full h-[500px] md:h-[760px] overflow-hidden"
                    >
                        {project.media.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center h-full"
                                    onClick={item.type === "video" ? handleVideoClick : undefined}>
                                    {item.type === "image" ? (
                                        <img
                                            src={item.url}
                                            alt={`Slide ${index}`}
                                            className="object-cover w-full h-full"
                                            title={item.title}
                                        />
                                    ) : (
                                        <video
                                            ref={videoRef}
                                            src={item.url}
                                            autoPlay
                                            muted
                                            loop
                                            className="object-cover w-full h-full"
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