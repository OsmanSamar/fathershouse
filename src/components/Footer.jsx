import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Bggroup from "../assets/Group29@.png";

const Footer = () => {
  return (
    <Container fluid style={{ padding: 0, borderTop: "1px solid #463F2F" }}>
      <Row className=" g-0">
        {/* Left Column with Background Image and Text Card */}
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{
            backgroundImage: `url(${Bggroup})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#F8F4EE",
            padding: "2rem",
          }}
        >
          <Card
            style={{
              backgroundColor: "#FFFFFF",
              maxWidth: "100%",
              borderRadius: "8px",
              border: "1px solid #463F2F",
            }}
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
                  //textAlign: "justify",
                  textAlign: "left",
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
                the Father’s House, and if after prayer you still feel that God
                is calling you to support our foundation, you can find our bank
                details below.”
              </Card.Text>
              <Card.Text>
                <p
                  style={{
                    // textAlign: "justify",
                    textAlign: "left",
                    color: "#463F2F",
                    lineHeight: "1.5",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
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
                    //  textAlign: "justify",
                    textAlign: "left",
                    color: "#463F2F",
                    lineHeight: "1.5",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
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
                    // textAlign: "justify",
                    textAlign: "left",
                    color: "#463F2F",
                    lineHeight: "1.5",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
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
          {/* Rights Reserved */}
          <div
            className=" d-none d-md-flex flex-column flex-md-row  "
            style={{
              backgroundColor: "transparnet",
              justifyContent: "space-evenly",
              width: "100vw",
              maxWidth: "100%",
              margin: "2rem 0",
              textAlign: "center",
            }}
          >
            <p
              style={{
                textAlign: "center",
                color: "#463F2F",
                lineHeight: "1.5",
                fontFamily: "Inter, sans-serif",
                fontWeight: 200,
                fontSize: "0.7rem",
                letterSpacing: "0px",
                opacity: 1,
              }}
            >
              ©2024 all rights reserved
            </p>
            <p
              style={{
                textAlign: "center",
                color: "#463F2F",
                lineHeight: "1.5",
                fontFamily: "Inter, sans-serif",
                fontWeight: 200,
                fontSize: "0.7rem",
                letterSpacing: "0px",
                opacity: 1,

                textDecoration: "underline",
              }}
            >
              Privacy statement
            </p>
            <p
              style={{
                textAlign: "center",
                color: "#463F2F",
                lineHeight: "1.5",
                fontFamily: "Inter, sans-serif",
                fontWeight: 200,
                fontSize: "0.7rem",
                letterSpacing: "0px",
                opacity: 1,

                textDecoration: "underline",
              }}
            >
              Website by Code Blauw
            </p>
          </div>
        </Col>

        {/* End of Left Colum  */}

        {/* ***************************************** */}
        {/* Right Column with newsletter */}
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{
            backgroundColor: "#F49640",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <div
            style={{
              backgroundColor: "transparent",
              width: "100%",
              border: "none",
              boxShadow: "none",
              maxWidth: "100%",
            }}
          >
            <Row className="g-2 align-items-center">
              <Col
                xs={12}
                md={4}
                className="text-center text-md-center text-lg-start"
              >
                <p
                  style={{
                    textAlign: "inherit",
                    color: "#463F2F",
                    lineHeight: "1.2",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0px",
                    opacity: 1,
                    margin: "0 0.1rem 1rem 0",
                    fontSize: "calc(0.5rem + 1vw)",
                  }}
                >
                  Questions?
                </p>
              </Col>
              <Col
                xs={12}
                md={6}
                className="text-center text-md-center text-lg-start"
              >
                <input
                  type="text"
                  placeholder="info@fathershouse.nl"
                  style={{
                    textAlign: "center",
                    color: "#463F2F",
                    padding: "0.7rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    lineHeight: "1.2",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0px",
                    fontSize: "0.75rem",
                    opacity: 1,
                    margin: "0 0 1rem 0",
                    width: "100%",
                    maxWidth: "100%",
                    boxSizing: "border-box",
                  }}
                />
              </Col>
            </Row>
          </div>
          {/* To add bottom border */}
          <div
            style={{
              borderBottom: "1px solid #463F2F",
              width: "110%",
              margin: "2rem 0",
            }}
          ></div>

          {/* Newsletter */}

          <Card
            style={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          >
            <Card.Body>
              <Card.Title
                className="text-center text-md-start"
                style={{
                  color: "#463F2F",
                  lineHeight: "1.2",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0px",
                  opacity: 1,
                  fontSize: "1rem",
                  margin: "0 0.1rem 1.5rem 0",
                }}
              >
                Father’s House newsletter
              </Card.Title>

              <Card.Title
                style={{
                  textAlign: "left",
                  color: "#463F2F",
                  lineHeight: "1.2",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0px",
                  opacity: 1,
                  fontSize: "0.875rem",
                  margin: "0 0.1rem 1rem 0",
                }}
              >
                E-mail Adress*
              </Card.Title>
              <Card.Text>
                <input
                  type="text"
                  placeholder="E-mail Adress"
                  style={{
                    textAlign: "left",
                    color: "#C6C0B4",
                    padding: "0.7rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    lineHeight: "1.2",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0px",
                    fontSize: "0.75rem",
                    opacity: 1,
                    // margin: "0 1rem 1rem 1rem",
                    margin: "0 0 1rem 0",
                    width: "90%",
                    maxWidth: "100%",
                    boxSizing: "border-box",
                  }}
                />
              </Card.Text>
              <Card.Text
                style={{
                  textAlign: "left",
                  color: "#463F2F",
                  lineHeight: "1.2",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0px",
                  opacity: 1,
                  // margin: "2rem 0",
                  fontSize: "0.75rem",
                  margin: "0 2rem 2rem 0",
                  width: "80%",
                  maxWidth: "100%",
                }}
              >
                By subscribing to our newsletter you indicate that you have
                taken note of our privacy statement.
              </Card.Text>
              <Button
                className="btn btn-success"
                style={{
                  backgroundColor: "#463F2F",
                  color: "#FFFFFF",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "none",
                  width: "90%",
                  maxWidth: "100%",
                  lineHeight: "1.2",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "0.75rem",
                  letterSpacing: "0px",
                  opacity: 1,
                }}
              >
                Subscribe
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Rights REserved */}
        {/* Rights Reserved */}
        <Container style={{ backgroundColor: "#F7F4EF" }}>
          <div
            className="  d-flex flex-column d-md-none "
            style={{
              justifyContent: "space-evenly",
              width: "100vw",
              maxWidth: "100%",
              margin: "2rem 0",
              textAlign: "center",
            }}
          >
            <p
              style={{
                textAlign: "center",
                color: "#463F2F",
                lineHeight: "1.5",
                fontFamily: "Inter, sans-serif",
                fontWeight: 200,
                fontSize: "0.7rem",
                letterSpacing: "0px",
                opacity: 1,
              }}
            >
              ©2024 all rights reserved
            </p>
            <p
              style={{
                textAlign: "center",
                color: "#463F2F",
                lineHeight: "1.5",
                fontFamily: "Inter, sans-serif",
                fontWeight: 200,
                fontSize: "0.7rem",
                letterSpacing: "0px",
                opacity: 1,

                textDecoration: "underline",
              }}
            >
              Privacy statement
            </p>
            <p
              style={{
                textAlign: "center",
                color: "#463F2F",
                lineHeight: "1.5",
                fontFamily: "Inter, sans-serif",
                fontWeight: 200,
                fontSize: "0.7rem",
                letterSpacing: "0px",
                opacity: 1,

                textDecoration: "underline",
              }}
            >
              Website by Code Blauw
            </p>
          </div>
        </Container>
      </Row>
    </Container>
  );
};

export default Footer;
