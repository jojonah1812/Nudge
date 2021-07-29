import React from "react";
//import { Link } from "react-router-dom";
import "./style.css";
import {Navbar, Nav, Container} from 'react-bootstrap';

//include React-bootstrap - ref pupster
function HeaderNav() {
  return (
    <div>
      <Navbar className="navStyle" bg="light" expand="lg">
        <Container className="flex">
          <Navbar.Brand className="brand" href="#home">NUDGE</Navbar.Brand>
          <Navbar.Toggle aria-controls />
          <Navbar.Collapse>
            <Nav className="flex">
              <Nav.Link href="./User">UserProfile</Nav.Link>
              <Nav.Link href="./Post">Post a Job</Nav.Link>
              <Nav.Link href="./Jobs">Job Board</Nav.Link>
              <Nav.Link href="./Login">Login/Signup</Nav.Link>
              <Nav.Link href="./Login">Logout</Nav.Link>
              {/* <Button type="submit">Logout</Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );};

export default HeaderNav;