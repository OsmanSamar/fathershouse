import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Bggroup from "../assets/Group29@.png";
import MinistryMobile from "../assets/Group 63.svg";
import MinistryDesktop from "../assets/Group 62.svg";
import { useMediaQuery } from "react-responsive";

const Ministry = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <Container fluid style={{ padding: 0 }}>
        <div
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
          }}
        >
          <Container className="p-4 p-sm-auto p-md-5 p-lg-7">
            <Row>
              {isMobile ? (
                <Col className="text-center">
                  <h3
                    className="text-2xl"
                    style={{
                      color: "#F49640",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      lineHeight: "1",
                      letterSpacing: "0px",
                      opacity: 1,
                      marginTop: "6rem",
                    }}
                  >
                    Father’s House
                  </h3>
                  <h3
                    style={{
                      color: "#463F2F",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      lineHeight: "1",
                      letterSpacing: "0px",
                      opacity: 1,
                      marginTop: "1rem",
                      marginBottom: "3rem",
                    }}
                  >
                    The Ministry
                  </h3>
                  <p
                    style={{
                      color: "#463F2F",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      lineHeight: "1.5",
                      letterSpacing: "0px",
                      opacity: 1,
                      padding: "0.75rem",
                    }}
                  >
                    Sed do eiusmod tempor incididunt ut labore et dolore. Lorem
                    ipsum dolor sit amet, sed do eiusmod tempor incididunt ut
                    labore et dolore. Sit amet, sed do eiusmod tempor incididunt
                    ut labore et dolore.
                  </p>
                  <Card
                    style={{
                      width: "auto",
                      margin: "0 auto",
                      background: "transparent",
                      border: "none",
                      padding: " 2rem 0.5rem 5rem 0.5rem",
                      boxShadow: "none",
                    }}
                    className="animate__animated animate__rollIn"
                  >
                    <Card.Img
                      src={MinistryMobile}
                      alt="Ministry Image"
                      style={{
                        opacity: "1",
                      }}
                    />
                  </Card>
                </Col>
              ) : (
                <Col className="d-flex justify-content-center align-items-center h-100">
                  <Card
                    style={{
                      background: "transparent",
                      border: "none",
                      paddingTop: "2rem",
                      margin: "auto",
                      width: "60%",
                      padding: " 2rem 0.5rem 5rem 0.5rem",
                      boxShadow: "none",
                    }}
                    // className="animate__animated animate__rollIn"
                    data-aos="flip-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    <Card.Img
                      src={MinistryDesktop}
                      alt="Ministry Image"
                      style={{
                        opacity: "1",
                      }}
                    />
                  </Card>
                </Col>
              )}
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Ministry;
