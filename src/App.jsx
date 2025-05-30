import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FocusArea from "./components/FocusArea";
import UpcomingEvent from "./components/UpcomingEvent";
import PastEvents from "./components/PastEvents";
import Organizers from "./components/Organizers";

// Removed useEffect for parallax effect
// import { useEffect } from 'react';

function App() {

  // Removed useEffect hook
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
  //     parallaxElements.forEach(el => {
  //       const speed = parseFloat(el.getAttribute('data-parallax-speed'));
  //       const translateY = window.pageYOffset * speed;
  //       el.style.transform = `translateY(${translateY}px)`;
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <>
      <Navbar />
      <HeroSection />
      <FocusArea />
      <UpcomingEvent />
      <PastEvents />
      <Organizers />
    </>
  );
}

export default App;
