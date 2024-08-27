import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/Image.png";
const Endorsements = () => {
  return (
    <div
      style={{
        backgroundColor: "#F8F4EE ",
        width: "100vw",
      }}
    >
      {/* Heading Section */}
      <Container>
        <div className="text-center mb-8 ">
          <h1
            style={{
              color: "#F49640",
              lineHeight: "1.2",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.5rem",
              fontWeight: "400",
              padding: " 4rem 0 0.5rem 0",
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
            Endorsements
          </h2>
        </div>
      </Container>
      {/* End of Header Section */}

      {/* fluid className="p-4 p-sm-auto p-md-4 p-lg-6 " */}
      <Container fluid="md">
        {/* First Row */}
        <Row>
          <Col sm="12" md="4" lg="3" className="mb-9 text-center  ">
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "150px",
              }}
            />
          </Col>
          <Col sm="12" md="4" lg="3" className="mb-9 text-center ">
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "150px",
              }}
            />
          </Col>
          <Col sm="12" md="4" lg="3" className="mb-9 text-center ">
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "150px",
              }}
            />
          </Col>
          <Col sm="12" md="4" lg="3" className="mb-9 text-center ">
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "150px",
              }}
            />
          </Col>
          <Col
            sm="12"
            md="4"
            //  md={{ span: 4, offset: 4 }} // Offset the column by 4 to align under the second image in the first row
            lg={{ span: 3, offset: 3 }} // Offset the column by 3 to align under the second image in the first row
            className="mb-9 text-center "
          >
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "150px",
              }}
            />
          </Col>
          <Col sm="12" md="4" lg="3" className="mb-9 text-center ">
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "150px",
              }}
            />
          </Col>
        </Row>

        {/* Second Row */}
        {/* <Row>
          <Col
            sm="12"
            md={{ span: 4, offset: 4 }} // Offset the column by 4 to align under the second image in the first row
            lg={{ span: 3, offset: 3 }} // Offset the column by 3 to align under the second image in the first row
            className="mb-9 text-center text-md-start"
          >
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "150px",
              }}
            />
          </Col>
          <Col sm="12" md="4" lg="3" className="mb-9 text-center text-md-start">
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "150px",
              }}
            />
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default Endorsements;
