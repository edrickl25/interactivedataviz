/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * .5;
const height = window.innerHeight * .75;
margin = 50;

/* LOAD DATA */
d3.csv('../data/squirrelActivities.csv',d3.autoType).then
(data => {
  console.log("data", data)

  /* SCALES */
  // xscale - categorical, activity
  const yScale = d3.scaleBand()
    .domain(data.map(d=> d.activity))
    .range([margin, height]) // visual variable
    .paddingInner(.2)

    // yscale - linear,count
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d=> d.count)])
    .range([margin, width-margin])

  /* HTML ELEMENTS */
  
  // svg
  const svg = d3.select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

  const xAxis = d3.axisTop(xScale)
  const yAxis = d3.axisLeft(yScale)

  svg.append("g")
    .attr("transform", `translate(0,${margin})` )
    .call(xAxis)

  svg.append("g")
    .attr("transform",`translate(${margin},0)`)
    .call(yAxis)  

  // bars
  svg.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("height", yScale.bandwidth())
//  .attr("width", d => width - margin - xScale(d.activity))
    .attr("width", d=> xScale(d.count) - margin)
    .attr("x", margin)
    .attr("y", d=> yScale(d.activity))


})

