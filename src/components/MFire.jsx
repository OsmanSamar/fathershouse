import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const MFire = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      <Card>
        <div
          style={{
            backgroundColor: "#F49640",
            // width: "100vw",
            width: "100%",
            padding: "2rem 0",
          }}
        >
          <Container>
            <Card.Body style={{ padding: "2rem 0" }}>
              {/* style={{ margin: "2rem 2rem 2rem 2rem" }} */}
              <Row className="g-4">
                {/* xs={1} md={2} */}
                {/* className={`${isMobile ? "text-center  " : ""}`} */}
                {/* Mobile screens */}
                <Col
                  xs={12}
                  sm={12}
                  md={5}
                  // lg={4}
                  //  style={{ margin: "2rem 0" }}
                  // className={
                  //   isMobile ? "d-flex flex-column align-items-center" : ""
                  // }
                  className={`d-flex flex-column ${
                    isMobile ? "text-center" : ""
                  }`}
                  style={{ padding: "3rem" }} //
                >
                  <Card.Title
                    //   className="text-2xl"
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      lineHeight: "1.2",
                      letterSpacing: "0px",
                      opacity: 1,
                      //margin: "1rem 0 0 0",
                      margin: "1rem 0 0 -1rem",
                    }}
                  >
                    Ministry
                  </Card.Title>
                  <Card.Subtitle
                    style={{
                      color: "#463F2F",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      lineHeight: "1.2",
                      letterSpacing: "0px",
                      opacity: 1,
                      // margin: "1rem 0 0 0",
                      fontSize: "1.5rem",
                      margin: "1rem 0 0 -1rem",
                    }}
                  >
                    F.I.R.E.
                  </Card.Subtitle>

                  <Card.Text
                    style={{
                      color: "#463F2F",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      lineHeight: "1.5",
                      letterSpacing: "0px",
                      opacity: 1,
                      // margin: "2.5rem 0 0 0",
                      margin: "2.5rem 0 0 -1rem",
                    }}
                  >
                    Fivefold ministry: Inspiring believers to passionately
                    pursue God’s divine purpose for Israel. Reconciling Jews and
                    Gentiles into “One New Man” and Equipping the Body of Christ
                    to live in Grace. Watch the video for an in-depth
                    explanation.
                  </Card.Text>
                </Col>

                {/*  medium and larger screens */}
                <Col
                  xs={12}
                  // sm={12}
                  md={7}
                  //  md={{ span: 6, offset: 1 }}
                  lg={7}
                  className="d-flex justify-content-center align-items-center "
                  // style={{
                  //   margin: "3rem 0 ",
                  // }}
                  style={{ padding: "2rem" }}
                >
                  <Card
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      padding: "0 ",
                      // margin: "0 ",
                      margin: "0 1rem 0 0",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%" /* 16:9 Aspect Ratio */,
                        height: 0,
                        overflow: "hidden",
                        //  maxWidth: "100%",
                        borderRadius: "8px",
                      }}
                      //animate__animated animate__rotateInUpRight
                      className="position-relative "
                      data-aos="zoom-in-left"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      <iframe
                        src="https://www.youtube.com/embed/tz4dWkR_cbw?si=nJWwCznnVMoMVWjb"
                        title="YouTube video player"
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
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Container>
        </div>
      </Card>
    </>
  );
};

export default MFire;
