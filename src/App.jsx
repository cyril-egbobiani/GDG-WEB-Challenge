import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FocusArea from "./components/FocusArea";
import UpcomingEvent from "./components/UpcomingEvent";
import PastEvents from "./components/PastEvents";
import Organizers from "./components/Organizers";
import ActionSection from "./components/ActionSection";
import Footer from "./components/Footer";

// Removed useEffect for parallax effect
// import { useEffect } from 'react';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FocusArea />
      <UpcomingEvent />
      <PastEvents />
      <Organizers />
      <ActionSection />
      <Footer />
    </>
  );
}

export default App;
