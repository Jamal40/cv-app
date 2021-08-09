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
    this.state.companyName = "company name";
    this.state.positionTitle = "position title";
    this.state.mainTasks = "main tasks";
    this.state.workDateFrom = "1995-12-17";
    this.state.workDateTo = "1995-12-17";
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
      companyName: document.getElementsByClassName("companyName")[0].value,
      positionTitle: document.getElementsByClassName("positionTitle")[0].value,
      mainTasks: document.getElementsByClassName("mainTasks")[0].value,
      workDateFrom: document.getElementsByClassName("workDateFrom")[0].value,
      workDateTo: document.getElementsByClassName("workDateTo")[0].value,
    });
  };

  render() {
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
          companyName={this.state.companyName}
          positionTitle={this.state.positionTitle}
          mainTasks={this.state.mainTasks}
          workDateFrom={this.state.workDateFrom}
          workDateTo={this.state.workDateTo}
        />
      );
    }
  }
}

export default App;
