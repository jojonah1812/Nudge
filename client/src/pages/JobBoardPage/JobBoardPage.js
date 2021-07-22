import React, { Component } from "react";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import API from "../utils/API";
//import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class JobBoard extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    this.getSavedJobs();
  }

  getJobsBoard = () => {
    API.getSavedJobs()
      .then(res =>
        this.setState({
          jobs: res.data
        })
      )
      .catch(err => console.log(err));
  };

 /* handleBookDelete = id => {
    API.deleteJob(id).then(res => this.get());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
     </Container>\
      
    );
   */ 
  }


export default JobBoard;
