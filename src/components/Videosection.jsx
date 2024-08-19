import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Bggroup from "../assets/Group.png";

const Videosection = () => {
  return (
    <>
      <Container fluid style={{ padding: 0 }}>
        <div
          style={{
            backgroundImage: `url(${Bggroup})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            // position: "relative",
            color: "#F8F4EE",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            opacity: 5,
          }}
        ></div>
      </Container>
    </>
  );
};

export default Videosection;
