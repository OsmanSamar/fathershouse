import React, { useState, useEffect } from "react";
import Endorsements from "./components/Endorsements";
import FNavbar from "./components/FNavbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MFire from "./components/MFire";
import Ministry from "./components/Ministry";
import Mission from "./components/Mission";
import TestimonialsSlider from "./components/TestimonialsSlider";
import Videosection from "./components/Videosection";
import Welcome from "./components/Welcome";
import ScrollButton from "./components/ScrollButton";

import Dot from "./Dot";

import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./components/Loading";

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
      },
      []
    );
  });

  // Check if the Welcome component has been shown
  useEffect(() => {
    const welcomeShown = localStorage.getItem("WelcomeShown");

    if (welcomeShown) {
      setAnimationComplete(true); // Skip Welcome animation
    }
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animation complete!");
    localStorage.setItem("WelcomeShown", "true"); // Set flag in localStorage
    setAnimationComplete(true); // Proceed with app
  };

  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  //   // Check if the Welcome component has been shown
  //   const welcomeShown = localStorage.getItem("WelcomeShown");
  //   if (welcomeShown) {
  //     setAnimationComplete(true);
  //   }
  // }, []);

  // const handleAnimationComplete = () => {
  //   console.log("Animation complete!");
  //   localStorage.setItem("WelcomeShown", "true"); // Set flag in localStorage
  //   setAnimationComplete(true); // Proceed with the app
  // };

  return (
    <>
      <div>
        {!animationComplete ? (
          <Welcome
            // onAnimationComplete={() => {
            //   console.log("Animation complete!"); // Debug log
            //   setAnimationComplete(true);
            // }}
            onAnimationComplete={handleAnimationComplete}
          />
        ) : (
          <>
            {/* <div>Debug: Animation complete, rendering main content.</div> */}
            <Dot />
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
          </>
        )}
      </div>
      {/* <Welcome />
      <Dot />
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
      </div> */}
    </>
  );
}

export default App;
