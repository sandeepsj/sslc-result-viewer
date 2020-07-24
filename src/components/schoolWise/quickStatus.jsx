import React, { Component } from "react";
class QuickStatus extends Component {
  state = {};
  render() {
    return (
      <div className="badge badge-success m-1">
        <span>{this.props.status}</span>
      </div>
    );
  }
}

export default QuickStatus;
