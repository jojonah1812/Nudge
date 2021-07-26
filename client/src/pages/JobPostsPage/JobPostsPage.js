import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class JobPostsPage extends Component {

    render() {
        return (
          <div>
            <div className="cardTitle">POST A JOB</div>

            <Form className="cardA">
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


const JobPosts = () => {
  // Setting our component's initial state
  const [jobs, setJobs] = useState([])
  const [posts, setPosts] = useState({})

  // Load all jobs and store them with setJobs
  useEffect(() => {
    loadJobs()
  }, [])
  useEffect(() => {
console.log(jobs);
}, [jobs]);

  // Loads all jobs and sets them to jobs
  function loadJobs() {
    API.getJobs()
      .then(res =>
        setJobs(res.data)
      )
      .catch(err => console.log(err));
  }
  // Deletes a job from the database with a given id, then reloads jos from the db
  function deleteJob(id) {
    API.deleteJob(id)
       .then(res => loadJobs())
       .catch(err => console.log(err));
    }
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setPosts({...posts, [name]: value })
  };
  // When the form is submitted, use the API.saveJob method to save the job data
  // Then reload jobs from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (posts.position && posts.datePosted && posts.positionDesc && posts.positionReqLang
      && posts.positionReqTech && posts.positionReqExp && posts.salaryRange && posts.nameAuthor
     && posts.emailAuthor) {
      API.saveJob({
        position: posts.position,
        datePosted: posts.datePosted,
        positionDesc: posts.positionDesc,
        positionReqLang: posts.positionReqLang,
        positionReqTech: posts.positionReqTech,
        positionReqExp: posts.positionReqExp,
        salaryRange: posts.salaryRange,
        nameAuthor: posts.nameAuthor,
        emailAuthor: posts.emailAuthor
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
            <h1>OPEN POSITIONS</h1>
          </Jumbotron>
          <div>
            <Input
              onChange={handleInputChange}
              name="position"
              placeholder="Position (required)"
            />
            <Input
              onChange={handleInputChange}
              name="datePosted,"
              placeholder="Date Posted (required)"
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
              placeholder="Author of Job Post (required)"
            />
            <Button
              disabled={!(posts.position && posts.positionDesc && posts.positionReqLang
                && posts.positionReqTech && posts.positionReqExp && posts.salaryRange 
                && posts.nameAuthor
                && Posts.emailAuthor)}
              onClick={handleFormSubmit}
            >
              Submit 
            </Button>
            <Button
              disabled={!(posts.position && posts.positionDesc && posts.positionReqLang
                && posts.positionReqTech && posts.positionReqExp && posts.salaryRange 
                && posts.nameAuthor
                && posts.emailAuthor)}
              onClick={handleFormSubmit}
            >
              Delete 
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}



export default JobPosts;