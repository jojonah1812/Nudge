import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap';

//include React-bootstrap - ref pupster
function HeaderNav() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container class="navFlex">
          <Navbar.Brand href="#home">NUDGE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="./User">UserProfile</Nav.Link>
              <Nav.Link href="./Post">Post a Job</Nav.Link>
              <Nav.Link href="./Jobs">Job Board</Nav.Link>
              <Nav.Link href="./Login">Login/Signup</Nav.Link>
              <Button type="submit">Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );};

export default HeaderNav;