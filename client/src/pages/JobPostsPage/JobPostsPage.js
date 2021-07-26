import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
//import Posts from "../../components/Posts";
import API from "../../utils/axios/API";
import { Col, Row, Container, Button } from "react-bootstrap";
import { TextArea, Input } from "../../components/Form";

const JobPosts = () => {
  // Setting our component's initial state
  const [posts, setPosts] = useState({})


  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setPosts({ ...posts, [name]: value })
  };
  // When the form is submitted, use the API.saveJob method to save the job data
  // Then reload jobs from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    //if (posts.position && posts.positionDesc && posts.positionReqLang
    //  && posts.positionReqTech && posts.positionReqExp && posts.salaryRange && posts.nameAuthor
    //  && posts.emailAuthor) {
        console.log("Hello")
      API.saveJob({
        position: posts.position,
        positionDesc: posts.positionDesc,
        positionReqLang: posts.positionReqLang,
        positionReqTech: posts.positionReqTech,
        positionReqExp: posts.positionReqExp,
        salaryRange: posts.salaryRange,
        nameAuthor: posts.nameAuthor,
        emailAuthor: posts.emailAuthor
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
 //   }
  };
  useEffect(() => {
    console.log(posts);
  }, [handleFormSubmit]);
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>OPEN POSITIONS</h1>
          </Jumbotron>
          <form onSubmit={handleFormSubmit}>
            <Input
              onChange={handleInputChange}
              name="position"
              placeholder="Position (required)"
            />
            <TextArea
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
              name="positionReqTech"
              placeholder="Technologies (required)"
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
              placeholder="Email of Author of Job Post (required)"
            />
            <Button type="submit"
              onClick={handleFormSubmit}
            >
              Submit
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}



export default JobPosts;