import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
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
import Accordion from "react-bootstrap/Accordion";

const Test = () => {
  const [expanded, setExpanded] = useState(false);
  const [expandedTwo, setExpandedTwo] = useState(false);
  const [expandedThree, setExpandedThree] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "( max-width:767px)" });

  // const handleReadMore = (index) => {
  //   setExpandedStates(
  //     expandedStates.map((state, i) => (i === index ? !state : state))
  //   );
  // };

  const handleReadMore = () => {
    setExpanded(!expanded);
  };
  const handleReadMoreT = () => {
    setExpandedTwo(!expandedTwo);
  };
  const handleReadMoreTh = () => {
    setExpandedThree(!expandedThree);
  };

  //   function CustomToggle({ children, eventkey})
  //   {

  // const togleOnClick = useAccordionButton(eventkey, () =>

  // );

  // }

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
              padding: " 2rem 0 0.5rem 0",
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
          <p
            style={{
              color: "#463F2F",
              lineHeight: "1.2",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
              fontWeight: "500",
              padding: "10px 15% 2em 15% ",
            }}
          >
            The core team of the Father’s House includes individuals with
            successful backgrounds in the church arena and business. The
            multi-disciplinary team has a passion to get this ministry active.
          </p>
        </div>
      </Container>
      {/* End of Header Section */}
      {/* Begin of Testimonials */}
      <Container className="p-4 p-sm-auto p-md-3 p-lg-7">
        <MDBRow>
          {/* Testimonails one */}

          <MDBCol sm="12" md="6" lg="4" className="mb-9">
            <MDBCard
              style={{
                backgroundColor: "#DDD1C7 ",
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
                  marginBottom: "2rem",
                }}
              >
                <Image
                  src={Avatar}
                  alt="Marcel Gaasenbeek"
                  className="center"
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

              <MDBCardBody className="text-center text-md-start">
                <MDBCardTitle
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: "1.2",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "300",
                    padding: "0.1rem",
                  }}
                >
                  Marcel Gaasenbeek
                </MDBCardTitle>
                <MDBCardText
                  style={{
                    color: "#463F2F",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: "1.2rem",
                    letterSpacing: "0px",
                    opacity: isSmallScreen && !expanded ? 0.7 : 1, // Full opacity when expanded
                    marginTop: "3rem",
                    textAlign: "left",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: isSmallScreen && !expanded ? 3 : "unset", // Show 3 lines if not expanded. Limits the text to 3 lines when not expanded
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis",
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <p>
                    Pastor Marcel is the Chairman and Visionary. His experience
                    includes the role as a senior pastor in a local church and
                    leading a youth ministry in Netherlands.
                  </p>
                  <p>
                    Thereafter, he became the senior pastor of a local church in
                    the Netherlands, and his eyes started to open for Israel.
                    Marcel stepped down from the role, in 2019 and seeked God
                    for guidance on next steps.
                  </p>
                  <p>
                    Marcel believes God has called him to lead the Father’s
                    House and to become a pastor for pastors, introducing church
                    leadership to Israel and exploring ministry as the One New
                    Man. Aiming for churches to reach the lost, both Jew and
                    Gentile.
                  </p>
                </MDBCardText>
                {isSmallScreen && (
                  <Button
                    style={{
                      color: "#463F2F",
                      backgroundColor: "transparent",
                      border: "none",
                      padding: "0",
                      fontSize: "0.75rem",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0px",
                      opacity: 1,
                      alignItems: "center",
                      boxShadow: "none",
                      display: isSmallScreen ? "inline-flex" : "none",
                    }}
                    onClick={handleReadMore}
                  >
                    {expanded ? "Show less" : "Read more"}
                    <span
                      style={{
                        marginLeft: "0.5rem",
                        display: "inline-block",
                        transform: expanded
                          ? "rotate(-135deg)"
                          : "rotate(45deg)", // Rotate arrow up when expanded
                        border: "solid #463F2F",
                        borderWidth: "0 0.1rem 0.1rem 0",
                        padding: "0.25rem",
                      }}
                    ></span>
                  </Button>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          {/* Testimonails twee */}

          <MDBCol sm="12" md="6" lg="4" className="mb-9">
            <MDBCard
              style={{
                backgroundColor: "#DDD1C7 ",
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
                  marginBottom: "2rem",
                }}
              >
                <Image
                  src={Avatar}
                  alt="Marcel Gaasenbeek"
                  className="center"
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
              <MDBCardBody className="text-center text-md-start">
                <MDBCardTitle
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: "1.2",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "300",
                    padding: "0.1rem",
                  }}
                >
                  Hans Groeneveld
                </MDBCardTitle>
                <MDBCardText
                  style={{
                    color: "#463F2F",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: "1.2rem",
                    letterSpacing: "0px",
                    opacity: isSmallScreen && !expandedTwo ? 0.7 : 1, // Full opacity when expanded
                    marginTop: "3rem",
                    textAlign: "left",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp:
                      isSmallScreen && !expandedTwo ? 3 : "unset", // Show 3 lines if not expanded. Limits the text to 3 lines when not expanded
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis",
                    transition: "opacity 0.3s ease-in-out", // Smooth transition for opacity
                  }}
                >
                  <p>
                    Hans is the mentor and entrepreneur in global ministry. He
                    operates with a prophetic gift. As a visionary and
                    strategist that serves with reaching out for opportunities
                    for our clients to amplify their message in the Netherlands
                    and Europe. With his over 40 years of experience in the
                    Music and Media industry in Europe, Hans has the contacts,
                    the ideas and actively seek opportunities to amplify the
                    message.
                  </p>
                  <p>
                    Hans has a passion and interest for new technologies. He
                    continuously challenges the team to see what’s around the
                    corner, and how we can use the new media for the extension
                    of Gods glory
                  </p>
                </MDBCardText>
                {isSmallScreen && (
                  <Button
                    style={{
                      color: "#463F2F",
                      backgroundColor: "transparent",
                      border: "none",
                      padding: "0",
                      fontSize: "0.75rem",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0px",
                      opacity: 1,
                      alignItems: "center",
                      boxShadow: "none",
                      display: isSmallScreen ? "inline-flex" : "none",
                    }}
                    onClick={handleReadMoreT}
                  >
                    {expandedTwo ? "Show less" : "Read more"}
                    <span
                      style={{
                        marginLeft: "0.5rem",
                        display: "inline-block",
                        transform: expandedTwo
                          ? "rotate(-135deg)"
                          : "rotate(45deg)", // Rotate arrow up when expanded
                        border: "solid #463F2F",
                        borderWidth: "0 0.1rem 0.1rem 0",
                        padding: "0.25rem",
                      }}
                    ></span>
                  </Button>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          {/* Testimonails three*/}
          <MDBCol sm="12" md="6" lg="4">
            <MDBCard
              style={{
                backgroundColor: "#DDD1C7 ",
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
                  marginBottom: "2rem",
                }}
              >
                <Image
                  src={Avatar}
                  alt="Marcel Gaasenbeek"
                  className="center"
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
              <MDBCardBody className="text-center text-md-start">
                <MDBCardTitle
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: "1.2",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "300",
                    padding: "0.1rem",
                  }}
                >
                  Aden Friedman
                </MDBCardTitle>

                <MDBCardText
                  style={{
                    color: "#463F2F",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: "1.2rem",
                    letterSpacing: "0px",
                    opacity: isSmallScreen && !expandedThree ? 0.7 : 1,
                    marginTop: "3rem",
                    textAlign: "left",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp:
                      isSmallScreen && !expandedThree ? 3 : "unset",
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis",
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <p>
                    Aden Friedman was born in Johannesburg, South Africa to an
                    orthodox Jewish family, where they were very involved in the
                    Chabad community.
                  </p>
                  <p>
                    In 2010 Aden met Cara, a believer in Yeshua (Jesus) and
                    through her family he realized that Yeshua was the Messiah
                    of the Jewish people and the whole world.
                  </p>{" "}
                  <p>
                    After giving his life to Yeshua, Aden felt called to share
                    his faith with his Jewish people. In 2014, he and Cara were
                    married, and Aden joined Jews for Jesus in South Africa
                    later that year. Aden continues to serve with Jews for Jesus
                    in Toronto as the Canada branch leader.
                  </p>
                </MDBCardText>
                {isSmallScreen && (
                  <Button
                    style={{
                      color: "#463F2F",
                      backgroundColor: "transparent",
                      border: "none",
                      padding: "0",
                      fontSize: "0.75rem",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0px",
                      opacity: 1,
                      alignItems: "center",
                      boxShadow: "none",
                      display: isSmallScreen ? "inline-flex" : "none",
                    }}
                    onClick={handleReadMoreTh}
                  >
                    {expandedThree ? "Show less" : "Read more"}
                    <span
                      style={{
                        marginLeft: "0.5rem",
                        display: "inline-block",
                        transform: expandedThree
                          ? "rotate(-135deg)"
                          : "rotate(45deg)",
                        border: "solid #463F2F",
                        borderWidth: "0 0.1rem 0.1rem 0",
                        padding: "0.25rem",
                      }}
                    ></span>
                  </Button>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </Container>
    </div>
  );
};
export default Test;
