// JavaScript
// d3.select()
// d3.selectAll()

// 1. DOM selection and manipulation
/* d3.select('h1').style('color', 'red')
.attr('class', 'heading')
.text('Updated h1 tag');
 */
// append DOM elements
/* d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('Second Paragraph');
d3.select('body').append('p').text('Third Paragraph');

d3.selectAll('p').style('color', 'blue'); */

// 2. Data loading and binding

/* const dataset = [1, 2, 3, 4, 5];

d3.select('body')
.selectAll('p')
.data(dataset)
.enter()
.append('p') // appends paragraph for each data element
//.text('D3 is awesome!');
.text(function(d) { return d;});  */

// 3. Creating a Simple Bar Chart
/* const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

const svgWidth = 500, svgHeight = 300, barPadding = 5;
const barWidth = (svgWidth / dataset.length);

const svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

var barChart = svg.selectAll("rect")
                .data(dataset)
                .enter()
                .append("rect")
                .attr("y", function(d) {
                  return svgHeight - d
                })
                .attr("height", function(d) {
                  return d;
                })
                .attr("width", barWidth - barPadding)
                .attr("transform", function (d, i) {
                  const translate = [barWidth * i, 0];
                  return "translate("+ translate +")";
                }); */

// 4. Creating labels
/* const text = svg.selectAll("text")
              .data(dataset)
              .enter()
              .append('text')
              .text(function(d) {
                return d;
              })
              .attr("y", function(d, i) {
                return svgHeight - d - 2;
              })
              .attr("x", function(d, i) {
                return barWidth * i;
              })
              .attr("fill", "#A64C38"); */

// 5. Scales
/* const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160]; */

/* const dataset = [1, 2, 3, 4, 5];

const svgWidth = 500, svgHeight = 300, barPadding = 5;
const barWidth = (svgWidth / dataset.length);

const svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

//  d3.scaleLinear() automatically scales the values based on the max value and container height
const yScale = d3.scaleLinear()
                .domain([0, d3.max(dataset)])
                .range([0, svgHeight]);

const barChart = svg.selectAll("rect")
                  .data(dataset)
                  .enter()
                  .append("rect")
                  .attr("y", function(d) {
                    return svgHeight - yScale(d)
                  })
                  .attr("height", function(d) {
                    return yScale(d);
                  })
                  .attr("width", barWidth - barPadding)
                  .attr("transform", function(d, i) {
                    const translate = [barWidth * i, 0];
                    return "translate("+ translate +")";
                  }); */

// 6. Axes

/* d3.axisTop()
d3.axisRight()
d3.axisBottom()
d3.axisLeft() */

/* const data = [80, 100, 56, 120, 180, 30, 40, 120, 160];

const svgWidth = 500, svgHeight = 300;

const svg = d3.select('svg')
            .attr("width", svgWidth)
            .attr("height", svgHeight);

const xScale = d3.scaleLinear()
                .domain([0, d3.max(data)])
                .range([0, svgWidth]);

const yScale = d3.scaleLinear()
                .domain([0, d3.max(data)])
                .range([svgHeight, 0]);

const x_axis = d3.axisBottom().scale(xScale);
const y_axis = d3.axisLeft().scale(yScale);

svg.append('g')
      .attr("transform", "translate(50, 10)")
      .call(y_axis);

const xAxisTranslate = svgHeight - 20;

svg.append("g")
          .attr("transform", "translate(50, " + xAxisTranslate +")")
          .call(x_axis); */

// 7. Creating SVG Elements

/* const svgWidth = 600, svgHeight = 500;
const svg = d3.select('svg')
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .attr("class", "svg-container")

const line = svg.append("line")
            .attr("x1", 100)
            .attr("x2", 500)
            .attr("y1", 50)
            .attr("y2", 50)
            .attr("stroke", "red")
            .attr("stroke-width", 5);

const rect = svg.append("rect")
              .attr("x", 100)
              .attr("y", 100)
              .attr("width", 200)
              .attr("height", 100)
              .attr("fill", "#9895FF");

const circle = svg.append("circle")
              .attr("cx", 200)
              .attr("cy", 300)
              .attr("r", 80)
              .attr("fill", "#7CE8D5");
 */

// 8. Creating a Pie Chart

/* const data = [
  {"platform": "Anroid", "percentage": 40.11},
  {"platform": "Windows", "percentage": 36.69},
  {"platform": "iOS", "percentage": 13.06},
];

const svgWidth = 500, svgHeight = 300, radius = Math.min(svgWidth, svgHeight) / 2;
const svg = d3.select('svg')
          .attr("width", svgWidth)
          .attr("height", svgHeight);

// Create group element to hold pie chart
const g = svg.append("g")
        .attr("transform", "translate(" + radius + "," + radius + ")");

const color = d3.scaleOrdinal(d3.schemeCategory10);

const pie = d3.pie().value(function(d) {
  return d.percentage;
});

const path = d3.arc()
      .outerRadius(radius)
      .innerRadius(0);

const arc = g.selectAll("arc")
          .data(pie(data))
          .enter()
          .append("g");

arc.append("path")
    .attr("d", path)
    .attr("fill", function(d) { return color(d.data.percentage);});

const label = d3.arc()
            .outerRadius(radius)
            .innerRadius(0);

arc.append("text")
        .attr("transform", function(d) {
          return "translate("+ label.centroid(d) + ")";
        })
        .attr("text-anchor", "middle")
        .text(function(d) { return d.data.platform+":"+d.data.percentage+"%";});
 */

// 9. Line Chart

