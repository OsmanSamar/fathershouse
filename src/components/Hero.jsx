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
            backgroundColor: "rgba(0, 0, 0, 0.5)", // the opacity
            zIndex: 1, // to  overlay placed behind the content
          }}
        />

        {/* Content */}
        <Row style={{ position: "relative", zIndex: 2 }}>
          {/* z-index-2 to placed the content on top  */}
          <Col>
            <h6>Father’s House</h6>
            <h1>Building God’s family and helping Jews and Gentiles</h1>
            <h2>to find a home in the Father’s House</h2>

            <Button
              variant="light"
              style={{
                marginRight: "10px",
                backgroundColor: "white",
                color: "#463F2F",
                border: "none",
              }}
            >
              Our mission
            </Button>
            <Button
              variant="light"
              style={{
                backgroundColor: "white",
                color: "#463F2F",
                border: "none",
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
