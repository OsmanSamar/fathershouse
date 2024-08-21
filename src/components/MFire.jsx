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
            width: "100vw",
          }}
        >
          <Container>
            <Card.Body
              style={
                {
                  // margin: "2rem 7rem 4rem 7rem",
                }
              }
            >
              {/* <Row className={isMobile ? "text-center" : ""}> */}
              <Row className={`${isMobile ? "text-center  " : ""}`}>
                {/* Mobile screens */}
                <Col
                  xs={12}
                  md={6}
                  className={
                    isMobile ? "d-flex flex-column align-items-center" : ""
                  }
                >
                  <Card.Title
                    className="text-2xl"
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      lineHeight: "1.2",
                      letterSpacing: "0px",
                      opacity: 1,
                      margin: "1rem 1rem 0 1.2rem",
                      padding: "0.7rem",
                      // margin: "0.5rem",
                      // padding: "0.5rem",
                    }}
                  >
                    Ministry
                  </Card.Title>
                  <Card.Subtitle
                    style={{
                      color: "#463F2F",
                      fontFamily: "Inter, sans-serif",
                      // fontSize: "2rem",
                      fontWeight: 600,
                      lineHeight: "1.2",
                      letterSpacing: "0px",
                      opacity: 1,
                      margin: "0 1rem 2rem 1.2rem",
                      padding: "0.7rem",
                      fontSize: "1.5rem",

                      // margin: "0.5rem",
                      // padding: "0.5rem",
                    }}
                  >
                    F.I.R.E.
                  </Card.Subtitle>

                  <Card.Text
                    style={{
                      color: "#463F2F",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      lineHeight: "1.5",
                      letterSpacing: "0px",
                      opacity: 1,
                      margin: "0 1rem 2rem 1.2rem",
                      padding: "0.7rem",

                      // margin: "0.5rem",
                      // padding: "0.5rem",
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
                  md={6}
                  className="d-flex justify-content-center align-items-center "
                >
                  <Card
                    style={{
                      width: "auto",
                      background: "transparent",
                      border: "none",
                      padding: "2rem 0.5rem 5rem 0.5rem",
                      margin: "0 1rem 2rem 1.2rem",
                      // padding: "0.7rem",
                    }}
                  >
                    <Card.Img
                      // src={MinistryImage}
                      alt="Ministry Image"
                      style={{
                        opacity: "1",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
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
