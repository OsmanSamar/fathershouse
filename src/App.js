import React, { useEffect } from "react";
import Endorsements from "./components/Endorsements";
import FNavbar from "./components/FNavbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MFire from "./components/MFire";
import Ministry from "./components/Ministry";
import Mission from "./components/Mission";
import TestimonialsSlider from "./components/TestimonialsSlider";
import Videosection from "./components/Videosection";
//import "animate.css";
import Welcome from "./components/Welcome";
//import AnimatedCursor from "react-animated-cursor";
import ScrollButton from "./components/ScrollButton";
import MouseParticles from "react-mouse-particles";

import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./components/Loading";

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
      {/* <AnimatedCursor
        outerSize={8}
        color="244, 150, 60"
        outerAlpha={0.2}
        innerScale={7}
        outerScale={5}
        style={{
          position: "fixed",
          zIndex: 9999, //To  make sure it appears behind the actual cursor
          pointerEvents: "none", // Prevents cursor from blocking other elements
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          cursor: "pointer",
        }}
      /> */}
      <MouseParticles
        g={2} //Gravity of particles (default: 1).
        num={12} //Number of particles (default: 10).
        color="#F49640"
        cull="MuiSvgIcon-root,MuiButton-root" //Comma-separated class names of elements that should not trigger particles.
        level={8} //Level of particle complexity (default: 5).
        count={100} // Number of particles
        radius={8} // Size of each particle
        opacity={0.7} // Opacity of the particles
        speed={1.5} // Speed of the particle movement
        background="#fff" // Background color for better visibility
      />
      <div>
        <Welcome />
        <Loading />
        <ScrollButton />

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
