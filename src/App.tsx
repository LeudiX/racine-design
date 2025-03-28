import React, { useState, useEffect, useRef } from 'react';
import HorizontalScrollContainer from './components/shared/HorizontalScrollContainer'
import HeroContainer from './components/HeroContainer'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Carousel from './components/Carousel'
import About from './components/About'

const App: React.FC = () => {

  // Dark Mode Handling
  const [isDarkMode, setIsDarkMode] = useState(false);

  // State to track if a carousel should be shown; null means no carousel
  const [carouselProjectId, setCarouselProjectId] = useState<string | null>(null);

  // State to track the active subtitle index in sidebar menu
  const [activeSubtitleIndex, setActiveSubtitleIndex] = useState<number>(0);

  // Ref to track if the project change originated from a subtitle click
  const isSubtitleClickRef = useRef(false);

  // Handle theme change
  const handleThemeChange = (isDarkMode: boolean) => {
    setIsDarkMode(isDarkMode);
  };

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    const container = document.getElementById("horizontal-scroll-container");
    if (section && container) {

      // Reset the vertical scroll position so that the section is a aligned at the top.
      section.scrollTop = 0;

      // Get the section’s left offset relative to the container
      const sectionLeft = section.offsetLeft;

      // Use scrollIntoView to smoothly scroll the section into view
      container.scrollTo({
        left: sectionLeft,
        behavior: "smooth",  // Aligns the section at the top of the viewport
      });
    }
  };

  useEffect(() => {
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
      <HorizontalScrollContainer>
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
      </HorizontalScrollContainer>
    </>
  )
}


export default App
