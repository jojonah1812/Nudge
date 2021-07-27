import React, { useState, useEffect, Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Input from "react-bootstrap/Form";
//import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class UserProfile extends Component {
  render() {
    return (
      <div className="flexA">
        <div className="userProfPic">
          <img src="userProfMVP.png"></img>
        </div>

        {/* <div className="cardTitle">USER PROFILE</div>
            <Form className="cardA">
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="First and Last Name"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control placeholder="phone number" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control placeholder="City" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control placeholder="Zip code" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridStartDate">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control type="date" placeholder="mm/dd/yyyy" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridSalary">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control placeholder="Salary" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridJobType">
                  <Form.Label>Job Type</Form.Label>
                  <Form.Control placeholder="FT/PT/Contract" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridExperienceLevel">
                  <Form.Label>Experience </Form.Label>
                  <Form.Control placeholder="Entry/Mid-level/Senior" />
                </Form.Group>
              </Row>



  
export default UserProfile;

              
            </Form> */}
      </div>
    );
  }
}

export default UserProfile;

{
  /* <Button variant="primary" type="edit">
            Edit
            </Button> */
}
