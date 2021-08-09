import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import "../Resume.css";

class Resume extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <div className="container-">
        <div className="header">
          <div className="main">
            <h1 className="name">{`${this.props.firstName} ${this.props.secondName}`}</h1>
            <p className="title">Engineer</p>
          </div>
          <div className="info-container">
            <p>
              Phone: <span>{this.props.phoneNum}</span>
            </p>
            <p>
              Email: <span>{this.props.email}</span>
            </p>
          </div>
        </div>
        <div className="content">
          <div className="edc">
            <h2>Edcuational Information</h2>
            <h3 className="item">
              School Name: <span>{this.props.schoolName}</span>
            </h3>
            <h3 className="item">
              Studying Field: <span>{this.props.studyTitle}</span>
            </h3>
            <h3>
              Starting Date: <span>{this.props.studyDateFrom}</span>
            </h3>
            <h3>
              Finishing Date: <span>{this.props.studyDateTo}</span>
            </h3>
          </div>
          <div className="practical">
            <h2>Practical Experience</h2>
            <h3 className="item">
              Company Name: <span>{this.props.companyName}</span>
            </h3>
            <h3 className="item">
              Position Title: <span>{this.props.positionTitle}</span>
            </h3>
            <h3 className="item">
              Duties: <span className="" >{this.props.mainTasks}</span>
            </h3>
            <h3>
              Starting Date: <span>{this.props.workDateFrom}</span>
            </h3>
            <h3>
              Finishing Date: <span>{this.props.workDateTo}</span>
            </h3>
          </div>
        </div>
        <div className="modification">
          <p>You didn't like it and want to do some modifications?</p>
          <p>Don't worry, I gotcha!</p>
          <Button onClick={this.props.goBack} className="take-me-back" variant="warning">Take me back</Button>
        </div>
      </div>
    );
  }
}

export default Resume;
