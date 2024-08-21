import React, { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../assets/Fathers_House_Logo_V1.png";
import { FaBars, FaTimes } from "react-icons/fa";

const FNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#F8F4EE",
        fontSize: "1rem",
      }}
    >
      <Container style={{ padding: " 0.30rem 2rem 0.30rem 2rem" }}>
        <Navbar.Brand href="/">
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
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            padding: "0",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </Navbar.Toggle>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav
            className="text-center "
            style={{
              color: "#463F2F",
              fontSize: "0.875rem",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
            }}
          >
            <Nav.Link
              href="#watch"
              style={{
                margin: "0 1rem",
              }}
              // className="mx-sm-4"
            >
              Watch
            </Nav.Link>
            <Nav.Link href="#mission" style={{ margin: "0 1rem" }}>
              Mission
            </Nav.Link>
            <Nav.Link href="#ministry" style={{ margin: "0 1rem" }}>
              Ministry
            </Nav.Link>
            <Nav.Link href="#team" style={{ margin: "0 1rem" }}>
              Team
            </Nav.Link>
            <Nav.Link href="#contact" style={{ margin: "0 1rem" }}>
              Contact
            </Nav.Link>
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
