import React, { Component } from "react";
import SchoolDetails from "./schoolDetails";
import SearchSchool from "./searchSchool";

class SchoolResultHeader extends Component {
  state = {};
  render() {
    if (this.props.empty) {
      return (
        <div className="card bg-light mt-2 mb-2" style={{ padding: 50 }}>
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-lg-12 col-sm-12 col-xs-12 col-md-12 align-items-center">
              <SearchSchool onSchoolSearch={this.props.onSchoolSearch} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="card bg-light mt-2 mb-2">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-8 col-xs-6 pt-1">
            <SchoolDetails schoolDetails={this.props.schoolDetails} />
          </div>

          <div className="col-lg-6 col-sm-4 col-xs-6 col-md-4 d-flex justify-content-end align-items-center">
            <SearchSchool
              placeholder="Check another School"
              onSchoolSearch={this.props.onSchoolSearch}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SchoolResultHeader;
