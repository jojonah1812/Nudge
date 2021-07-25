import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Input from "react-bootstrap/Form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Posts from "../../components/Posts";
import API from "../../utils/axios/API";
import { Col, Row, Container } from "react-bootstrap";
//import { List } from "../../components/List";

/*
function Post() {
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
                    <Button variant="primary" type="delete">
                        Delete
                    </Button>
                </Form>
            </div>
        )

    }



import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
*/

const JobPosts = () => {
  // Setting our component's initial state
  const [jobs, setJobs] = useState([])
  const [posts, setPosts] = useState({})

  // Load all jobs and store them with setJobs
  useEffect(() => {
    loadJobs()
    }, []);
  useEffect(() => {
    console.log(jobs);
  }, [jobs])
  // Loads all jobs and sets them to jobs
  function loadJobs(posts) {
    API.getJobs()
      .then(res => 
        setJobs(res.data)
      )
      .catch(err => console.log(err));
  };
  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteJob(id) {
    API.deleteJob(id)
      .then(res => loadJobs())
      .catch(err => console.log(err));
  }
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setPosts({...posts, [name]: value})
  };
  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (Posts.position && Posts.positionDesc && Posts.datePosted && Posts.positionDesc
      && Posts.positionReqLang && Posts.positionReqTech && Posts.positionReqExp 
      && Posts.salaryRange && Posts.nameAuthor && Posts.emailAuthor ) {
      API.saveJob({
        position: Posts.position,
        datePosted: Posts.datePosted,
        positionDesc: Posts.positionDesc,
        positionReqLang: Posts.positionReqLang,
        positionReqTech: Posts.positionReqTech,
        positionReqExp: Posts.positionReqExp,
        salaryRange: Posts.salaryRange,
        nameAuthor: Posts.nameAuthor, 
        emailAuthor: Posts.emailAuthor, 
      })
          
      .then(res => loadJobs())
        .catch(err => console.log(err));
    }
  };
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>JOB POST</h1>
          </Jumbotron>
            <Form>
              <Input
                onChange={handleInputChange}
                name="position"
                placeholder="Position (required)"
              />
              <Input
                onChange={handleInputChange}
                name="positionDesc"
                placeholder="Position Description(required)"
              />
              <Input
                onChange={handleInputChange}
                name="positionReqLang"
                placeholder="Coding Language (required)"
              />
               <Input
                onChange={handleInputChange}
                name="positionReqExp"
                placeholder="Experience(required)"
              />
               <Input
                onChange={handleInputChange}
                name="salaryRange"
                placeholder="Salary Range (required)"
              />
              <Input
                onChange={handleInputChange}
                name="nameAuthor"
                placeholder="Author of Job Post (required)"
              />
              <Input
                onChange={handleInputChange}
                name="nameEmail"
                placeholder="Author of Job Post (required)"
              />
              <Button
                disabled={!(posts.position && posts.positionDesc)}
                onClick={handleFormSubmit}
              >
                Submit Job
              </Button>
              <Button
                disabled={!(posts.position && posts.positionDesc)}
                onClick={handleFormSubmit}
              >
                Delete Job
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }



export default JobPosts;