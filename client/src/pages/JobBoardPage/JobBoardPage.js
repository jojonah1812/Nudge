import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
//import Footer from "../components/Footer";
//import Navbar from "../components/Navbar";
//import Hero from "../components/Hero";
//import API from "../../utils/axios/API";
//import { Col, Row, Container } from "../components/Grid";
//import { List } from "../components/List";
//import { Col, Row, Container } from "react-bootstrap/Grid";
import { List } from "../components/List";
function JobBoardPage() {
  const [JobBoard, setJobBoard] = useState(0);
  getJobs = () => {
    API.getJobs()
      .then((res) =>
        setJobBoard({
          JobBoard: res.data,
        })
      )
      .catch(() =>
        setJobBoard({
          JobBoard: [],
          message: "No New Jobs Found, Try a Different Query",
        })
      );
  };
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">
              <strong>(React) Google Books Search</strong>
            </h1>
            <h2 className="text-center">
              Search for and Save Books of Interest.
            </h2>
          </Jumbotron>
        </Col>
        <Col size="md-12">
          <Card title="Book Search" icon="far fa-book">
            <Form
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              q={this.state.q}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Card title="Results">
            {this.state.books.length ? (
              <List>
                {this.state.books.map((book) => (
                  <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    link={book.volumeInfo.infoLink}
                    authors={book.volumeInfo.authors.join(", ")}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    Button={() => (
                      <button
                        onClick={() => this.handleBookSave(book.id)}
                        className="btn btn-primary ml-2"
                      >
                        Save
                      </button>
                    )}
                  />
                ))}
              </List>
            ) : (
              <h2 className="text-center">{this.state.message}</h2>
            )}
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default JobBoardPage;
