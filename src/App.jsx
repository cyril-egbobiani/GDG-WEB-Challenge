 import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FocusArea from "./components/FocusArea";
import UpcomingEvent from "./components/UpcomingEvent";
import PastEvents from "./components/PastEvents";
import Organizers from "./components/Organizers";

function App() {
 
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
