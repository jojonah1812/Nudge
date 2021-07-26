import React from "react";
import "./style.css";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Col, Row } from "react-bootstrap";
//User Profile Page Form  Component

function Users() {
  return (
    <div>

      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="eCheckbox for following text input"/>
        <FormControl aria-label="Employer"/>
      </InputGroup>

      
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="First and Last Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="passwordl" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Phone" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control placeholder="State" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridZipcode">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control placeholder="Zip Code" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridStartDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control placeholder="mm/dd/yyyy" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridSalaryRange">
          <Form.Label>Salary Range</Form.Label>
          <Form.Control type="date" placeholder="Salary Range" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridtypeOfWork">
          <Form.Label>Type of Work</Form.Label>
          <Form.Control placeholder="FT/PT/Contract" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridExperienceLevel">
          <Form.Label>Experience</Form.Label>
          <Form.Control placeholder="Entry/Mid-level/Senior/Yrs" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridTechnicalEdu">
          <Form.Label>Technical Education</Form.Label>
          <Form.Control placeholder="Technical Education" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridSchool">
          <Form.Label>School</Form.Label>
          <Form.Control placeholder="School" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridSkillset">
          <Form.Label>Skillset</Form.Label>
          <Form.Control placeholder="Skillset" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridcompany">
          <Form.Label>Company</Form.Label>
          <Form.Control placeholder="Company" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridcompanyDesc">
          <Form.Label>Company Description</Form.Label>
          <Form.Control placeholder="Company Description" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridpostedJobs">
          <Form.Label>Posted Jobs</Form.Label>
          <Form.Control placeholder="Post Jobs" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Button variant="primary" type="edit">
          Edit
        </Button>
      </Row>
    </div>

  );
}

export default Users;