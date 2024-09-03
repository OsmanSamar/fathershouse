import React, { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../assets/Fathers_House_Logo_V1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const FNavbar = () => {
  // Button Style
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
        padding: "1rem",
        ///////Added padding
      }}
    >
      <Container style={{ padding: " 0.30rem 2rem 0.30rem 2rem" }}>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Fathers_House_Logo"
            style={{
              width: "170px",
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
          className="justify-content-center "
          //  style={{ height: "100vh", padding: "100px 0" }}
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
            <Nav.Link href="#watch" style={{ margin: "0 1rem" }}>
              <Link to="watch" smooth={true} duration={500}>
                Watch
              </Link>
            </Nav.Link>
            <Nav.Link href="#mission" style={{ margin: "0 1rem" }}>
              <Link to="mission" smooth={true} duration={500}>
                Mission
              </Link>
            </Nav.Link>
            <Nav.Link href="#ministry" style={{ margin: "0 1rem" }}>
              <Link to="ministry" smooth={true} duration={500}>
                Ministry
              </Link>
            </Nav.Link>
            <Nav.Link href="#team" style={{ margin: "0 1rem" }}>
              <Link to="team" smooth={true} duration={500}>
                Team
              </Link>
            </Nav.Link>
            <Nav.Link href="#contact" style={{ margin: "0 1rem" }}>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </Nav.Link>
          </Nav>

          {/* Button for small and medium screens (including tablets) */}
          <div className="text-center d-lg-none ">
            <Button
              className="btn btn-success"
              style={{
                borderRadius: "4px",
                color: isHovered ? "#ffffff" : "#463F2F",
                backgroundColor: isHovered ? "#d97f2e" : "#F49640",
                margin: "10px",
                fontSize: "0.875rem",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
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
              Stay informed
            </Button>
          </div>
        </Navbar.Collapse>
        {/* Button for larger screens (lg and up) */}
        <div className="me-auto d-none d-lg-block ">
          <Button
            className="btn btn-success"
            style={{
              borderRadius: "4px",
              color: isHovered ? "#ffffff" : "#463F2F",
              backgroundColor: isHovered ? "#d97f2e" : "#F49640",
              margin: "10px",
              padding: "0.8rem 1.7rem 0.8rem 1.7rem",
              fontSize: "0.875rem",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              textTransform: "none",
              transform: isClicked
                ? "scale(0.95)"
                : isHovered
                ? "scale(1.05)"
                : "scale(1)",
              transition:
                "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease",
              // boxShadow: isHovered ? "0px 8px 15px rgba(0, 0, 0, 0.2)" : "none",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsClicked(true)}
            onMouseUp={() => setIsClicked(false)}
          >
            Stay informed
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default FNavbar;
