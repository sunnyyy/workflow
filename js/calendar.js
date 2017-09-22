var width = 960,
    height = 136,
    cellSize = 17;

var color = d3.scaleQuantize()
    .domain([0, 10])
    .range(["#fff","#93c","#06c","#1a5","#7d4","#fc0","#f60","#f33","#c06","#ddd"]);

var svg = d3.select("body")
    .selectAll("svg")
    .data(d3.range(2017, 2018))
    .enter().append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + (height - cellSize * 7 - 1) + ")");

svg.append("text")
    .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "middle")
    .text(function(d) { return d; });

var rect = svg.append("g")
    .attr("fill", "none")
    .attr("stroke", "#ccc")
    .selectAll("rect")
    .data(function(d) { return d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
    .enter().append("rect")
    .attr("width", cellSize)
    .attr("height", cellSize)
    .attr("x", function(d) { return d3.timeWeek.count(d3.timeYear(d), d) * cellSize; })
    .attr("y", function(d) { return d.getDay() * cellSize; })
    .datum(d3.timeFormat("%Y-%m-%d"));

svg.append("g")
    .attr("fill", "none")
    .attr("stroke", "#000")
    .selectAll("path")
    .data(function(d) { return d3.timeMonths(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
    .enter().append("path")
    .attr("d", pathMonth);

d3.csv("data/data_2017.csv", function(error, csv) {
  if (error) throw error;

  var num_data = d3.nest()
      .key(function(d) { return d.date; })
      .rollup(function(d) { return d[0].number; })
      .object(csv);

  var desc_data = d3.nest()
      .key(function(d) { return d.date; })
      .rollup(function(d) { return d[0].desc; })
      .object(csv);

  rect.filter(function(d) { return d in num_data; })
      .attr("fill", function(d) { return color(num_data[d]); })
      .append("title")
      .text(function(d) { return d + ": " + desc_data[d]; });
});

function pathMonth(t0) {
  var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
      d0 = t0.getDay(), w0 = d3.timeWeek.count(d3.timeYear(t0), t0),
      d1 = t1.getDay(), w1 = d3.timeWeek.count(d3.timeYear(t1), t1);
  return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
      + "H" + w0 * cellSize + "V" + 7 * cellSize
      + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
      + "H" + (w1 + 1) * cellSize + "V" + 0
      + "H" + (w0 + 1) * cellSize + "Z";
}