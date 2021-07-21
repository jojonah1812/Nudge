import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';

//include React-bootstrap - ref pupster
function HeaderNav () {
  return(
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#nudge">NUDGE</Nav.Link>
       {/* <Nav.Link href="#link">Link</Nav.Link>*/}
       <Nav.Link href="./Userprofile">UserProfile</Nav.Link>
       <Nav.Link href="./JobPostForm">Post a Job</Nav.Link>
       <Nav.Link href="#link">Job Postings</Nav.Link>
       <Nav.Link href="LoginForm">Login</Nav.Link>
       <Nav.Link href="./SignupForm">Signup</Nav.Link>
       <Nav.Link href="./Logout">Logout</Nav.Link>
         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown> 
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)};

export default HeaderNav;