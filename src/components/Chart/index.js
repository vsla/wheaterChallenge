/* eslint-disable react-hooks/exhaustive-deps */
// @flow weak
import { useEffect, useState } from "react";
import * as d3 from "d3";

function Chart() {
  const [data, setData] = useState({});
  function regenerateData() {
    const chartData = [];
    for (let i = 0; i < 20; i++) {
      const value = Math.floor(Math.random() * i + 3);
      chartData.push({
        label: i,
        value,
        tooltipContent: `<b>x: </b>${i}<br><b>y: </b>${value}`,
      });
    }
    console.log(chartData);
    setData(chartData);
  }
  useEffect(() => {
    drawChart();
  }, [data]);

  useEffect(() => {
    regenerateData();
  }, []);

  function drawChart() {
    const height = 200;
    const width = document.getElementById("chartContainer").offsetWidth - 300;

    // Remove the old chart
    d3.select("#chart").select("svg").remove();

    // Remove the old tooltip
    d3.select("#chart").select(".tooltip").remove();

    const margin = { top: 50, right: 50, bottom: 50, left: 50 };

    // const yMinValue = d3.min(data, (d) => d.value);
    const yMaxValue = d3.max(data, (d) => d.value);

    const xMinValue = d3.min(data, (d) => d.label);
    const xMaxValue = d3.max(data, (d) => d.label);

    const xScale = d3
      .scaleLinear()
      .domain([xMinValue, xMaxValue])
      .range([0, width]);

    const yScale = d3.scaleLinear().range([height, 0]).domain([0, yMaxValue]);

    const line = d3
      .line()
      .x((d) => xScale(d.label))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX);

    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Append the gridlines along the Y-axis
    svg
      .append("g")
      .attr("class", "grid")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickSize(-height).tickFormat(""));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#f6c3d0")
      .attr("stroke-width", 4)
      .attr("class", "line")
      .attr("d", line);

    // Circle marker
    const focus = svg
      .append("g")
      .attr("class", "focus")
      .style("display", "none");

    focus.append("circle").attr("r", 5).attr("class", "circle");
  }

  return (
    <div
      id="chartContainer"
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <div id="chart" />
    </div>
  );
}

export default Chart;
