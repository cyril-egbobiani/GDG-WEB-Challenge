import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FocusArea from "./components/FocusArea";
import UpcomingEvent from "./components/UpcomingEvent";
import PastEvents from "./components/PastEvents";
import Organizers from "./components/Organizers";

function App() {
  const [count, setCount] = useState(0);

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
