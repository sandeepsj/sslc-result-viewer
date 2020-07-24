import React, { Component } from "react";

class SectionChooser extends Component {
  state = {};
  setSection = (event) => {
    this.props.onSectionChange(event.target.id);
  };
  render() {
    return (
      <div
        className="btn-group btn-group-toggle btn-block mt-1"
        data-toggle="buttons"
        onChange={this.setSection}
      >
        <label className={this.getBtnClass("section1")}>
          <input type="radio" name="options" id="section1" /> Student Wise
        </label>
        <label className={this.getBtnClass("section2")}>
          <input type="radio" name="options" id="section2" /> School Wise
        </label>
        <label className={this.getBtnClass("section3")}>
          <input type="radio" name="options" id="section3" /> State report
        </label>
      </div>
    );
  }
  getBtnClass = (sectionId) => {
    if (sectionId === this.props.selectedSection) {
      return "btn btn-danger active";
    }
    return "btn btn-danger";
  };
}

export default SectionChooser;
