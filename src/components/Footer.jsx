import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Bggroup from "../assets/Group29@.png";

const Footer = () => {
  // Button Style
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Container fluid style={{ padding: 0, borderTop: "1px solid #463F2F" }}>
      <Row className=" g-0">
        {/* Left Column with Background Image and Text Card */}

        <Col
          xs={12}
          sm={12}
          md={6}
          lg={7}
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
          <Container
            className="d-none d-md-flex"
            style={{
              width: "533px",
              maxWidth: "100%",
              marginRight: "0.5rem",
              marginLeft: "0.5rem",
              // marginRight: "1rem",
            }}
          >
            <Card
              style={{
                backgroundColor: "#FFFFFF",
                // maxWidth: "100%",
                // width: "50vw",
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
                    margin: "1rem 0 1rem 2rem",
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
                    margin: "1.5rem 0 1rem 2rem",
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
                      // textAlign: "justify",
                      textAlign: "left",
                      color: "#463F2F",
                      lineHeight: "1.5",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "0.875rem",
                      letterSpacing: "0px",
                      opacity: 1,
                      margin: "1rem 0 0 2rem",
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
          </Container>

          {/* Display the left Container on Small Screen */}

          <Container
            className="d-flex d-md-none"
            style={{
              maxWidth: "100%",
            }}
          >
            <Card
              style={{
                backgroundColor: "#FFFFFF",
                // maxWidth: "100%",
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
                  the Father’s House, and if after prayer you still feel that
                  God is calling you to support our foundation, you can find our
                  bank details below.”
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
          </Container>

          {/* Rights Reserved */}
          <div
            className=" d-none d-md-flex   flex-md-row   "
            style={{
              backgroundColor: "transparnet",
              justifyContent: "space-evenly",

              width: "400px",
              maxWidth: "80%",
              // margin: "3rem 5rem 0 0",
              marginTop: "3rem",
              textAlign: "center",
              marginRight: "1.5rem",
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

                // textDecoration: "none",
                // borderBottom: "1px solid #463F2F",
                // paddingBottom: "",
                // display: "inline-block",
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
          lg={5}
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
                md={5}
                className="text-center text-md-start text-lg-start"
              >
                <div
                  className="text-center text-md-start"
                  style={{
                    // textAlign: "inherit",
                    // textAlign: "left",
                    color: "#463F2F",
                    lineHeight: "1.2",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0px",
                    opacity: 1,
                    margin: "0 0.1rem 1rem 0",
                    padding: "0 1rem",

                    fontSize: "calc(0.875rem + 1vw)",
                  }}
                >
                  <p>Questions?</p>
                </div>
              </Col>
              <Col
                xs={12}
                md={5}
                className="text-center text-md-start text-lg-start"
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
                    //margin: "0 0 1rem 0",
                    // width: "100%",
                    // maxWidth: "100%",
                    objectFit: "contain",
                    boxSizing: "border-box",
                    margin: "0 0.1rem 1rem 0",
                  }}
                />
              </Col>
            </Row>
          </div>
          {/* To add bottom border */}
          <div
            style={{
              borderBottom: "1px solid #463F2F",
              marginLeft: "-2rem",
              marginRight: "-2rem",
              width: "calc(100% + 4rem)",
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
                  // backgroundColor: "#463F2F",
                  //color: "#FFFFFF",
                  color: isHovered ? "#463F2F" : "#FFFFFF",
                  backgroundColor: isHovered ? "#FFFFFF" : "#463F2F",
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
                  textTransform: "none",
                  transform: isClicked
                    ? "scale(0.95)"
                    : isHovered
                    ? "scale(1.05)"
                    : "scale(1)",
                  transition:
                    "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseDown={() => setIsClicked(true)}
                onMouseUp={() => setIsClicked(false)}
              >
                Subscribe
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Rights Reserved  On Sm Only*/}
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
