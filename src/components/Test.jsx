import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Test = () => {
  return (
    <Container fluid style={{ padding: 0, borderTop: "1px solid #463F2F " }}>
      <Row className="g-0">
        {/* class removes gutters between the columns to make them fit snugly together */}
        {/* Left Column with Background Image and Text Card */}
        <Col
          xs={12}
          md={6}
          lg={6}
          style={{
            //  backgroundImage: `url(${Bggroup})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#F8F4EE",
            padding: "2rem",
          }}
        >
          {/* style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" */}
          <Card style={{ backgroundColor: "#FFFFFF" }}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "left",
                  color: "#463F2F",
                  lineHeight: "1.2",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0px",
                  opacity: 1,
                  margin: "2rem 0",
                }}
              >
                Donations
              </Card.Title>
              <Card.Text
                style={{
                  textAlign: "justify",
                  color: "#463F2F",
                  lineHeight: "1.5",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 100,
                  fontSize: "0.875rem",
                  letterSpacing: "0px",
                  opacity: 1,
                  margin: "2rem 0",
                }}
              >
                If God has moved you and placed it in your heart to support us
                in building God’s family and providing a home for Gentiles in
                the Father’s House, and if after prayer you still feel that God
                is calling you to support our foundation, you can find our bank
                details below.
              </Card.Text>
              <Card.Text
                style={{
                  textAlign: "justify",
                  color: "#463F2F",
                  lineHeight: "1.5",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 100,
                  fontSize: "0.875rem",
                  letterSpacing: "0px",
                  opacity: 1,
                  margin: "0 0 2rem",
                }}
              >
                <p>NL64INGB0007803779</p>
                <p>INGBNL2A</p>
                <p>Stichting Father’s House</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Column with Background Color and Form */}
        <Col
          xs={12}
          md={6}
          lg={6}
          style={{
            backgroundColor: "#F49640",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <Card style={{ backgroundColor: "transparent", border: "none" }}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "left",
                  color: "#463F2F",
                  lineHeight: "1.2",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0px",
                  opacity: 1,
                  margin: "2rem 0",
                }}
              >
                Get Involved
              </Card.Title>
              <Card.Text
                style={{
                  textAlign: "justify",
                  color: "#463F2F",
                  lineHeight: "1.5",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 100,
                  fontSize: "0.875rem",
                  letterSpacing: "0px",
                  opacity: 1,
                  margin: "2rem 0",
                }}
              >
                Enter your email to stay updated with our latest news and
                events.
              </Card.Text>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginBottom: "1rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#463F2F",
                  color: "#FFF",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "none",
                }}
              >
                Subscribe
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Test;
