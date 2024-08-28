import React, { useState, useEffect } from "react";
import "../welcomestyle.css";
const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    //To  show the circle and then fade it out after 3 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to allow rendering

    const hideTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000); // Show for 3 seconds

    const disappearTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4500); // Total time for animation plus visibility

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(disappearTimer);
    };
  }, []);

  /* Overlay to create the freezing effect */
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Slightly transparent overlay
    opacity: fadeOut ? 0 : 0.7, // Reduce opacity of the page while the circle is visible
    transition: "opacity 1.5s ease-out",
    zIndex: 999, // Ensure the overlay is behind the circle
    pointerEvents: "none", // Allow clicks through the overlay
  };
  return (
    <div style={overlayStyle}>
      <div>
        <div id="wrapper">
          <div class="profile-main-loader">
            <div class="loader">
              <svg class="circular-loader" viewBox="25 25 50 50">
                <circle
                  class="loader-path"
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  stroke="#70c542"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
