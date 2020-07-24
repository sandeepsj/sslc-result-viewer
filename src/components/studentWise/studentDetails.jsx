import React, { Component } from "react";
class StudentDetails extends Component {
  state = {};
  getBadge = () => {
    let badgeText = "";
    if (this.props.studentState.status === "NHS") {
      badgeText = "Failed";
    } else if (
      this.props.studentState.grades.filter(
        ({ subject: grade }) => grade === "A+"
      ).length === 10
    ) {
      badgeText = "Full A+";
    } else if (
      this.props.studentState.grades.filter(
        ({ subject: grade }) => grade === "A+"
      ).length === 9
    ) {
      badgeText = "9 A+";
    } else {
      badgeText = "Passed";
    }
    return badgeText;
  };
  getBadgeClass = () => {
    let badgeClass = "badge m-2 badge-";
    if (this.props.studentState.status === "NHS") {
      badgeClass += "secondary";
    } else if (
      this.props.studentState.grades.filter(
        ({ subject: grade }) => grade === "A+"
      ).length === 10
    ) {
      badgeClass += "warning";
    } else if (
      this.props.studentState.grades.filter(
        ({ subject: grade }) => grade === "A+"
      ).length === 9
    ) {
      badgeClass += "primary";
    } else {
      badgeClass += "success";
    }
    return badgeClass;
  };
  render() {
    return (
      <div className="card-body">
        <h5 className="card-title">
          {this.props.studentState.name}
          <span className={this.getBadgeClass()}>{this.getBadge()}</span>
        </h5>
        <p className="card-text">RegNo. {this.props.studentState.regno}</p>
      </div>
    );
  }
}
export default StudentDetails;
