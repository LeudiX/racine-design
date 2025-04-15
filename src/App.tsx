import { polyfill } from 'smoothscroll-polyfill'
import React, { useState, useEffect, useRef } from 'react';
import HorizontalScrollContainer from './components/shared/HorizontalScrollContainer'
import HeroContainer from './components/HeroContainer'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Carousel from './components/Carousel'
import About from './components/About'
import SchemaMarkup from './components/seo/SchemaMarkup';
import Inquiries from './components/Inquiries';

const App: React.FC = () => {
  // Dark Mode Handling
  const [isDarkMode, setIsDarkMode] = useState(false);

  // State to track if a carousel should be shown; null means no carousel
  const [carouselProjectId, setCarouselProjectId] = useState<string | null>(null);

  // State to track the active subtitle index in sidebar menu
  const [activeSubtitleIndex, setActiveSubtitleIndex] = useState<number>(0);

  // Ref to track if the project change originated from a subtitle click
  const isSubtitleClickRef = useRef(false);

  //State to track the scrolling of the system in real time
  const [isScrolling, setIsScrolling] = useState(false);

  //State for track the transition between sections
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle theme change
  const handleThemeChange = (isDarkMode: boolean) => {
    setIsDarkMode(isDarkMode);
  };

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    const container = document.getElementById("horizontal-scroll-container");
    if (section && container) {

      //Enable scrolling
      setIsScrolling(true);
      // Start transition
      setIsTransitioning(true);

      // Add initial blur state
      container.classList.add('backdrop-blur-sm');

      // Reset the vertical scroll position so that the section is a aligned at the top.
      section.scrollTop = 0;

      // Get the section’s left offset relative to the container
      const sectionLeft = section.offsetLeft;

      // Start complex transition
      setTimeout(() => {
        container.classList.replace('backdrop-blur-sm', 'backdrop-blur-md');
        // Scroll after short delay
        setTimeout(() => {
          // Use scrollIntoView to smoothly scroll the section into view
          container.scrollTo({
            left: sectionLeft,
            behavior: "smooth",  // Aligns the section at the top of the viewport
          });
        }, 500);
      }, 100);

      // End transition after animation
      setTimeout(() => {
        container.classList.remove('backdrop-blur-md', 'backdrop-blur-sm');
        setIsTransitioning(false);
        setIsScrolling(false);
      }, 1500);
    }
  };

  useEffect(() => {
    polyfill(); //Ensure smooth scroll behavior between multiple browser devices

    if (!isSubtitleClickRef.current) {
      setActiveSubtitleIndex(0); // Only reset subtitle index for project portrait button clicks
    }
    isSubtitleClickRef.current = true;  // Mark the project change as a subtitle click
  }, []) // The scrolling process will wait until carouselProjectId updates

  // Callback from Gallery when a portrait is clicked:
  const handlePortraitClick = (projectId: string): void => {
    isSubtitleClickRef.current = false; // Mark the project change as a button click
    setActiveSubtitleIndex(0); // Active the first subtitle index when button clicked
    setCarouselProjectId(projectId);
    setTimeout(() => {
      scrollToSection("carousel"); // Ensures scrolling works after updating state
    }, 200); //Increased wait time so it wont lose the ref to te index
  };


  return (
    <>
      <SchemaMarkup />
      <HorizontalScrollContainer isScrolling={isScrolling} setIsScrolling={setIsScrolling} isTransitioning={isTransitioning} setIsTransitioning={setIsTransitioning} isDarkMode={isDarkMode}>
        {/* Pass isDarkMode and handleThemeChange to HeroContainer */}
        <HeroContainer scrollToSection={scrollToSection} isDarkMode={isDarkMode} onThemeChange={handleThemeChange} />

        <Hero />

        {/* Pass the click handler so Gallery can notify when a portrait is clicked */}
        <Gallery onPortraitClick={handlePortraitClick} />

        {/* Conditionally render the carousel section */}
        {
          carouselProjectId !== null && (
            <Carousel isDarkMode={isDarkMode}
              activeProjectId={carouselProjectId}
              setActiveProjectId={setCarouselProjectId}
              activeSubtitleIndex={activeSubtitleIndex}
              setActiveSubtitleIndex={setActiveSubtitleIndex}
            />
          )
        }
        <About />
        <Inquiries isDarkMode={isDarkMode} />
      </HorizontalScrollContainer>
    </>
  )
}
export default App;
