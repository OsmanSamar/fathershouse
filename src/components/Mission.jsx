import React, { useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const Mission = () => {
  // Button Style
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      style={{
        backgroundColor: "#DDD1C7",
        width: "100vw",
      }}
      className="text-center"
    >
      <Card.Body>
        <Card.Title
          style={{
            color: "#F49640",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: "1.2",
            letterSpacing: "0px",
            opacity: 1,
            margin: "4rem 4rem 2rem 4rem",
          }}
        >
          Father’s House
        </Card.Title>
        <Card.Subtitle
          style={{
            color: "#463F2F",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "1.875rem",
            lineHeight: "1.2",
            letterSpacing: "0px",
            opacity: 1,
            margin: "0 3rem 3rem 3rem",
          }}
        >
          Our mission
        </Card.Subtitle>
        {isSmallScreen ? (
          <>
            {/* Display only the first three texts on small screens */}
            {/* <Card.Text
              style={{
                color: "#463F2F",
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                lineHeight: "1.2",
                letterSpacing: "0px",
                opacity: 1,
                margin: "2rem 3rem 0 3rem",
              }}
            >
              Our mission is to{" "}
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                activate, empower and mobilize
              </span>{" "}
              believers through the fivefold ministry, inspiring them to
              passionately pursue God’s purpose for Israël, reconcile Jews and
              Gentiles, and{" "}
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                live victoriously in the abundant grace of God.
              </span>{" "}
            </Card.Text> */}

            <Card.Text
              style={{
                color: "#463F2F",
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                lineHeight: "1.2",
                letterSpacing: "0px",
                opacity: 1,
                // margin: "2rem 3rem 0 3rem",
                // width: "84%",
                margin: "2rem auto 0 auto",
                width: "92.5%",
              }}
            >
              Our mission is to{" "}
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                activate, empower and mobilize
              </span>{" "}
              believers through the fivefold ministry, inspiring them to
              passionately pursue God’s purpose for Israël, reconcile Jews and
              Gentiles, and{" "}
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                live victoriously in the abundant grace of God.
              </span>{" "}
            </Card.Text>

            {/*  Divider */}
            {isSmallScreen && (
              <div
                style={{
                  borderTop: "1px solid #463F2F",
                  marginTop: "4rem",
                  marginBottom: "4rem",
                  paddingTop: "1rem",
                  width: "100vw",
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></div>
            )}

            <Card.Text
              style={{
                color: "#463F2F",
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                letterSpacing: "0px",
                opacity: 1,
                margin: "1rem 1rem 2rem 1.2rem",
                //  padding: "2.5rem 0",
                textAlign: "left",
              }}
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
            >
              Central to our mission is the call to inspire believers to pursue
              God’s divine purpose for Israel. This is meant to be a blessing to
              all mankind. It involves understanding and embracing the
              significance of Israel in God’s redemptive plan and actively
              supporting initiatives that align with{" "}
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                God’s heart for Israel’s restoration and blessing.
              </span>{" "}
              Therefore we stand in solidarity with the Jewish people against
              antisemitism.
            </Card.Text>

            <Card.Text
              style={{
                color: "#463F2F",
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                letterSpacing: "0px",
                opacity: 1,
                margin: "1rem 1rem 2rem 1.2rem",
                //  padding: "2.5rem 0",
                textAlign: "left",
              }}
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
            >
              Furthermore, we are committed to the biblical mandate of
              reconciling Jews and Gentiles into the “One New Man.” This unity
              transcends cultural, ethnic, and religious barriers, emphasizing
              the shared identity and inheritance we have through and in Christ.
              By fostering mutual respect, understanding, and cooperation
              between Jews and Gentiles, we{" "}
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                embody the love and reconciliation that Christ has accomplished
                on the cross.
              </span>{" "}
            </Card.Text>

            <Card.Text
              style={{
                color: "#463F2F",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                lineHeight: "1.5rem",
                letterSpacing: "0px",
                // padding: "0.7rem",
                //padding: "2.5rem 0",
                textAlign: "left",
                opacity: expanded ? 1 : 0.7, // Full opacity when expanded
                margin: "1rem 1rem 2rem 1.2rem",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: expanded ? "unset" : 3, // Show 3 lines if not expanded.
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
                transition: "opacity 0.3s ease-in-out", // Smooth transition for opacity

                //overflow: "hidden", display: "-webkit-box", WebkitBoxOrient: "vertical".
                // These CSS properties work together to ensure the text truncates
                //after 3 lines and displays an ellipsis (...) when clipped.
              }}
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
            >
              To accomplish the above our dedication to equipping the Body of
              Christ to live in grace is of absolute importance. Grace is the
              unmerited Favor and empowerment of God that enables believers to
              walk in{" "}
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                freedom, forgiveness, and righteousness.
              </span>{" "}
              Through teaching, mentoring, and practical ministry, we empower
              believers to experience the fullness of God’s grace, leading to
              transformed lives, restored relationships, and impactful service
              in the Kingdom.
            </Card.Text>

            {expanded && (
              <>
                <Card.Text
                  style={{
                    color: "#463F2F",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: "1.5rem",
                    letterSpacing: "0px",
                    opacity: 1,
                    margin: "1rem 1rem 1rem 1.2rem",
                    // padding: "0.7rem",
                    // padding: "2.5rem 0",
                    textAlign: "left",
                  }}
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="10"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-cubic"
                >
                  Our mission is to help to establish the{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    transformative power of the Fivefold ministry,
                  </span>{" "}
                  which serves as a catalyst for believers to fervently pursue
                  God’s divine purpose for Israel, foster unity between Jews and
                  Gentiles as the{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    “One New Man”
                  </span>{" "}
                  , and equip the Body of Christ to live victoriously in grace.
                </Card.Text>

                <Card.Text
                  style={{
                    color: "#463F2F",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: "1.5rem",
                    letterSpacing: "0px",
                    opacity: 1,
                    margin: "1rem 1rem 1rem 1.2rem",
                    // padding: "0.7rem",
                    // padding: "2.5rem 0",
                    textAlign: "left",
                  }}
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="10"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-cubic"
                >
                  The Fivefold ministry, comprising apostles, prophets,
                  evangelists, pastors, and teachers, stands as pillars of
                  spiritual guidance and empowerment within the Church.{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Apostles
                  </span>{" "}
                  pioneer new territories, establishing foundations of faith and
                  kingdom principles.{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Prophets
                  </span>{" "}
                  bring divine revelation, insight and power, guiding believers
                  in aligning with God’s will and purposes.{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Evangelists
                  </span>{" "}
                  passionately spread the Gospel, leading souls to Christ and
                  igniting a fervor for salvation. Pastors nurture and care for
                  God’s flock, providing pastoral care, example, and spiritual
                  nourishment. Teachers impart knowledge, wisdom, and
                  understanding, equipping believers to grow in faith and
                  maturity.
                </Card.Text>
                {/*  */}
              </>
            )}

            <Button
              style={{
                color: "#463F2F",
                backgroundColor: "transparent",
                border: "none",
                padding: "0",
                fontSize: "1rem",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                letterSpacing: "0px",
                opacity: 1,
                display: "inline-flex", // Aligns text and arrow in one line
                alignItems: "center",
                boxShadow: "none",
                textTransform: "none",
              }}
              onClick={handleReadMore}
            >
              {expanded ? "Show less" : "Read more"}
              <span
                style={{
                  marginLeft: "0.5rem",
                  marginBottom: "0.5rem",
                  display: "inline-block",
                  transform: expanded ? "rotate(-135deg)" : "rotate(45deg)", // Rotate arrow up when expanded
                  border: "solid #463F2F",
                  borderWidth: "0 0.1rem 0.1rem 0",
                  padding: "0.25rem",
                }}
              ></span>
            </Button>
          </>
        ) : (
          <>
            {/* Display all texts on medium screens */}

            <Card.Text
              style={{
                color: "#463F2F",
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                letterSpacing: "0px",
                opacity: 1,
                margin: "2rem auto 0 auto",
                width: "48%",
              }}
            >
              {}
              Our mission is to{" "}
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                activate, empower and mobilize
              </span>{" "}
              believers through the fivefold ministry, inspiring them to
              passionately pursue God’s purpose for Israël, reconcile Jews and
              Gentiles, and{" "}
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                live victoriously in the abundant grace of God.
              </span>{" "}
            </Card.Text>
            <Container className="p-4 p-sm-auto p-md-5 p-lg-7">
              <Row
                style={{
                  //margin: "1rem auto 0 auto",
                  //padding: "2.5rem",
                  textAlign: "left",
                }}
              >
                <Col>
                  <Card.Text
                    style={{
                      color: "#463F2F",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: "1.5rem",
                      letterSpacing: "0px",
                      opacity: 1,
                      margin: "1rem 1rem 1rem 0",
                      padding: "0.5rem  1rem  0.5rem 0",
                      // padding: "0.7rem",
                      textAlign: "left",
                    }}
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="10"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out-cubic"
                  >
                    Central to our mission is the call to inspire believers to
                    pursue God’s divine purpose for Israel. This is meant to be
                    a blessing to all mankind. It involves understanding and
                    embracing the significance of Israel in God’s redemptive
                    plan and actively supporting initiatives that align with{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      God’s heart for Israel’s restoration and blessing.
                    </span>{" "}
                    Therefore we stand in solidarity with the Jewish people
                    against antisemitism.
                  </Card.Text>

                  <Card.Text
                    style={{
                      color: "#463F2F",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: "1.5rem",
                      letterSpacing: "0px",
                      opacity: 1,
                      //  margin: "1rem 1rem 1rem 1.5rem",
                      //  padding: "0.7rem",
                      // padding: "0.5rem 0",
                      padding: "0 1rem  0.5rem 0",
                      textAlign: "left",
                    }}
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="10"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out-cubic"
                  >
                    Furthermore, we are committed to the biblical mandate of
                    reconciling Jews and Gentiles into the “One New Man.” This
                    unity transcends cultural, ethnic, and religious barriers,
                    emphasizing the shared identity and inheritance we have
                    through and in Christ. By fostering mutual respect,
                    understanding, and cooperation between Jews and Gentiles, we{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      embody the love and reconciliation that Christ has
                      accomplished on the cross.
                    </span>{" "}
                  </Card.Text>

                  <Card.Text
                    style={{
                      color: "#463F2F",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: "1.5rem",
                      letterSpacing: "0px",
                      opacity: 1,
                      // margin: "1rem 1rem 1rem 1.5rem",
                      // padding: "0.7rem",
                      //  padding: "0.5rem 0",
                      // padding: "0 1rem  0.5rem 0",
                      margin: "1rem 1rem 1rem 0",
                      padding: "0.5rem  1rem  0.5rem 0",
                      textAlign: "left",
                    }}
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out-cubic"
                  >
                    To accomplish the above our dedication to equipping the Body
                    of Christ to live in grace is of absolute importance. Grace
                    is the unmerited Favor and empowerment of God that enables
                    believers to walk in{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      freedom, forgiveness, and righteousness.
                    </span>{" "}
                    Through teaching, mentoring, and practical ministry, we
                    empower believers to experience the fullness of God’s grace,
                    leading to transformed lives, restored relationships, and
                    impactful service in the Kingdom.
                  </Card.Text>
                </Col>

                <Col>
                  <Card.Text
                    style={{
                      color: "#463F2F",
                      fontFamily: "Inter, sans-serif",
                      // fontSize: "1rem",
                      // lineHeight: "1.2",
                      fontSize: "0.875rem",
                      lineHeight: "1.5rem",
                      letterSpacing: "0px",
                      opacity: 1,
                      //  margin: "1rem 1rem 1rem 1.5rem",
                      //  padding: "0.5rem 0",
                      // padding: "2.5rem 0",
                      //  padding: "0 1rem  0.5rem 0",
                      margin: "1rem 1rem 1rem 0",
                      padding: "0.5rem  1rem  0.5rem 0",
                      textAlign: "left",
                    }}
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="10"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out-cubic"
                  >
                    Our mission is to help to establish the{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      transformative power of the Fivefold ministry,
                    </span>{" "}
                    which serves as a catalyst for believers to fervently pursue
                    God’s divine purpose for Israel, foster unity between Jews
                    and Gentiles as the{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      “One New Man”
                    </span>{" "}
                    , and equip the Body of Christ to live victoriously in
                    grace.
                  </Card.Text>

                  <Card.Text
                    style={{
                      color: "#463F2F",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: "1.5rem",
                      letterSpacing: "0px",
                      opacity: 1,
                      //  margin: "1rem 1rem 3rem 1.5rem",
                      // padding: "0.7rem",
                      //  padding: "0.5rem 0",
                      //  padding: "0 1rem  0.5rem 0",
                      margin: "1rem 1rem 1rem 0",
                      padding: "0.5rem  1rem  0.5rem 0",
                      textAlign: "left",
                    }}
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out-cubic"
                  >
                    The Fivefold ministry, comprising apostles, prophets,
                    evangelists, pastors, and teachers, stands as pillars of
                    spiritual guidance and empowerment within the Church.{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Apostles
                    </span>{" "}
                    pioneer new territories, establishing foundations of faith
                    and kingdom principles.{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Prophets
                    </span>{" "}
                    bring divine revelation, insight and power, guiding
                    believers in aligning with God’s will and purposes.{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Evangelists
                    </span>{" "}
                    passionately spread the Gospel, leading souls to Christ and
                    igniting a fervor for salvation. Pastors nurture and care
                    for God’s flock, providing pastoral care, example, and
                    spiritual nourishment. Teachers impart knowledge, wisdom,
                    and understanding, equipping believers to grow in faith and
                    maturity.
                  </Card.Text>
                  <Button
                    className="btn btn-success"
                    style={{
                      // color: "#ffffff",
                      color: isHovered ? "#463F2F" : "#ffffff",
                      // backgroundColor: "#463f2f",
                      backgroundColor: isHovered ? "#d97f2e" : "#463f2f",
                      border: "4px",
                      padding: "0.5rem 1rem",
                      textAlign: "center",
                      fontSize: "1rem",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      letterSpacing: "0px",
                      opacity: 1,
                      marginLeft: "2rem",
                      textTransform: "none",
                      transform: isClicked
                        ? "scale(0.95)"
                        : isHovered
                        ? "scale(1.05)"
                        : "scale(1)",
                      transition:
                        "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease",
                      // boxShadow: isHovered
                      //   ? "0px 8px 15px rgba(0, 0, 0, 0.2)"
                      //   : "none",
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onMouseDown={() => setIsClicked(true)}
                    onMouseUp={() => setIsClicked(false)}
                  >
                    Mission in short
                  </Button>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default Mission;
