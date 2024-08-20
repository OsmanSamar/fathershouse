import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Heroimg from "../assets/rear-view-people-music-festival-sunlight.png";

const Hero = () => {
  return (
    <Container fluid style={{ padding: 0, position: "relative" }}>
      <div
        style={{
          backgroundImage: `url(${Heroimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
          color: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)", // the opacity
            zIndex: 1, // to  overlay placed behind the content
          }}
        />

        {/* Content */}
        <Row style={{ position: "relative", zIndex: 2 }}>
          {/* z-index-2 to placed the content on top  */}
          <Col>
            <h6
              style={{
                fontSize: "1.6rem",
                fontFamily: "inter, medium",
                textAlign: "center",
                padding: "0 2rem",
                letterSpacing: "0px",
                opacity: "1",
                marginBottom: "1rem",
                marginTop: "3rem",
              }}
            >
              Father’s House
            </h6>
            <h1
              style={{
                fontSize: "clamp(1.5rem, 2.6vw + 0.8rem, 4.5rem)",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                lineHeight: "1.2",
                textAlign: "center",
                padding: "0 2rem", // Default padding
                // padding: "0 5vw",
                letterSpacing: "0px",
                opacity: 1,
              }}
            >
              Building God’s family and helping Jews and Gentiles to find a home
              in the Father’s House
            </h1>

            <Button
              variant="light"
              style={{
                marginRight: "0.6875rem",
                marginTop: "2rem",
                backgroundColor: "white",
                color: "#463F2F",
                border: "none",
                padding: "0.5rem 0.5rem", //padding to make buttons the same size
                minWidth: "120px", // Ensure minimum width is the same
                textAlign: "center",
                fontSize: "1rem", //16px
                fontFamily: "inter, semibold",
                fontWeight: 600,
                letterSpacing: "0px", // default spacing.
                opacity: "1",
              }}
            >
              Our mission
            </Button>
            <Button
              variant="light"
              style={{
                marginTop: "2rem",
                backgroundColor: "white",
                color: "#463F2F",
                border: "none",
                padding: "0.5rem 0.5rem",
                minWidth: "120px",
                textAlign: "center",
                fontSize: "1rem",
                fontFamily: "inter, semibold",
                fontWeight: 600,
                letterSpacing: "0px",
                opacity: "1",
              }}
            >
              The team
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Hero;
