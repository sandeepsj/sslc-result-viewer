import React, { Component } from "react";

class fullAPlusList extends Component {
  state = {};

  render() {
    return (
      <div>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">RegNo.</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {this.getAPlusList(10).map((student) => (
              <tr key={student[0]}>
                <th scope="row">{student[0]}</th>
                <td>{student[1].Name}</td>
                <td>
                  <span className="badge badge-warning">Full A+</span>
                </td>
              </tr>
            ))}
            {this.getAPlusList(9).map((student) => (
              <tr key={student[0]}>
                <th scope="row">{student[0]}</th>
                <td>{student[1].Name}</td>
                <td>
                  <span className="badge badge-warning">9 A+</span>
                </td>
              </tr>
            ))}
            {this.getAPlusList(8).map((student) => (
              <tr key={student[0]}>
                <th scope="row">{student[0]}</th>
                <td>{student[1].Name}</td>
                <td>
                  <span className="badge badge-warning">8 A+</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  getAPlusList = (n) => {
    var student;
    var studentList = [];
    for (student in this.props.schoolDetails.result) {
      if (
        this.counter(this.props.schoolDetails.result[student].Grades, "A+") ===
        n
      ) {
        studentList.push([student, this.props.schoolDetails.result[student]]);
      }
    }
    return studentList;
  };
  counter = (countable, key) => {
    var ele;
    var count = 0;
    for (ele in countable) {
      if (countable[ele] === key) count++;
    }
    return count;
  };
}

export default fullAPlusList;
