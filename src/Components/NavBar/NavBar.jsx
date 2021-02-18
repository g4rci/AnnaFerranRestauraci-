import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div >
      <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Anna Ferran Restauració</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Que fem</Nav.Link>
          <Nav.Link href="/gallery">Galeria</Nav.Link>
          <NavDropdown title="Qui som" id="basic-nav-dropdown">
            <NavDropdown.Item href="/anna">Anna Ferran</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Maria Pieda</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contact">Contacte</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    <div className="phone">
      <a href="tel:+34645940076">
        <img className="phone" src="phone.png" alt="phone"/>
      </a>
    </div>
    </div>
    
  );
}
