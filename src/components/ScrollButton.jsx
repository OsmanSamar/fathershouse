import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
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
    <Button
      variant="primary"
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        backgroundColor: "transparent",
        border: "none",
        padding: 0,
      }}
    >
      {isAtTop ? (
        <FaArrowAltCircleDown size={26} />
      ) : (
        <FaArrowAltCircleUp size={26} />
      )}
    </Button>
  );
};

export default ScrollButton;
