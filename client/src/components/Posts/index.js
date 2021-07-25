import React from "react";
//import "./style.css";
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
//import Col from "react-bootstrap/Col";



function Posts(q, {handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Positions</strong>
        </label>
        <input
          className="form-control"
          id="Position"
          type="text"
          value={q}
          placeholder="Position"
          name="q"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="PositionDesc"
          type="text"
          value={q}
          placeholder="Position Description"
          name="q"
          onChange={handleInputChange}
          required
        />
        <input
          className="form-control"
          id="positionReqLang"
          type="text"
          value={q}
          placeholder="Language"
          name="q"
          onChange={handleInputChange}
          required
        />
           <input
          className="form-control"
          id="positionReqLang"
          type="text"
          value={q}
          placeholder="Language"
          name="q"
          onChange={handleInputChange}
          required
        />
         <input
          className="form-control"
          id="positionReqLang"
          type="text"
          value={q}
          placeholder="Language"
          name="q"
          onChange={handleInputChange}
          required
        />
       <input
          className="form-control"
          id="positionReqTech"
          type="text"
          value={q}
          placeholder="Technologies"
          name="q"
          onChange={handleInputChange}
          required
        />
      <input
          className="form-control"
          id="positionReqExp"
          type="text"
          value={q}
          placeholder="Experience"
          name="q"
          onChange={handleInputChange}
          required
        />
     <input
          className="form-control"
          id="salaryRange"
          type="text"
          value={q}
          placeholder="Salary Range"
          name="q"
          onChange={handleInputChange}
          required
        />
         <input
          className="form-control"
          id="nameAuthor"
          type="text"
          value={q}
          placeholder="Author"
          name="q"
          onChange={handleInputChange}
          required
        />
       <input
          className="form-control"
          id="emilAuthor"
          type="text"
          value={q}
          placeholder="Author Email"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Submit
        </button>
        <button
          onClick={handleFormSubmit}
          type="delete"
          className="btn btn-lg btn-danger float-right"
        >
         Delete
        </button>   
      </div>
    </form>
  );
}

export default Posts;

/*function Posts() {
    return (

        <div>

            <Form>
                <Form.Group className="mb-3" controlId="formGridPosition">
                    <Form.Label>Position</Form.Label>
                    <Form.Control placeholder="Postiion Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridDatePosted">
                    <Form.Label>Date Posted</Form.Label>
                    <Form.Control type="date" placeholder="Date Posted" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formGridPositionID">
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
                <Form.Group as={Col} controlId="formGridSalaryRange">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control placeholder="Salary Range" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control placeholder="Author of the Job Post" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAuthor">
                    <Form.Label>Author Email</Form.Label>
                    <Form.Control placeholder="Email of the Author of the Job Post" />
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
};


export default Posts;

*/