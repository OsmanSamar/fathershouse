import React, { useState, useEffect } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { Container, Button } from "react-bootstrap";
import Avatar from "../assets/avatar.png";
import Image from "react-bootstrap/Image";

const TestimonialsSlider = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 576);

  const handleReadMore = (card) => {
    setExpandedCard(expandedCard === card ? null : card);
  };

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 576);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#DDD1C7 ",
        width: "100vw",
      }}
    >
      {/* Heading Section */}
      <Container>
        <div className="text-center mb-8">
          <h1
            style={{
              color: "#F49640",
              lineHeight: "1.2",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.5rem",
              fontWeight: "400",
              padding: " 5rem 0 0.5rem 0",
            }}
          >
            Father’s House
          </h1>
          <h2
            style={{
              color: "#463F2F",
              lineHeight: "1.2",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.7rem",
              fontWeight: "600",
              paddingBottom: "2rem",
            }}
          >
            The team
          </h2>
          {/* Dispaly on md and lg screen */}
          <div
            style={{
              margin: "2rem auto 0 auto",
              width: "48%",
              padding: "0 0.75rem",
            }}
            className="d-none d-md-block "
          >
            <p
              style={{
                color: "#463F2F",
                lineHeight: "1.2",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                fontWeight: "500",
                //   padding: "5px 5% 4rem 5% ",
              }}
            >
              The core team of the Father’s House includes individuals with
              successful backgrounds in the church arena and business. The
              multi-disciplinary team has a passion to get this ministry active.
            </p>
          </div>

          {/* Dispaly on sm  screen */}
          <div className="d-block d-md-none ">
            <p
              style={{
                color: "#463F2F",
                lineHeight: "1.2",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                fontWeight: "500",
                padding: "10px 12% 4rem 12% ",
              }}
            >
              The core team of the Father’s House includes individuals with
              successful backgrounds in the church arena and business. The
              multi-disciplinary team has a passion to get this ministry active.
            </p>
          </div>
        </div>
      </Container>
      {/* End of Header Section */}
      {/* Begin of Testimonials */}
      <Container className="p-4 p-sm-auto p-md-5 p-lg-7">
        <MDBRow>
          {[1, 2, 3].map((cardId) => (
            <MDBCol sm="12" md="6" lg="4" className="mb-9" key={cardId}>
              <MDBCard
                style={{
                  backgroundColor: "#DDD1C7",
                  boxShadow: "none",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#82725A",
                    overflow: "visible",
                    position: "relative",
                    height: "164px",
                    borderRadius: "0.375rem",
                    marginBottom: "1rem",
                    // marginTop: "1rem",
                  }}
                >
                  <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    <Image
                      src={Avatar}
                      alt={`Avatar ${cardId}`}
                      className="center  "
                      style={{
                        position: "absolute",
                        height: "250px",
                        top: "-86px",
                        left: "50%",
                        transform: "translate(-50%)",
                      }}
                      fluid
                    />
                  </div>
                </div>
                <MDBCardBody
                  className="text-center text-md-start"
                  style={{ padding: "0.5rem" }}
                >
                  <MDBCardTitle
                    className=" animate__animated animate__zoomInRight"
                    style={{
                      fontSize: "1.2rem",
                      lineHeight: "1.2",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "300",
                      marginTop: "0.5rem",
                    }}
                  >
                    {cardId === 1
                      ? "Marcel Gaasenbeek"
                      : cardId === 2
                      ? "Hans Groeneveld"
                      : "Aden Friedman"}
                  </MDBCardTitle>
                  <MDBCardText
                    style={{
                      color: "#463F2F",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.75rem",
                      lineHeight: "1.2rem",
                      letterSpacing: "0px",
                      opacity: expandedCard === cardId ? 1 : 0.7,
                      marginTop: "3rem",
                      textAlign: "left",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp:
                        isSmallScreen && expandedCard !== cardId ? 3 : "unset",
                      WebkitBoxOrient: "vertical",
                      textOverflow: "ellipsis",
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    <p>
                      {cardId === 1
                        ? "Pastor Marcel is the Chairman and Visionary. His experience includes the role as a senior pastor in a local church and leading a youth ministry in Netherlands. Thereafter, he became the senior pastor of a local church in the Netherlands, and his eyes started to open for Israel. Marcel stepped down from the role, in 2019 and seeked God for guidance on next steps. Marcel believes God has called him to lead the Father’s House and to become a pastor for pastors, introducing church leadership to Israel and exploring ministry as the One New Man. Aiming for churches to reach the lost, both Jew and Gentile."
                        : cardId === 2
                        ? "Hans is the mentor and entrepreneur in global ministry. He operates with a prophetic gift. As a visionary and strategist that serves with reaching out for opportunities for our clients to amplify their message in the Netherlands and Europe. With his over 40 years of experience in the Music and Media industry in Europe, Hans has the contacts, the ideas and actively seek opportunities to amplify the message. Hans has a passion and interest for new technologies. He continuously challenges the team to see what’s around the corner, and how we can use the new media for the extension of Gods glory."
                        : "Aden Friedman was born in Johannesburg, South Africa to an orthodox Jewish family, where they were very involved in the Chabad community. In 2010 Aden met Cara, a believer in Yeshua (Jesus) and through her family he realized that Yeshua was the Messiah of the Jewish people and the whole world. After giving his life to Yeshua, Aden felt called to share his faith with his Jewish people. In 2014, he and Cara were married, and Aden joined Jews for Jesus in South Africa later that year. Aden continues to serve with Jews for Jesus in Toronto as the Canada branch leader."}
                    </p>
                  </MDBCardText>
                  {isSmallScreen && (
                    <Button
                      style={{
                        color: "#463F2F",
                        backgroundColor: "transparent",
                        border: "none",
                        padding: "0",
                        marginBottom: "2rem",
                        marginTop: "0.5rem",
                        fontSize: "0.75rem",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        letterSpacing: "0px",
                        opacity: 1,
                        alignItems: "center",
                        boxShadow: "none",
                        textTransform: "none",
                        display: isSmallScreen ? "inline-flex" : "none",
                      }}
                      onClick={() => handleReadMore(cardId)}
                    >
                      {expandedCard === cardId ? "Show less" : "Read more"}
                      <span
                        style={{
                          marginLeft: "0.5rem",
                          display: "inline-block",
                          transform:
                            expandedCard === cardId
                              ? "rotate(-135deg)"
                              : "rotate(45deg)",
                          border: "solid #463F2F",
                          borderWidth: "0 0.1rem 0.1rem 0",
                          padding: "0.25rem",
                          textTransform: "none",
                        }}
                      ></span>
                    </Button>
                  )}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </Container>
    </div>
  );
};

export default TestimonialsSlider;
