import React, { Component } from "react";
import FullAPlusList from "./fullAPlusList";
import SubjectWiseSummery from "./subjectWiseSummery";

class schoolMain extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div
          className="col-lg-4 col-sm-6 col-md-6 col-xs-6"
          style={{
            height: 500,
            display: "block",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <FullAPlusList schoolDetails={this.props.schoolDetails} />
        </div>
        <div
          className="col-lg-8 col-sm-6 col-md-6 col-xs-6"
          style={{
            height: 500,
            display: "block",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <SubjectWiseSummery schoolDetails={this.props.schoolDetails} />
        </div>
      </div>
    );
  }
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

export default schoolMain;
