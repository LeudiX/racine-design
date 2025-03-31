import { useRef, useEffect, useState, useCallback } from "react";

interface HorizontalScrollContainerProps {
    children: React.ReactNode;
}
//! DESKTOP
const SCROLL_THRESHOLD = 50; // Margin before switching sections [DESKTOP]
const SCROLL_COOLDOWN = 500; // Delay to prevent spam switching  [DESKTOP]
// ? MOBILE [TESTING]
const MOBILE_SCROLL_THRESHOLD = 20; // Margin before switching sections [MOBILE]
const VERTICAL_THRESHOLD = 40; // Minimum vertical swipe distance required to trigger navigation [MOBILE]


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

    //* UTILITY:  Check if user is near the top or bottom of a section
    const isNearVerticalEdge = useCallback(
        (direction: "up" | "down", SCROLL_THRESHOLD: number): boolean => {
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

    //* UTILITY: Handle section transition
    const handleSectionScroll = (direction: "left" | "right") => {
        if (!scrollContainerRef.current) return;

        setIsScrolling(true);
        scrollContainerRef.current.scrollBy({
            left: direction === "right" ? scrollContainerRef.current.clientWidth : -scrollContainerRef.current.clientWidth,
            behavior: "smooth",
        });

        setTimeout(() => setIsScrolling(false), SCROLL_COOLDOWN);
    };

    // Handle wheel scroll (Desktop) [WORKING GOOD]
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleWheel = (event: WheelEvent): void => {
            if (isSwiperEvent(event.target)) {
                setIsTouchingSwiper(true); // Ensure we track Swiper interaction
                return; // Skip if scrolling inside Swiper
            }
            if (!activeSectionId || isScrolling) return;

            // Detect scroll direction
            const direction = event.deltaY > 0 ? "down" : "up";


            if (isTouchingSwiper) {
                setIsTouchingSwiper(false); // Reset when exiting Swiper
                if (!isNearVerticalEdge(direction, SCROLL_THRESHOLD)) return; // Only transition if near edges
            } else {
                // Check if user is at the vertical edge
                if (!isNearVerticalEdge(direction, SCROLL_THRESHOLD)) return;
            }

            handleSectionScroll(direction === "down" ? "right" : "left");
            event.preventDefault();

        };

        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => container.removeEventListener("wheel", handleWheel);
    }, [isScrolling, activeSectionId, isNearVerticalEdge, isTouchingSwiper]);


    // Handle touch start(Mobile)
    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
        const touch = event.touches[0];
        setTouchStart({ x: touch.clientX, y: touch.clientY });
        setIsTouchingSwiper(isSwiperEvent(event.target));
    };

    // Handle touch move (Mobile) [TESTING]
    useEffect(() => {
        // Trigger horizontal navigation and prevent default browser behavior
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleTouchMove = (event: TouchEvent): void => {
            if (!touchStart || !activeSectionId || isScrolling) return;

            const touch = event.touches[0];
            const deltaX = touchStart.x - touch.clientX;
            const deltaY = touchStart.y - touch.clientY;

            // Check if near the top/bottom edge of the current section
            const direction = deltaY > 0 ? "down" : "up";

            // If still inside Swiper, allow it to handle horizontal swipes
            if (isTouchingSwiper) {
                if (Math.abs(deltaX) > Math.abs(deltaY)) return;
                if (Math.abs(deltaY) < VERTICAL_THRESHOLD) return;
            } else {
                setIsTouchingSwiper(false);
                if (!isNearVerticalEdge(direction, MOBILE_SCROLL_THRESHOLD)) return;
            }

            console.log(isTouchingSwiper)

            handleSectionScroll(direction === "down" ? "right" : "left");
            event.preventDefault(); // Prevent browser's default scroll/overscroll
            setTouchStart(null); // Reset touch after handling
        };

        // Add the event listener with { passive: false }
        container.addEventListener('touchmove', handleTouchMove, { passive: false });

        // Cleanup
        return () => {
            container.removeEventListener('touchmove', handleTouchMove);
        };

    }, [touchStart, activeSectionId, isScrolling, isTouchingSwiper, isNearVerticalEdge])

    return (
        <div id="horizontal-scroll-container"
            ref={scrollContainerRef}
            className="flex overflow-x-hidden overflow-y-hidden snap-x snap-mandatory w-screen h-screen horizontal-scroll-container"
            onTouchStart={handleTouchStart}
        >
            {children}
        </div>
    );
};

export default HorizontalScrollContainer;
