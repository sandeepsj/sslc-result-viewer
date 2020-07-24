import React, { Component } from "react";
import QuickStatus from "./quickStatus";
class SchoolDetails extends Component {
  state = {};
  render() {
    return (
      <div className="card-body">
        <h5 className="card-title">{this.props.schoolDetails.schoolName}</h5>
        <div className="card-text">
          School Code: {this.props.schoolDetails.schoolCode}
          <QuickStatus
            status={"10A+:" + this.countAPlus(10)}
            bgColor="#ff4800"
          />
          <QuickStatus status={"9A+:" + this.countAPlus(9)} bgColor="#ff6d00" />
          <QuickStatus status={"8A+:" + this.countAPlus(8)} bgColor="#ff9100" />
          <QuickStatus
            status={this.getPassPercentage() + "% Pass"}
            bgColor="#ffb600"
          />
        </div>
      </div>
    );
  }
  countAPlus = (n) => {
    var student;
    var count = 0;
    for (student in this.props.schoolDetails.result) {
      if (
        this.counter(this.props.schoolDetails.result[student].Grades, "A+") ===
        n
      )
        count++;
    }
    return count;
  };
  counter = (countable, key) => {
    var ele;
    var count = 0;
    for (ele in countable) {
      if (countable[ele] === key) count++;
    }
    return count;
  };
  getPassPercentage = () => {
    var total = 0;
    var student;
    var count = 0;
    for (student in this.props.schoolDetails.result) {
      total++;
      if (this.props.schoolDetails.result[student].status === "EHS") count++;
    }
    return ((count * 100.0) / total).toPrecision(3);
  };
}
export default SchoolDetails;
