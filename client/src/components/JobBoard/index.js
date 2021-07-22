import React from "react";
import "./style.css";
import ListGroup from 'react-bootstrap/ListGroup'
// want to list the job headers 
function Jobs() {
    return (

        <div className="jobs">


            render(
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1">
                    Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" disabled>
                    Link 2
                </ListGroup.Item>
            </ListGroup>,
            );
        </div>

    )
};

{/*import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function JobDetail({ position, date_posted, position_id, description, languages, technologies, experience, salary, author }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{position}</h3>
          <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
          View
            </a>
        </Col>
        </Row>
  */}
export default Jobs;