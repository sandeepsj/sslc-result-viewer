import React, { Component } from "react";
import SchoolResultHeader from "./schoolResultHeader";

import AllResultsTable from "./allResultsTable";
import SchoolMain from "./schoolMain";

class app extends Component {
  state = {
    school: {},
  };
  handleSchoolSearch = (schoolCode) => {
    // const url = `/api/schoolWise/${schoolCode}`;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((school) => {
    //     this.setState({ school });
    //   });
    console.log("updated and working till Here");
    var proxyUrl = "https://cors-anywhere.herokuapp.com/";
    var targetUrl = `https://results.kite.kerala.gov.in:446/sslc/school_files/${schoolCode}.html`;
    console.log("STarted");
    fetch(proxyUrl + targetUrl)
      .then((res) => res.text())
      .then((html) => {
        this.setState({ school: this.HtmltoState(html, schoolCode) });
        console.log("working till here");
      })
      .catch((err) => console.log("There is some Error in fetching data"));
  };

  render() {
    if (Object.keys(this.state.school).length === 0) {
      return (
        <div className="container-fluid">
          <SchoolResultHeader
            empty={true}
            schoolDetails={this.state.school}
            onSchoolSearch={this.handleSchoolSearch}
          />
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <SchoolResultHeader
            schoolDetails={this.state.school}
            onSchoolSearch={this.handleSchoolSearch}
          />

          <SchoolMain schoolDetails={this.state.school} />
          <AllResultsTable schoolDetails={this.state.school} />
        </div>
      );
    }
  }
  HtmltoState = (html, SchoolCode) => {
    const schoolNameGrammer = RegExp(
      '<td height="41"><span class="style4">School Name</span><span class="style9"> : <strong>(?<schoolName>(.*))</strong></span></td>'
    );

    const resultGrammer = RegExp(
      '<tr>\n    <td height="25"><div align="center" class="style4 style1">(?<slNo>(.*))</div></td>\n    <td height="25"><div align="center" class="style4 style1">\n      <div align="left" class="style1">(?<regNo>(.*))</div>\n    </div><div align="center" class="style1"></div></td>\n    <td height="25"><div align="left" class="style4 style1">(?<name>(.*))</div></td>\n    <td width="5%" height="25"><div align="left" class="style4 style1">\n      <div align="center">(?<grade1>(.*))</div>\n    </div></td>\n    <td width="5%" height="25"><div align="left" class="style4 style1">\n      <div align="center">(?<grade2>(.*))</div>\n    </div></td>\n    <td width="5%" height="25"><div align="left" class="style4 style1">\n      <div align="center">(?<grade3>(.*))</div>\n    </div></td>\n    <td width="5%" height="25"><div align="left" class="style4 style1">\n      <div align="center">(?<grade4>(.*))</div>\n    </div></td>\n    <td width="5%" height="25"><div align="left" class="style4 style1">\n      <div align="center">(?<grade5>(.*))</div>\n    </div></td>\n    <td width="5%" height="25"><div align="left" class="style4 style1">\n      <div align="center">(?<grade6>(.*))</div>\n    </div></td>\n    <td width="5%" height="25"><div align="left" class="style4 style1">\n      <div align="center">(?<grade7>(.*))</div>\n    </div></td>\n    <td width="5%" height="25"><div align="left" class="style4 style1">\n      <div align="center">(?<grade8>(.*))</div>\n    </div></td>\n\t<td width="5%" height="25"><div align="left" class="style4 style1">\n\t  <div align="center">(?<grade9>(.*))</div>\n\t</div></td>\n    <td width="5%" height="25"><div align="left" class="style4 style1">\n      <div align="center">(?<grade10>(.*))</div>\n    </div></td>\n\t<td width="5%" height="25"><div align="left" class="style4 style1">\n      <div align="center">(?<status>(.*))</div>\n    </div></td>'
    );
    var RowList = html.split("</tr>");
    var StudentDict = {};
    StudentDict.SchoolName = html.match(schoolNameGrammer).groups;
    for (var i = 0; i < RowList.length; i++) {
      var row = RowList[i];
      row = row.trim();
      //row = row.trime("\n");
      row = row.trim();
      RowList[i] = row;
    }

    StudentDict["Result"] = {};
    for (i = 0; i < RowList.length; i++) {
      row = RowList[i];
      var Student = row.match(resultGrammer);

      if (Student) {
        var regno = Student.groups.regNo;

        StudentDict.Result[regno] = {
          Name: Student.groups.name,
          Grades: [],
        };
        var Marklist = StudentDict.Result[regno].Grades;
        for (var j = 1; j < 11; j++) {
          Marklist.push(Student.groups[`grade${j}`]);
        }
        StudentDict.Result[regno].status = Student.groups.status;
      }
    }
    //console.log(StudentDict);
    var SchoolName = StudentDict.SchoolName.schoolName;
    //console.log(StudentDict);
    var data = StudentDict.Result;
    var school = {
      schoolName: SchoolName,
      schoolCode: SchoolCode,
      result: data,
      subjects: [
        "Paper I",
        "Paper II",
        "English",
        "Paper III",
        "Social Science",
        "Physics",
        "Chemistry",
        "Biology",
        "Mathematics",
        "IT",
      ],
    };
    return school;
  };
}

export default app;
