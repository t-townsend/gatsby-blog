import React from "react";
// import * as headerStyles from "./header.module.css"
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "gatsby";

export default (props) => (
    // ================= Bootstrap navbar ============
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Gatsby-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    //=============== custom navbar with custom css =========
    // <div>
    //     <h1 className={headerStyles.example}>{props.title}</h1>
    // </div>
)