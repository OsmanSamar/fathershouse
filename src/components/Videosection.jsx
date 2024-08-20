import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Bggroup from "../assets/Group.png";
import { useMediaQuery } from "react-responsive";

const Videosection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const mobileVideos = [
    { id: 1, video: "video1.mp4", title: "Marcel Gaasenbeek" },
    { id: 2, video: "video2.mp4", title: "Marcel Gaasenbeek" },
    { id: 3, video: "video3.mp4", title: "Marcel Gaasenbeek" },
  ];

  const videos = [
    { id: 1, video: "video1.mp4", title: "Marcel Gaasenbeek" },
    { id: 2, video: "video2.mp4", title: "Marcel Gaasenbeek" },
    { id: 3, video: "video3.mp4", title: "Marcel Gaasenbeek" },
  ];

  return (
    <Container fluid style={{ padding: 0 }}>
      {/* Full-height container with background image */}
      <div
        style={{
          backgroundImage: `url(${Bggroup})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "#F8F4EE",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",

          //  padding: "2rem", // Default padding for small screens
          position: "relative",
        }}
        className="p-4 p-sm-6 p-md-6 p-lg-7 " // Bootstrap responsive padding classes
      >
        <Row className="w-100">
          <Col
            xs={12}
            md={9} // Header takes 9 columns on medium and up
            lg={10} // Header takes 10 columns on large and up
            className="text-center text-md-start" // Center text on small screens
          >
            <h3
              className={isMobile ? "text-2xl mb-4" : "text-5xl"}
              style={{
                color: "#F49640",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                lineHeight: "1.2",
                letterSpacing: "0px",
                opacity: 1,

                marginTop: "12rem",
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
                marginBottom: "4rem",
              }}
            >
              Watch teachings
            </h3>
          </Col>
          <Col
            xs={12}
            md={3} // Button takes 3 columns on medium and up
            lg={2} // Button takes 2 columns on large and up
            className="d-flex justify-content-md-end justify-content-center align-items-center"
          >
            {!isMobile && (
              <Button
                style={{
                  color: "#463F2F",
                  backgroundColor: "#F49640",
                  border: "none",
                  padding: "0.8rem 1.5rem",
                  minWidth: "100px",
                  textAlign: "center",
                  fontSize: "1rem",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0px",
                  opacity: 1,
                  marginTop: "12rem",
                }}
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
          <Row className={isMobile ? "g-4" : "g-3"}>
            {(isMobile ? mobileVideos : videos).map((video) => (
              <Col key={video.id} xs={12} sm={6} md={4}>
                <div className="position-relative">
                  <video
                    src={video.video}
                    controls
                    className="w-100"
                    style={{
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>

                  <h6
                    className="position-absolute "
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "#463F2F",
                      borderRadius: "7px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                      bottom: "20px", // Move 10px up from the bottom
                      left: "20px", // Move 10px right from the left edge
                      margin: "0",
                      padding: "0.3rem 0.6rem",
                    }}
                  >
                    {video.title}
                  </h6>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Spacer */}
        {/* <div style={{ height: "2rem" }}></div> */}

        {/* Button Section for Mobile */}
        {isMobile && (
          <Container className="text-center " style={{ padding: 0 }}>
            <Button
              style={{
                color: "#463F2F",
                backgroundColor: "#F49640",
                border: "none",
                padding: "1rem 1rem",
                minWidth: "120px",
                textAlign: "center",
                fontSize: "1rem",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                letterSpacing: "0px",
                opacity: 1,
                marginTop: "2rem ",
              }}
            >
              Watch more video's
            </Button>
          </Container>
        )}
      </div>
    </Container>
  );
};

export default Videosection;
