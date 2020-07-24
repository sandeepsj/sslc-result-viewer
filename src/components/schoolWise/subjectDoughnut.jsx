import React, { Component } from "react";
import CanvasJSReact from "../../lib/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class SubjectDoughnut extends Component {
  state = {};
  render() {
    const options = {
      animationEnabled: true,
      height: 150,
      title: {
        text: this.props.subject,
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true,
      },

      data: [
        {
          type: "doughnut",
          indexLabelPlacement: "inside",
          showInLegend: false,
          radius: "100%",
          innerRadius: "60%",
          indexLabel: "{y}",
          yValueFormatString: "#,###'%'",
          dataPoints: [
            { name: "A+", y: this.props.subjectSummery["A+"] },
            { name: "A", y: this.props.subjectSummery["A"] },
            { name: "B+", y: this.props.subjectSummery["B+"] },
            { name: "B", y: this.props.subjectSummery["B"] },
            { name: "C+", y: this.props.subjectSummery["C+"] },
            { name: "C", y: this.props.subjectSummery["C"] },
            { name: "D+", y: this.props.subjectSummery["D+"] },
            { name: "D", y: this.props.subjectSummery["D"] },
            { name: "E", y: this.props.subjectSummery["E"] },
          ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default SubjectDoughnut;
