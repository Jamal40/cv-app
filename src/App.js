import React, { Component } from "react";
import CVform from "./components/CVform.jsx";
import Resume from "./components/Resume.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state.show = true;
    this.state.firstName = "first name";
    this.state.secondName = "second name";
    this.state.phoneNum = "01150601677";
    this.state.email = "example@example.com";
    this.state.schoolName = "School Name";
    this.state.studyTitle = "Study field";
    this.state.studyDateFrom = "1995-12-17";
    this.state.studyDateTo = "1995-12-17";

    this.state.companyNames = [];
    this.state.positionTitles = [];
    this.state.mainTasksSet = [];
    this.state.workDateFromSet = [];
    this.state.workDateToSet = [];
  }
  state = {};

  handleGoingBack = () => {
    this.setState({
      show: true,
    });
  };

  handleValues = () => {

    this.setState({
      show: false,
      firstName: document.getElementsByClassName("firstName")[0].value,
      secondName: document.getElementsByClassName("secondName")[0].value,
      phoneNum: document.getElementsByClassName("phoneNum")[0].value,
      email: document.getElementsByClassName("email")[0].value,
      schoolName: document.getElementsByClassName("schoolName")[0].value,
      studyTitle: document.getElementsByClassName("studyTitle")[0].value,
      studyDateFrom: document.getElementsByClassName("studyDateFrom")[0].value,
      studyDateTo: document.getElementsByClassName("studyDateTo")[0].value,
      companyNames: Array.from(document.getElementsByClassName("companyName")).map(e=>e.value),
      positionTitles: Array.from(document.getElementsByClassName("positionTitle")).map(e=>e.value),
      mainTasksSet: Array.from(document.getElementsByClassName("mainTasks")).map(e=>e.value),
      workDateFromSet: Array.from(document.getElementsByClassName("workDateFrom")).map(e=>e.value),
      workDateToSet :  Array.from(document.getElementsByClassName("workDateTo")).map(e=>e.value) ,
    });
    
  };

  render() {

    console.log(this.state);

    if (this.state.show === true) {
      return <CVform assignValues={this.handleValues} />;
    } else {
      return (
        <Resume
          goBack={this.handleGoingBack}
          firstName={this.state.firstName}
          secondName={this.state.secondName}
          phoneNum={this.state.phoneNum}
          email={this.state.email}
          schoolName={this.state.schoolName}
          studyTitle={this.state.studyTitle}
          studyDateFrom={this.state.studyDateFrom}
          studyDateTo={this.state.studyDateTo}
          companyNames={this.state.companyNames}
          positionTitles={this.state.positionTitles}
          mainTasksSet={this.state.mainTasksSet}
          workDateFromSet={this.state.workDateFromSet}
          workDateToSet={this.state.workDateToSet}
        />
      );
    }
  }
}

export default App;
