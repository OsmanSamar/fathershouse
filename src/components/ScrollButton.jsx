import React, { useState, useEffect } from "react";
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
        <FaArrowAltCircleDown size={26} />
      ) : (
        <FaArrowAltCircleUp size={26} />
      )}
    </div>
  );
};

export default ScrollButton;
