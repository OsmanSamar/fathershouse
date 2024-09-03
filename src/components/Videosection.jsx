import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Bggroup from "../assets/Group.png";
import { useMediaQuery } from "react-responsive";

const Videosection = () => {
  // Button Style
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  // Video arrays
  const mobileVideos = [
    { id: 1, youtube: "tz4dWkR_cbw", title: "Zomergroeten.. " },
    { id: 2, youtube: "PwZtiFChmE8", title: "Oproep burgemeester " },
    { id: 3, youtube: "DByV5vtJEVA", title: "Burgemeester TK2023 " },
  ];

  const videos = [
    { id: 1, youtube: "tz4dWkR_cbw", title: "Zomergroeten.." },
    { id: 2, youtube: "PwZtiFChmE8", title: "Oproep burgemeester " },
    { id: 3, youtube: "DByV5vtJEVA", title: "Burgemeester TK2023 " },
  ];

  return (
    <Container fluid style={{ padding: 0 }}>
      {/* Full-height container with background image */}
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
        // className="p-4 p-sm-auto p-md-5 p-lg-7  " // Bootstrap responsive padding classes
      >
        {/* The headers */}
        <Container className="p-4 p-sm-auto p-md-5 p-lg-7  ">
          <Row className="w-100 m-auto  ">
            <Col
              // xs={12} md={4} lg={2}
              // xs={12}
              className="text-center text-md-start"
            >
              <h3
                className={isMobile ? "text-2xl " : "text-3xl"}
                style={{
                  color: "#F49640",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  lineHeight: "1",
                  letterSpacing: "0px",
                  opacity: 1,
                  marginTop: "2rem",
                  // Added
                  // marginLeft: "-1.5rem",
                  // fontSize: "1.2rem",
                }}
              >
                Video's
              </h3>
              <h3
                style={{
                  color: "#463F2F",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  lineHeight: "1.2",
                  letterSpacing: "0px",
                  opacity: 1,
                  marginTop: "1rem",
                  marginBottom: "2rem",
                  // Added
                  // marginLeft: "-1.5rem",
                }}
              >
                Watch teachings
              </h3>
            </Col>
            {/* Button */}

            <Col
              xs={12}
              md={3}
              lg={2}
              className="d-flex justify-content-md-end justify-content-center align-items-center"
            >
              {!isMobile && (
                <Button
                  className="btn btn-success"
                  style={{
                    borderRadius: "4px",
                    color: isHovered ? "#ffffff" : "#463F2F",
                    backgroundColor: isHovered ? "#d97f2e" : "#F49640",
                    border: "none",
                    padding: "7px ",
                    height: "42px",
                    textAlign: "center",
                    fontSize: "0.75rem",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0px",
                    opacity: 1,
                    marginTop: "3rem",
                    marginBottom: "2rem",
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
                  Watch more video's
                </Button>
              )}
            </Col>
          </Row>

          {/* Spacer */}
          <div style={{ height: "4rem" }}></div>

          {/* Video Grid Section */}
          <Container fluid style={{ padding: 0 }}>
            {/*  Added   marginLeft: "-1rem"*/}

            <Row className={isMobile ? "g-4" : "g-3"}>
              {(isMobile ? mobileVideos : videos).map((video) => (
                <Col key={video.id} xs={12} sm={6} md={4}>
                  <div
                    className="position-relative     "
                    data-aos="zoom-in-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    {video.youtube && (
                      <div
                        style={{
                          position: "relative",
                          paddingBottom: "56.25%", // 16:9 Aspect Ratio
                          height: 0,
                          overflow: "hidden",
                          borderRadius: "8px",
                        }}
                      >
                        <iframe
                          src={`https://www.youtube.com/embed/${video.youtube}`}
                          title={video.title}
                          // title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: 0,
                            borderRadius: "8px",
                          }}
                        ></iframe>
                      </div>
                    )}
                    {/* <h6
                      className="position-absolute"
                      style={{
                        //backgroundColor: "#FFFFFF",
                        backgroundColor: "transparent",
                        //color: "#463F2F",
                        color: "#FFFFFF",
                        borderRadius: "7px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                        bottom: "20px",
                        left: "20px",
                        margin: "0",
                        padding: "0.3rem 0.6rem",
                      }}
                    >
                      {video.title}
                    </h6> */}
                  </div>
                </Col>
              ))}
            </Row>
          </Container>

          {/* Button Section for Mobile */}
          {isMobile && (
            <Container className="text-center " style={{ padding: 0 }}>
              <Button
                className="btn btn-success"
                style={{
                  color: "#463F2F",
                  backgroundColor: "#F49640",
                  border: "none",
                  padding: "1rem 1rem",
                  minWidth: "20px",
                  textAlign: "center",
                  fontSize: "1rem",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                  letterSpacing: "0px",
                  opacity: 1,
                  marginTop: "2rem ",
                  marginBottom: "4rem",
                  textTransform: "none",
                }}
              >
                Watch more video's
              </Button>
            </Container>
          )}
        </Container>
      </div>
    </Container>
  );
};

export default Videosection;
