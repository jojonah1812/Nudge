import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="cardTitle">Log In</div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

        <div>
          <div className="cardTitle">Signup</div>
          <Form>
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
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="First and Last Name" />
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

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTechnicalEducation">
                <Form.Label>Tech education</Form.Label>
                <Form.Control placeholder="Technical Education" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSchool">
                <Form.Label>School</Form.Label>
                <Form.Control placeholder="School Name" />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default LandingPage;
