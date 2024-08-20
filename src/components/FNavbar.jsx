import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../assets/Fathers_House_Logo_V1.png";

const FNavbar = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#F8F4EE",
        fontSize: "16px",
        // padding: "10px 20px",
      }}
    >
      <Container>
        {/* fluid */}
        <Navbar.Brand href="/">
          {/* style={{ paddingLeft: "100px" }} */}
          <img
            src={logo}
            alt="Fathers_House_Logo"
            style={{
              width: "180px",
              height: "auto",
              marginLeft: "0",
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Toggle button with custom icon  */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle> */}

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav
            className="text-center"
            style={{
              color: "#463F2F",
              fontSize: "1rem",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
            }}
          >
            <Nav.Link href="#watch">Watch</Nav.Link>
            <Nav.Link href="#mission">Mission</Nav.Link>
            <Nav.Link href="#ministry">Ministry</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          {/* Button for small and medium screens (including tablets) */}
          <div className="text-center d-lg-none">
            <Button
              className="btn btn-success "
              style={{
                borderRadius: "4px",
                color: "#463F2F",
                backgroundColor: "#F49640",
                margin: "10px",
                fontSize: "1rem",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
              }}
            >
              Stay informed
            </Button>
          </div>
        </Navbar.Collapse>

        {/* Button for larger screens (lg and up) */}
        <div className="me-auto d-none d-lg-block">
          <Button
            className="btn btn-success"
            style={{
              borderRadius: "4px",
              color: "#463F2F",
              backgroundColor: "#F49640",
              margin: "10px",
              fontSize: "1rem",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
            }}
          >
            Stay informed
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default FNavbar;
