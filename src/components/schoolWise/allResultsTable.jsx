import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

class AllResultsTable extends Component {
  state = {};
  standardizedResultData = () => {
    var standardizedData = [];
    const result = this.props.schoolDetails.result;
    for (var regNo in result) {
      var StudentData = {};
      StudentData["RegNo"] = regNo;
      StudentData["Name"] = result[regNo]["Name"];
      var i = 0;
      for (var grade in result[regNo].Grades) {
        StudentData[this.props.schoolDetails.subjects[i]] =
          result[regNo].Grades[grade];
        i++;
      }
      StudentData["Status"] = result[regNo].status;
      standardizedData.push(StudentData);
    }

    return standardizedData;
  };

  render() {
    const subjects = this.props.schoolDetails.subjects;
    return (
      <div className="card bg-light pt-2 pb-2 container-fluid mt-3 mp-3">
        <BootstrapTable
          data={this.standardizedResultData()}
          multiColumnSearch
          search
          height="800"
          width="900"
        >
          <TableHeaderColumn
            dataField="RegNo"
            isKey
            dataSort
            searchable={false}
          >
            RegNo
          </TableHeaderColumn>
          <TableHeaderColumn dataField="Name" dataSort>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField={subjects[0]} dataSort>
            {subjects[0]}
          </TableHeaderColumn>
          <TableHeaderColumn dataField={subjects[1]} dataSort>
            {subjects[1]}
          </TableHeaderColumn>
          <TableHeaderColumn dataField={subjects[2]} dataSort>
            {subjects[2]}
          </TableHeaderColumn>
          <TableHeaderColumn dataField={subjects[3]} dataSort>
            {subjects[3]}
          </TableHeaderColumn>
          <TableHeaderColumn dataField={subjects[4]} dataSort>
            {subjects[4]}
          </TableHeaderColumn>
          <TableHeaderColumn dataField={subjects[5]} dataSort>
            {subjects[5]}
          </TableHeaderColumn>
          <TableHeaderColumn dataField={subjects[6]} dataSort>
            {subjects[6]}
          </TableHeaderColumn>
          <TableHeaderColumn dataField={subjects[7]} dataSort>
            {subjects[7]}
          </TableHeaderColumn>
          <TableHeaderColumn dataField={subjects[8]} dataSort>
            {subjects[8]}
          </TableHeaderColumn>
          <TableHeaderColumn dataField={subjects[9]} dataSort>
            {subjects[9]}
          </TableHeaderColumn>

          <TableHeaderColumn dataField="Status" dataSort>
            Status
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default AllResultsTable;
