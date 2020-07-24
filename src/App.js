import React, { Component } from "react";
import "./App.css";
import StudentApp from "./components/studentWise/app";
import SectionChooser from "./components/sectionChooser";
import SchoolApp from "./components/schoolWise/app";

class App extends Component {
  state = {
    selectedSection: "section2",
  };
  handleSectionChange = (sectionId) => {
    //    console.log(this.state.selectedSection);
    const newState = { ...this.state };
    newState.selectedSection = sectionId;
    this.setState(newState);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <SectionChooser
            onSectionChange={this.handleSectionChange}
            selectedSection={this.state.selectedSection}
          />
        </div>
        {this.getSection()}
        <div className="container-fluid">
          <footer
            className="footer bg-dark"
            style={{
              padding: "10px 15px",
              backgroundColor: "#f5f5f5",
              borderTop: "1px solid #ddd",
              borderRadius: 6,
            }}
          >
            <div className="d-flex justify-content-center">
              <span className="text-muted">Developed by Sandeep S J</span>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }

  getSection = () => {
    if (this.state.selectedSection === "section1") {
      return (
        <div>
          <StudentApp />
        </div>
      );
    }
    if (this.state.selectedSection === "section2") {
      return (
        <div>
          <SchoolApp />
        </div>
      );
    }
  };
}

export default App;
