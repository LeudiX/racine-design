import { useRef, useEffect, useState, useCallback } from "react";

interface HorizontalScrollContainerProps {
    children: React.ReactNode;
}

const SCROLL_THRESHOLD = 50; // Margin before switching sections
const SCROLL_COOLDOWN = 500; // Delay to prevent spam switching

const HorizontalScrollContainer: React.FC<HorizontalScrollContainerProps> = ({ children}) => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [touchStartY, setTouchStartY] = useState<number | null>(null);

    // Combined Observer: tracks active section .
    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>(".scroll-section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        setActiveSectionId(sectionId);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    });

    // Check if user is near the top or bottom of a section
    const isNearVerticalEdge = useCallback(
        (direction: "up" | "down"): boolean => {
            if (!activeSectionId) return false;

            const section = document.getElementById(activeSectionId);
            if (!section) return false;

            const { scrollTop, scrollHeight, clientHeight } = section;

            // Allow normal scrolling inside the section first
            if (direction === "down") {
                return scrollTop + clientHeight >= scrollHeight - SCROLL_THRESHOLD; // Only switch when at bottom
            } else {
                return scrollTop <= SCROLL_THRESHOLD; // Only switch when at top
            }
        },
        [activeSectionId]
    );

    // Handle wheel scroll (Desktop) [WORKING GOOD]
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleWheel = (event: WheelEvent): void => {
            if (!activeSectionId || isScrolling) return;

            if (!isNearVerticalEdge(event.deltaY > 0 ? "down" : "up")) return; // Only transition if near edges

            event.preventDefault();
            setIsScrolling(true);

            const scrollAmount = container.clientWidth;
            container.scrollBy({
                left: event.deltaY > 0 ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });

            setTimeout(() => setIsScrolling(false), SCROLL_COOLDOWN);
        };

        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => container.removeEventListener("wheel", handleWheel);
    }, [isScrolling, activeSectionId, isNearVerticalEdge]);

    // Handle touch scroll (Mobile)
    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
        setTouchStartY(event.touches[0].clientY);
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => {
        if (!touchStartY || !activeSectionId || isScrolling) return;

        const touchEndY = event.touches[0].clientY;
        const deltaY = touchStartY - touchEndY;

        if (!isNearVerticalEdge(deltaY > 0 ? "down" : "up")) return; // Only transition if near edges

        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollAmount = container.clientWidth;
        container.scrollBy({
            left: deltaY > 0 ? scrollAmount : -scrollAmount,
            behavior: "smooth",
        });

        setTouchStartY(null);
    };

    return (
        <div id="horizontal-scroll-container"
            ref={scrollContainerRef}
            className="flex overflow-x-hidden overflow-y-hidden snap-x snap-mandatory w-screen h-screen horizontal-scroll-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            {children}
        </div>
    );
};

export default HorizontalScrollContainer;
