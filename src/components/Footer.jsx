import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Bggroup from "../assets/Group29@.png";

const Footer = () => {
  return (
    <Container fluid style={{ padding: 0 }}>
      {/* <div
        style={{
          backgroundImage: `url(${Bggroup})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#F8F4EE",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
          height: "100vh",
        }}
      > */}
      {/* className="p-4 p-sm-auto p-md-5 p-lg-7" */}

      <Row className="justify-contant-center">
        <div
          style={{
            width: "50vw",
            backgroundImage: `url(${Bggroup})`,
            backgroundSize: "cover",
          }}
        >
          <Col
            xs={12}
            sm={8}
            md={6}
            lg={6}
            style={{
              backgroundImage: `url(${Bggroup})`,
            }}
          >
            <Card
              style={
                {
                  // height: "auto",
                  //   width: "22rem",
                  //   maxWidth: "40rem",
                }
              }
            >
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
                    margin: "2rem 0 2rem 2rem",
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
                    margin: "2rem 0 2rem 2rem",
                  }}
                >
                  If God has moved you and placed it in your heart to support us
                  in building God’s family and providing a home for Gentiles in
                  the Father’s House, and if after prayer you still feel that
                  God is calling you to support our foundation, you can find our
                  bank details below.”
                </Card.Text>
                <Card.Text>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#463F2F",
                      lineHeight: "1.5",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 100,
                      fontSize: "0.875rem",
                      letterSpacing: "0px",
                      opacity: 1,
                      margin: "2rem 0 0 2rem",
                    }}
                  >
                    NL64INGB0007803779{" "}
                  </p>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#463F2F",
                      lineHeight: "1.5",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 100,
                      fontSize: "0.875rem",
                      letterSpacing: "0px",
                      opacity: 1,
                      margin: "0 0 0 2rem",
                    }}
                  >
                    INGBNL2A{" "}
                  </p>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#463F2F",
                      lineHeight: "1.5",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 100,
                      fontSize: "0.875rem",
                      letterSpacing: "0px",
                      opacity: 1,
                      margin: "0 0 2rem 2rem",
                    }}
                  >
                    Stichting Father’s House
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <Col
          xs={12}
          sm={8}
          md={6}
          lg={6}
          style={{
            backgroundColor: "#F49640",
          }}
        >
          <Card>
            {/* <Card.Text
              style={{
                textAlign: "justify",
                color: "#463F2F",
                lineHeight: "1.5",
                fontFamily: "Inter, sans-serif",
                fontWeight: 100,
                fontSize: "0.875rem",
                letterSpacing: "0px",
                opacity: 1,
                margin: "2rem 0 2rem 2rem",
              }}
            >
              If God has moved you and placed it in your heart to support us in
              building God’s family and providing a home for Gentiles in the
              Father’s House, and if after prayer you still feel that God is
              calling you to support our foundation, you can find our bank
              details below.”
            </Card.Text> */}
          </Card>
        </Col>
      </Row>

      {/* </div> */}
    </Container>
  );
};

export default Footer;
