import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const MyNav = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className="text-danger fw-bold">
            Pankaj Kale
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
              <NavLink className="nav-link" to="/resume">
                Resume
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
              <button className="btn nav-link">DarkMode</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
