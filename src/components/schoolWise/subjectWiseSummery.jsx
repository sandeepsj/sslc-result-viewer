import React, { Component } from "react";

import SubjectDoughnut from "./subjectDoughnut";
class SubjectWiseSummery extends Component {
  state = {};
  grades = ["A+", "A", "B+", "B", "C+", "C", "D+", "D", "E", "Ab"];
  SubjectSummery;
  setSubjectSummery = () => {
    const subjects = this.props.schoolDetails.subjects;
    var regNo;
    var total = 0;
    var subjectSummery = {};
    var i;
    for (i = 0; i < 10; i++) {
      var subjectSum = {};
      for (var j = 0; j < 10; j++) {
        subjectSum[this.grades[j]] = 0;
      }
      subjectSummery[subjects[i]] = subjectSum;
    }
    for (regNo in this.props.schoolDetails.result) {
      for (i = 0; i < 10; i++) {
        subjectSummery[subjects[i]][
          this.props.schoolDetails.result[regNo].Grades[i]
        ] += 1;
      }
      total += 1;
    }
    for (i = 0; i < 10; i++) {
      for (j = 0; j < 10; j++) {
        subjectSummery[subjects[i]][this.grades[j]] /= total;
        subjectSummery[subjects[i]][this.grades[j]] = (
          subjectSummery[subjects[i]][this.grades[j]] * 100
        ).toPrecision(2);
      }
    }
    this.SubjectSummery = subjectSummery;
  };
  render() {
    this.setSubjectSummery();
    return (
      <div className="row">
        {Object.keys(this.SubjectSummery).map((subject) => (
          <div key={subject} className="col-sm-6 col-md-6 col-lg-3">
            <SubjectDoughnut
              subjectSummery={this.SubjectSummery[subject]}
              subject={subject}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default SubjectWiseSummery;
