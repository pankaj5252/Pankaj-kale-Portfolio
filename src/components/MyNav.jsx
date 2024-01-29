import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const MyNav = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="text-dark fw-bold">Pankaj Kale</Navbar.Brand>
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
            </Nav>
            <div className="header-social-links">
              <NavLink className="twitter">
                <i className="fa fa-twitter"></i>
              </NavLink>
              <NavLink
                to="https://instagram.com/pankaj_kale_96k?igshid=MzNlNGNkZWQ4Mg== "
                className="instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/in/pankaj-kale-pk5151"
                className="linkedin"
              >
                <i className="fa fa-linkedin"></i>
              </NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
