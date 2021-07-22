import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class JobPostsPage extends Component {

    render() {
        return (
            <div>
                <div>JOB POSTS</div>


                <Form>
                    <Form.Group className="mb-3" controlId="formGridPosition">
                        <Form.Label>Position</Form.Label>
                        <Form.Control placeholder="Postiion Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridDatePosted">
                        <Form.Label>Date Posted</Form.Label>
                        <Form.Control type="date" placeholder="Date Posted" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridPositionID">
                        <Form.Label>Position ID</Form.Label>
                        <Form.Control placeholder="Position ID" />
                    </Form.Group>
                    <Form.Group  controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control placeholder="Description" />
                    </Form.Group>
                    <Form.Group  controlId="formGridLanguages">
                        <Form.Label>Languages</Form.Label>
                        <Form.Control placeholder="Coding Languages" />
                    </Form.Group>
                    <Form.Group  controlId="formGridExperience">
                        <Form.Label>Experience</Form.Label>
                        <Form.Control placeholder="Experience" />
                    </Form.Group>
                    <Form.Group  controlId="formGridSalary">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control placeholder="Salary Range" />
                    </Form.Group>
                    <Form.Group  controlId="formGridAuthor">
                        <Form.Label>Author</Form.Label>
                        <Form.Control placeholder="Author of the Job Posting" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )

    }

};


export default JobPostsPage;