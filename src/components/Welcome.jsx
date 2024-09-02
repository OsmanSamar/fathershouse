import React, { useState, useEffect } from "react";

function Welcome({ onAnimationComplete }) {
  const [isVisible, setIsVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // useEffect(() => {
  //   const showDuration = 15000; // Duration for showing the welcome screen
  //   const fadeDuration = 100; // Duration for the fade-out animation

  //   // Hide the welcome screen after the show duration
  //   const hideTimer = setTimeout(() => {
  //     setFadeOut(true);
  //   }, showDuration);

  //   // Remove the welcome screen from view after the fade-out duration
  //   const removeTimer = setTimeout(() => {
  //     setIsVisible(false);
  //     if (onAnimationComplete) {
  //       onAnimationComplete();
  //     }
  //   }, showDuration + fadeDuration);

  //   return () => {
  //     clearTimeout(hideTimer);
  //     clearTimeout(removeTimer);
  //   };
  // }, [onAnimationComplete]);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Short delay to ensure the component renders first

    const hideTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000); // Circle visible for 3 seconds

    const disappearTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4500); // Total time for the animation plus visibility

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(disappearTimer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Triggering onAnimationComplete");
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  const circleStyle = {
    position: "fixed",
    top: isVisible ? "50%" : "-200px", // Center vertically
    left: "50%", // Center horizontally
    transform: "translate(-50%, -50%)", // Offset by half of its own width and height to center
    //transform: "translateX(-50%)",
    width: "200px",
    height: "200px",
    backgroundColor: fadeOut ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: fadeOut ? 0 : isVisible ? 1 : 0,
    transition:
      "top 1.5s ease-out, opacity 1.5s ease-out, background-color 1.5s ease-out",
    zIndex: 1000,
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle at center, #F49640 20%, #82725A 50%, #776B60 70%, #DDD1C7 80%, #C6C0B4 100%)",

    // backgroundColor: "rgba(0, 0, 0, 1)",
    //backgroundColor: "rgba(0, 0, 0, 0.3)", // Slightly transparent overlay
    opacity: fadeOut ? 0 : 0.85, // Fades to 0 when the circle starts fading out
    transition: "opacity 1.5s ease-out",
    zIndex: 999, // Ensure the overlay is behind the circle
    pointerEvents: "none", // Allow clicks through the overlay
    //  pointerEvents: fadeOut ? "none" : "auto", // Block interactions while the overlay is visible
  };

  return (
    <div>
      {/* Overlay  effect */}
      <div style={overlayStyle}></div>

      {/* Animated Circle */}
      <div style={circleStyle}>
        <p
          style={{
            color: "white",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.875rem",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Welcome Back to Father's House
        </p>
      </div>
    </div>
  );
}

export default Welcome;
