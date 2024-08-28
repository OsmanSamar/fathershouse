import Endorsements from "./components/Endorsements";
import FNavbar from "./components/FNavbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MFire from "./components/MFire";
import Ministry from "./components/Ministry";
import Mission from "./components/Mission";
import TestimonialsSlider from "./components/TestimonialsSlider";
import Videosection from "./components/Videosection";
import "animate.css";
import Welcome from "./components/Welcome";
import AnimatedCursor from "react-animated-cursor";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
      },
      []
    );
  });
  return (
    <>
      <AnimatedCursor
        outerSize={8}
        color="244, 150, 60"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <div>
        <Welcome />
        <FNavbar />
        <Hero />
        <div id="watch">
          <Videosection />
        </div>
        <div id="mission">
          <Mission />
        </div>
        <div id="ministry">
          <Ministry />
        </div>
        <MFire />
        <div id="team">
          <TestimonialsSlider />
        </div>
        <Endorsements />
        <div id="contact">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
