import './App.css'

import HeroContainer from './components/HeroContainer'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Carousel from './components/Carousel'
//import Footer from './components/Footer'
import HorizontalScrollContainer from './components/shared/HorizontalScrollContainer'


function App() {
  return (
    <>
      <HorizontalScrollContainer>
        <HeroContainer/>
        <Hero />
        <Gallery />
        <Carousel />
        <About />
      </HorizontalScrollContainer>
    </>
  )
}


export default App
