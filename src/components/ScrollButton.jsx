import React, { useState, useEffect } from "react";
//import { Button } from "react-bootstrap";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    if (isAtTop) {
      scrollToBottom();
    } else {
      scrollToTop();
    }
  };

  return (
    <div
      variant="primary"
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        backgroundColor: "transparent",
        color: "none",
        border: "none",
        padding: 0,
      }}
    >
      {isAtTop ? (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            color: "#463F2F",
          }}
        >
          <FaArrowAltCircleDown size={26} />
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            color: "#463F2F",
          }}
        >
          <FaArrowAltCircleUp size={26} />
        </div>
      )}
    </div>
  );
};

export default ScrollButton;
