function F(x) {
  var C = 1.0000000533900888;
  var a = 1.0;
  var b = 24.158852886550765;
  return -C * Math.pow(1 / (x + a), b) + C;
}

// Generate x values
var x = [];
for (var i = -10; i <= 10; i += 0.1) {
  x.push(i);
}

// Generate y values
var y = x.map(function(x) {
  return F(x);
});

// Create the plot
var trace = {
  x: x,
  y: y,
  type: 'scatter'
};

var layout = {
  title: 'Plot of Function F',
  xaxis: {
    title: 'x'
  },
  yaxis: {
    title: 'F(x)'
  }
};

var data = [trace];

Plotly.newPlot('plot', data, layout);
