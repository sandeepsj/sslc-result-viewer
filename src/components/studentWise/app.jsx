import React, { Component } from "react";
import StudentResultHeader from "./studentResultHeader";
import StudentGradeContainer from "./studentGradeContainer";

class App extends Component {
  state = {
    student: {},
  };
  handleSearchStudent = (regNo) => {
    const url = `/api/studentWise/${regNo}`;
    fetch(url)
      .then((res) => res.json())
      .then((student) => this.setState({ student }));
  };
  render() {
    if (Object.keys(this.state.student).length === 0) {
      return (
        <div className="container-fluid">
          <StudentResultHeader
            studentState={this.state.student}
            empty={true}
            onSearchStudent={this.handleSearchStudent}
          />
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <StudentResultHeader
            studentState={this.state.student}
            empty={false}
            onSearchStudent={this.handleSearchStudent}
          />
          <StudentGradeContainer studentState={this.state.student} />
        </div>
      );
    }
  }
}

export default App;
