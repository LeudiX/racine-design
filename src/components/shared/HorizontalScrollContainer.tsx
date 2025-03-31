import { useRef, useEffect, useState, useCallback } from "react";

interface HorizontalScrollContainerProps {
    children: React.ReactNode;
}

const SCROLL_THRESHOLD = 20; // Margin before switching sections
const SCROLL_COOLDOWN = 500; // Delay to prevent spam switching
const VERTICAL_THRESHOLD = 40; // Minimum vertical swipe distance required to trigger navigation

const HorizontalScrollContainer: React.FC<HorizontalScrollContainerProps> = ({ children }) => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
    const [isTouchingSwiper, setIsTouchingSwiper] = useState(false);

    // Track if the user is interacting with a Swiper carousel
    const isSwiperEvent = (target: EventTarget | null): boolean => {
        if (!target) return false;
        const element = target as HTMLElement;
        return element.closest('.swiper') !== null; // Check if the target is inside a Swiper
    };

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
    }, []);

    // Check if user is near the top or bottom of a section
    const isNearVerticalEdge = useCallback(
        (direction: "up" | "down"): boolean => {
            if (!activeSectionId) return false;

            const section = document.getElementById(activeSectionId);
            if (!section) return false;
            const { scrollTop, scrollHeight, clientHeight } = section;
            return direction === "down"
                ? scrollTop + clientHeight >= scrollHeight - SCROLL_THRESHOLD
                : scrollTop <= SCROLL_THRESHOLD;
        },
        [activeSectionId]
    );

    // Handle wheel scroll (Desktop) [WORKING GOOD]
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleWheel = (event: WheelEvent): void => {
            if (isSwiperEvent(event.target)) return; // Skip if scrolling inside Swiper
            if (!activeSectionId || isScrolling) return;
            if (!isNearVerticalEdge(event.deltaY > 0 ? "down" : "up")) return; // Only transition if near edges

            setIsScrolling(true);

            const scrollAmount = container.clientWidth;
            container.scrollBy({
                left: event.deltaY > 0 ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });
            event.preventDefault();
            setTimeout(() => setIsScrolling(false), SCROLL_COOLDOWN);
        };

        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => container.removeEventListener("wheel", handleWheel);
    }, [isScrolling, activeSectionId, isNearVerticalEdge]);

    // Handle touch scroll (Mobile)
    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
        const touch = event.touches[0];
        setTouchStart({ x: touch.clientX, y: touch.clientY });
        setIsTouchingSwiper(isSwiperEvent(event.target));
    };

    // Handle touch move (Mobile)
    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => {
        if (!touchStart || !activeSectionId || isScrolling) return;

        const touch = event.touches[0];
        const deltaX = touchStart.x - touch.clientX;
        const deltaY = touchStart.y - touch.clientY;

        // Check if interacting with Swiper and determine direction
        if (isTouchingSwiper) {
            const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
            if (isHorizontalSwipe) {
                // Let Swiper handle horizontal swipes
                return;
            } else 
                if (Math.abs(deltaY) < VERTICAL_THRESHOLD) {
                    return; // Require minimum vertical swipe distance for navigation
                }
        }

        // Check if near the top/bottom edge of the current section
        const direction = deltaY > 0 ? "down" : "up";
        console.log(direction)
        if (!isNearVerticalEdge(direction)) return;

        // Trigger horizontal navigation and prevent default browser behavior
        const container = scrollContainerRef.current;
        if (!container) return;
        const scrollAmount = container.clientWidth;
        container.scrollBy({
            left: deltaY > 0 ? scrollAmount : -scrollAmount,
            behavior: "smooth",
        });
        event.preventDefault(); // Prevent browser's default scroll/overscroll
        setTouchStart(null); // Reset touch after handling
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
