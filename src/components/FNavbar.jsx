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
        padding: "10px 20px",
      }}
    >
      <Container fluid>
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
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="text-center">
            <Nav.Link
              href="#watch"
              style={{ margin: "0 5px", fontSize: "1rem" }}
            >
              Watch
            </Nav.Link>
            <Nav.Link
              href="#mission"
              style={{ margin: "0 5px", fontSize: "1rem" }}
            >
              Mission
            </Nav.Link>
            <Nav.Link
              href="#ministry"
              style={{ margin: "0 5px", fontSize: "1rem" }}
            >
              Ministry
            </Nav.Link>
            <Nav.Link
              href="#team"
              style={{ margin: "0 5px", fontSize: "1rem" }}
            >
              Team
            </Nav.Link>
            <Nav.Link
              href="#contact"
              style={{ margin: "0 5px", fontSize: "1rem" }}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Button
            className="btn btn-success"
            style={{
              borderRadius: "4px",
              color: "#463F2F",
              backgroundColor: "#F49640",
              marginLeft: "100px",
              fontSize: "1rem",
            }}
          >
            Stay informed
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FNavbar;
