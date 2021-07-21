import React from "react";
import "./style.css";
import Form from 'react-bootstrap/Form';


<Form>
   
  <Form.Group className="mb-3" controlId="formGridPosition">
    <Form.Label>Position</Form.Label>
    <Form.Control placeholder="Postiion Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridDatePosted">
    <Form.Label>Date Posted</Form.Label>
    <Form.Control type="date" placeholder="Date Posted" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridPositionID">
      <Form.Label>Position ID</Form.Label>
      <Form.Control placeholder="Position ID" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridDescription">
      <Form.Label>Description</Form.Label>
      <Form.Control placeholder="Description" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLanguages">
      <Form.Label>Languages</Form.Label>
      <Form.Control placeholder="Coding Languages" />
    </Form.Group>
    
    <Form.Group as={Col} controlId="formGridExperience">
      <Form.Label>Experience</Form.Label>
      <Form.Control placeholder="Experience" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridSalary">
      <Form.Label>Salary</Form.Label>
      <Form.Control placeholder="Salary Range" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridAuthor">
      <Form.Label>Author</Form.Label>
      <Form.Control placeholder="Author of the Job Posting" />
    </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>