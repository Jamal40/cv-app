import React, { Component } from "react";
import "../CVform.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class CVform extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="h1">CV Application</h1>
        <section className="section">
          <h2 className="h2">General Information</h2>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label className="col-sm-2 col-form-label">
                First Name:
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  className="firstName"
                  type="text"
                  placeholder="First Name"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label className="col-sm-2 col-form-label">
                Second Name:
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  className="secondName"
                  type="text"
                  placeholder="Second Name"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label className="col-sm-2 col-form-label" column sm="0">
                Phone Number:
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  className="phoneNum"
                  type="tel"
                  placeholder="Phone Number"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label className="col-sm-2 col-form-label" column sm="0">
                Email:
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  className="email"
                  type="email"
                  placeholder="Email"
                />
              </Col>{" "}
            </Form.Group>
          </Form>
        </section>

        <section className="section">
          <h2 className="h2">Educational Experience</h2>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label className="col-sm-2 col-form-label">
                School Name:
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  className="schoolName"
                  type="text"
                  placeholder="School Name"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label className="col-sm-2 col-form-label">
                Title of Study:
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  className="studyTitle"
                  type="text"
                  placeholder="Specialization"
                />
              </Col>
            </Form.Group>

            <Form.Row>
              <Form.Label className="col-sm-2 col-form-label">From:</Form.Label>
              <Col sm="4">
                <Form.Control className="studyDateFrom" type="date" />
              </Col>

              <Form.Label className="col-sm-2 col-form-label">To:</Form.Label>
              <Col sm="4">
                <Form.Control className="studyDateTo" type="date" />
              </Col>
            </Form.Row>
          </Form>
        </section>

        <section className="section">
          <h2 className="h2">Practical Experience</h2>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label className="col-sm-2 col-form-label">
                Company Name:
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  className="companyName"
                  type="text"
                  placeholder="Company Name"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label className="col-sm-2 col-form-label">
                Position Title:
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  className="positionTitle"
                  type="text"
                  placeholder="Specialization"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label className="col-sm-2 col-form-label">
                Main Tasks:
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  className="mainTasks"
                  as="textarea"
                  rows="3"
                  placeholder="Main Tasks"
                />
              </Col>
            </Form.Group>

            <Form.Row>
              <Form.Label className="col-sm-2 col-form-label">From:</Form.Label>
              <Col sm="4">
                <Form.Control className="workDateFrom" type="date" />
              </Col>

              <Form.Label className="col-sm-2 col-form-label">To:</Form.Label>
              <Col sm="4">
                <Form.Control className="workDateTo" type="date" />
              </Col>
            </Form.Row>
          </Form>
        </section>
        <Button
          onClick={this.props.assignValues}
          size="lg"
          id="hihow"
          variant="outline-success"
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default CVform;
