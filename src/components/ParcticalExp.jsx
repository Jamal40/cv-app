import React, {Component} from 'react';
import "../CVform.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class PracticalExp extends Component {
    constructor(props){
        super(props);
        this.state.counter = 3;
    }
    state = {};
    increaseConter = ()=>{
        this.setState({
            counter: this.state.counter+1,
        })
        console.log(this.state.counter);
    }

    decreaseConter = ()=>{
        this.setState({
            counter: this.state.counter-1,
        })
        console.log(this.state.counter);
    }

    

    render(){
        
        let requiredForms = [];

        for (let i = 0; i <= this.state.counter; i++) {
            requiredForms.push(                         
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
            <br/>
            <hr/>
          </Form>
            )            
        }

        return (
        <section className="section">
            <h2 className="h2">Practical Experience</h2>
            {requiredForms}
            <div className="additional-buttons-container">
            <Button onClick={this.increaseConter} size="sm" variant="info"> Add a new Company </Button>
            <Button onClick={this.decreaseConter} size="sm" variant="danger"> Remove Company </Button>
            </div>
          </section>
        )
    }
}

export default PracticalExp;