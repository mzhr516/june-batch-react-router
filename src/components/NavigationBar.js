import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <NavLink to="">Home</NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink to="contact">Contact</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="about">about us</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/books">books</NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
