import React, { useState, useEffect, useCallback } from 'react';
import HorizontalScrollContainer from './components/shared/HorizontalScrollContainer'
import HeroContainer from './components/HeroContainer'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Carousel from './components/Carousel'
import About from './components/About'

//import Footer from './components/Footer'

const App: React.FC = () => {

  // Dark Mode Handling
  const [isDarkMode, setIsDarkMode] = useState(false);
  // State to track if a carousel should be shown; null means no carousel

  const [carouselProjectId, setCarouselProjectId] = useState<string | null>(null);

  // Handle theme change
  const handleThemeChange = (isDarkMode: boolean) => {
    setIsDarkMode(isDarkMode);
  };

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    const container = document.getElementById("horizontal-scroll-container");
    if (section && container) {

      // Reset the vertical scroll position so that the section is aligned at the top.
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
    if (carouselProjectId !== null) {
      scrollToSection("carousel"); // Scrolls to the Carousel section automatically
    }
  }, [carouselProjectId]) // The scrolling process will wait until carouselProjectId updates

  // Callback from Gallery when a portrait is clicked:
  const handlePortraitClick = (projectId: string): void => {
    setCarouselProjectId(projectId);
    setTimeout(() => {
      scrollToSection("carousel"); // Ensures scrolling works after updating state
    }, 50);
  };

  // Callback to remove the carousel (e.g., when About section is in view)
  const removeCarousel = useCallback((): void => {
    setCarouselProjectId(null);
  }, []);

  return (
    <>
      <HorizontalScrollContainer carouselProjectId={carouselProjectId} onRemoveCarousel={removeCarousel}>
        
        {/* Pass isDarkMode and handleThemeChange to HeroContainer */}
        <HeroContainer scrollToSection={scrollToSection} isDarkMode={isDarkMode} onThemeChange={handleThemeChange}/>
        
        <Hero />

        {/* Pass the click handler so Gallery can notify when a portrait is clicked */}
        <Gallery onPortraitClick={handlePortraitClick} />

        {/* Conditionally render the carousel section */}
        {
          carouselProjectId !== null && (
            <Carousel activeProjectId={carouselProjectId} setActiveProjectId={setCarouselProjectId} isDarkMode={isDarkMode} />
          )
        }
        <About />
      </HorizontalScrollContainer>
    </>
  )
}


export default App
