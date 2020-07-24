import React, { Component } from "react";
import "./css/gradeCard.css";
class GradeCard extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="chip">
          <button
            style={{ background: this.getGradeColor() }}
            className="btn btn-primary"
          >
            {this.props.grade}
          </button>
          {this.props.subject}
        </div>
      </div>
    );
  }
  getGradeColor() {
    var gradeColor = "#";
    if (this.props.grade === "A+") {
      gradeColor += "ffba08";
    } else if (this.props.grade === "A") {
      gradeColor += "f48c06";
    } else if (this.props.grade === "B+") {
      gradeColor += "e85d04";
    } else if (this.props.grade === "B") {
      gradeColor += "dc2f02";
    } else if (this.props.grade === "C+") {
      gradeColor += "d00000";
    } else if (this.props.grade === "C") {
      gradeColor += "9d0208";
    } else if (this.props.grade === "D+") {
      gradeColor += "6a040f";
    } else if (this.props.grade === "D") {
      gradeColor += "370617";
    } else if (this.props.grade === "E") {
      gradeColor += "03071e";
    }
    return gradeColor;
  }
}

export default GradeCard;
///03071e-370617-6a040f-9d0208-d00000-dc2f02-e85d04-f48c06-faa307-ffba08
