import React, { useEffect, useState } from "react";
import "./Dot.css"; // We will create this CSS file next

const Dot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="dot"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    />
  );
};

export default Dot;
