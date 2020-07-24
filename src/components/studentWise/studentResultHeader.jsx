import React, { Component } from "react";
import StudentDetails from "./studentDetails";
import SearchStudent from "./searchStudent";
class StudentResultHeader extends Component {
  state = {};
  render() {
    if (this.props.empty === false) {
      return (
        <div className="card bg-light mt-2 mb-2">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-lg-4 pt-1">
              <StudentDetails studentState={this.props.studentState} />
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-6 col-md-4 d-flex justify-content-end align-items-center">
              <SearchStudent
                placeholder="Check another RegNo."
                onSearchStudent={this.props.onSearchStudent}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card bg-light mt-2 mb-2" style={{ padding: 50 }}>
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-lg-12 col-sm-12 col-xs-12 col-md-12 align-items-center">
              <SearchStudent onSearchStudent={this.props.onSearchStudent} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default StudentResultHeader;
