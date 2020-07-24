import React, { Component } from "react";
import GradeCard from "./gradeCard";
class studentGradeContainer extends Component {
  state = {};
  render() {
    return (
      <div className="card bg-light align-items-center">
        <div className="pl-2 pr-2 row align-items-center">
          {this.props.studentState.grades.map((gradeMap) => (
            <div
              className="col-sm-6 col-lg-3 col-md-5 p-3 col-xs-12"
              key={Object.keys(gradeMap)[0]}
            >
              <GradeCard
                subject={Object.keys(gradeMap)[0]}
                grade={gradeMap[Object.keys(gradeMap)[0]]}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default studentGradeContainer;
