import React, { useState, useEffect } from "react";
import "../loadingstyle.css";

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);
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

  return (
    <>
      {/* <div id="wrapper">
        <div className={`dot-loader ${fadeOut ? "fade-out" : ""}`}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div> */}

      {isVisible && (
        <div id="wrapper">
          <div className={`dot-loader ${fadeOut ? "fade-out" : ""}`}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
