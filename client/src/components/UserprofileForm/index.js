import React from "react";
import "./style.css";
import Form from 'react-bootstrap/Form';
//confirm if s/b form or list
const User = () => {
  return (
    
   <div className="user">

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
      <Form.Control type="email" placeholder="First and Last Name" />
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
      <Form.Label>PExperience </Form.Label>
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

  {/* <Button variant="primary" type="edit">
   Edit
  </Button> */}
</Form>

</div>

 )};

export default User;