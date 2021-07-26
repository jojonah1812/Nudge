import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class JobPostsPage extends Component {

    render() {
        return (
          <div>
            <div className="cardTitle">POST A JOB</div>

            <Form className="card">
              <Form.Group className="mb-3" controlId="formGridPosition">
                <Form.Label>Position</Form.Label>
                <Form.Control placeholder="Position name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridDatePosted">
                <Form.Label>Date Posted</Form.Label>
                <Form.Control type="date" placeholder="Date Posted" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridPositionID">
                <Form.Label>Position ID</Form.Label>
                <Form.Control placeholder="Position ID" />
              </Form.Group>
              <Form.Group controlId="formGridDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="Description" />
              </Form.Group>
              <Form.Group controlId="formGridLanguages">
                <Form.Label>Languages</Form.Label>
                <Form.Control placeholder="Coding languages required" />
              </Form.Group>
              <Form.Group controlId="formGridExperience">
                <Form.Label>Experience</Form.Label>
                <Form.Control placeholder="Years of experience" />
              </Form.Group>
              <Form.Group controlId="formGridSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control placeholder="Salary range" />
              </Form.Group>
              <Form.Group controlId="formGridAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control placeholder="Author of this job posting" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        );

    }

};


export default JobPostsPage;