import React, { Component } from "react";
class SearchStudent extends Component {
  state = {};
  regNoInput = React.createRef();
  render() {
    return (
      <div>
        <div className="form-inline mt-2 mt-md-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            ref={this.regNoInput}
            placeholder={this.getPlaceHolder()}
            aria-label="Search"
          />
          <button
            onClick={() => {
              this.props.onSearchStudent(this.regNoInput.current.value);
            }}
            className="btn btn-primary m-2"
            type="submit"
          >
            Get Result
          </button>
        </div>
      </div>
    );
  }
  getPlaceHolder() {
    if (this.props.placeholder) return this.props.placeholder;
    return "Enter Your RegNo";
  }
}

export default SearchStudent;
