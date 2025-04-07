import { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { content } from "../../data/contents";

interface HorizontalScrollContainerProps {
    children: React.ReactNode;
    isScrolling: boolean;
    setIsScrolling: (isScrolling: boolean) => void;
    isDarkMode: boolean;
    isTransitioning: boolean;
    setIsTransitioning: (isTransitioning: boolean) => void;
}
// Dataset instance loaded from content
const { heroContainer } = content;


//! DESKTOP
const SCROLL_THRESHOLD = 100; // Minimum scroll "effort" required[DESKTOP]
const EDGE_THRESHOLD = 125; // Distance from top/bottom to trigger navigation
const SCROLL_COOLDOWN = 1500; // Cooldown between transitions (prevent spam switching)  [DESKTOP]
// ? MOBILE [TESTING]
const MOBILE_SCROLL_THRESHOLD = 20; // Margin before switching sections [MOBILE]
const VERTICAL_THRESHOLD = 40; // Minimum vertical swipe distance required to trigger navigation [MOBILE]

//* UTILITY: Added section IDs to config
const FIRST_SECTION = "hero";
const LAST_SECTION = "about";

const HorizontalScrollContainer: React.FC<HorizontalScrollContainerProps> = ({ children, isScrolling, setIsScrolling, isTransitioning, setIsTransitioning, isDarkMode }) => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const lastDirection = useRef<"up" | "down">();
    const isWheelingSwiperRef = useRef(false);

    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
    const [isTouchingSwiper, setIsTouchingSwiper] = useState(false);
    const [showTopIndicator, setShowTopIndicator] = useState(false);
    const [showBottomIndicator, setShowBottomIndicator] = useState(false);

    //* UTILITY: Mouse move handler for edge detection
    const handleMouseMove = (event: React.MouseEvent) => {
        if (isSwiperEvent(event.target)) return;

        const y = event.clientY;
        const isNearTop = y <= EDGE_THRESHOLD;
        const isNearBottom = y >= window.innerHeight - EDGE_THRESHOLD;

        // Get current active section from state instead of DOM
        const currentSectionId = activeSectionId;

        // Determine visibility based on both position and active section
        setShowTopIndicator(isNearTop && currentSectionId !== FIRST_SECTION);
        setShowBottomIndicator(isNearBottom && currentSectionId !== LAST_SECTION);
    };

    //* UTILITY: Track if the user is interacting with a Swiper carousel
    const isSwiperEvent = (target: EventTarget | null): boolean => {
        setShowTopIndicator(false);
        setShowBottomIndicator(false);

        if (!target) return false;
        const element = target as HTMLElement;
        return element.closest('.swiper') !== null; // Check if the target is inside a Swiper
    };

    //* UTILITY: Combined Observer: tracks active section .
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
    const handleSectionScroll = useCallback((direction: "left" | "right") => {
        const container = scrollContainerRef.current;
        if (!container || isTransitioning) return;

        // Prevent transitions at section limits
        if ((activeSectionId === FIRST_SECTION && direction === "left") ||
            (activeSectionId === LAST_SECTION && direction === "right")) {
            return;
        }

        //Enable scrolling
        setIsScrolling(true);

        // Start transition
        setIsTransitioning(true);

        // Add initial blur state
        container.classList.add('backdrop-blur-sm');

        // Start complex transition
        setTimeout(() => {
            container.classList.replace('backdrop-blur-sm', 'backdrop-blur-md');
            // Scroll after short delay
            setTimeout(() => {
                container.scrollBy({
                    left: direction === "right" ? container.clientWidth : -container.clientWidth,
                    behavior: "smooth",
                });
            }, 150);
        }, 100);

        // End transition after animation
        setTimeout(() => {
            container.classList.remove('backdrop-blur-md', 'backdrop-blur-sm');
            setIsTransitioning(false);
            setIsScrolling(false);
        }, SCROLL_COOLDOWN);
    }, [setIsScrolling, setIsTransitioning, activeSectionId, isTransitioning]);

    //! Handle wheel scroll (Desktop) [TESTING!!!]
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let deltaAccumulator = 0;
        let timeout: ReturnType<typeof setTimeout>;

        const handleWheel = (event: WheelEvent): void => {
            if (isSwiperEvent(event.target)) {
                isWheelingSwiperRef.current = true;
                return; // Skip if scrolling inside Swiper
            }
            // Clear Swiper state when cursor leaves Swiper area
            if (isWheelingSwiperRef.current && !isSwiperEvent(event.target)) {
                isWheelingSwiperRef.current = false;
            }

            if (!activeSectionId || isScrolling) return;

            // Get scroll direction and mouse position
            const direction = event.deltaY > 0 ? "down" : "up";
            const mouseY = event.clientY;

            // Reset accumulator if direction changes
            if (lastDirection.current && lastDirection.current !== direction) {
                deltaAccumulator = 0;
            }
            lastDirection.current = direction;

            // Accumulate scroll delta (absolute value)
            deltaAccumulator += Math.abs(event.deltaY);

            // Check two conditions for navigation:
            // 1. Minimum scroll effort achieved (SCROLL_THRESHOLD)
            // 2. Cursor near viewport edge (EDGE_THRESHOLD)
            const nearEdge = direction === "down"
                ? mouseY >= window.innerHeight - EDGE_THRESHOLD
                : mouseY <= EDGE_THRESHOLD;

            if (deltaAccumulator >= SCROLL_THRESHOLD && nearEdge) {
                handleSectionScroll(direction === "down" ? "right" : "left");
                event.preventDefault();

                // Reset accumulator and set cooldown
                deltaAccumulator = 0;
                setIsScrolling(true);
                setTimeout(() => setIsScrolling(false), SCROLL_COOLDOWN);
            }

            // Auto-reset accumulator after pause
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                deltaAccumulator = 0;
            }, 300);
        };

        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => container.removeEventListener("wheel", handleWheel);
    }, [isScrolling, activeSectionId, setIsScrolling, handleSectionScroll]);


    // Handle touch start(Mobile)
    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
        const touch = event.touches[0];
        setTouchStart({ x: touch.clientX, y: touch.clientY });
        setIsTouchingSwiper(isSwiperEvent(event.target));
    };

    //! Handle touch move (Mobile) [TESTING]
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

            // Only transition if near edges
            if (!isNearVerticalEdge(direction, MOBILE_SCROLL_THRESHOLD)) return;

            // If still inside Swiper, allow it to handle horizontal swipes
            if (isTouchingSwiper) {
                setIsTouchingSwiper(false);
                if (Math.abs(deltaX) > Math.abs(deltaY)) return;
                if (Math.abs(deltaY) < VERTICAL_THRESHOLD) return;
                if (!isNearVerticalEdge(direction, MOBILE_SCROLL_THRESHOLD)) return;
            }
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

    }, [touchStart, activeSectionId, isScrolling, isTouchingSwiper, isNearVerticalEdge, handleSectionScroll])

    return (
        <div
            className="relative w-screen h-screen"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                setShowTopIndicator(false);
                setShowBottomIndicator(false);
            }}
        >
            {/* Top Indicator */}
            <div className={`
                fixed top-24 left-1/6 md:left-1/10 -translate-x-1/2
                transition-opacity duration-300
                ${showTopIndicator ? 'opacity-100' : 'opacity-0'}
                pointer-events-none z-50
                `}>
                <div className={`${isDarkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"} rounded-full cursor-pointer border-gray-900 border-2 px-2.5 flex font-inter font-semibold items-center animate-pulse-slow`}>
                    <ChevronLeftIcon className="w-7 h-7 -translate-x-1" />
                    <span className="md:inline-flex gap-x-0.5">GO LEFT<span className="hidden md:inline-flex">(SCROLL UP)</span></span>
                </div>
            </div>

            {/* Bottom Indicator */}
            <div className={`
                fixed bottom-5 -right-1/10 md:-right-1/14 -translate-x-1/2
                transition-opacity duration-300
                ${showBottomIndicator ? 'opacity-100' : 'opacity-0'}
                pointer-events-none z-50
                `}>
                <div className={`${isDarkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"} rounded-full cursor-pointer border-gray-900 border-2 px-2.5 flex font-inter font-semibold items-center animate-pulse-slow`}>
                    <span className="md:inline-flex gap-x-0.5">GO RIGHT<span className="hidden md:inline-flex">(SCROLL DOWN)</span></span>
                    <ChevronRightIcon className="w-7 h-7 translate-x-1" />
                </div>
            </div>

            {/*Transition Rotator Logo*/}
            {isTransitioning && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center animate-backdrop-transition pointer-events-none">
                    <img
                        src={heroContainer.logoOnDark} // Replace with your logo path
                        className="w-24 h-24 animate-spin-fade"
                        alt="Loading"
                    />
                </div>
            )}

            {/* Main Horizontal Scroll Container */}
            <div id="horizontal-scroll-container"
                ref={scrollContainerRef}
                className="flex overflow-x-hidden overflow-y-hidden snap-x snap-mandatory w-screen h-screen horizontal-scroll-container"
                onTouchStart={handleTouchStart}
            >
                {children}
            </div>
        </div>
    );
};

export default HorizontalScrollContainer;
