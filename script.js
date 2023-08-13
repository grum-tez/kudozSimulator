function F(x) {
  var C = 1.0000000533900888;
  var a = 1.0;
  var b = 24.158852886550765;
  return -C * Math.pow(1 / (x + a), b) + C;
}

function f(x) {
  var C = 1.0000000533900888;
  var a = 1.0;
  var b = 24.158852886550765;
  return (b * C * Math.pow(1 / (x + a), b + 1)) / Math.pow(x + a, 2);
}

// Generate x values
var x = [];
for (var i = 0; i <= 1; i += 0.01) {
  x.push(i);
}

// Generate y values for F(x)
var yF = x.map(function(x) {
  return F(x);
});

// Generate y values for f(x)
var yf = x.map(function(x) {
  return f(x);
});

// Create the plot for F(x)
var traceF = {
  x: x,
  y: yF,
  type: 'scatter',
  name: 'Cumulative Density Function',
  domain: [0, 1]
};

// Create the plot for f(x)
var tracef = {
  x: x,
  y: yf,
  type: 'scatter',
  name: 'Probability Density Function',
  domain: [0, 1]
};

var layoutF = {
  title: 'Cumulative Density Function',
  xaxis: {
    title: 'x'
  },
  yaxis: {
    title: 'y'
  }
};

var layoutf = {
  title: 'Probability Density Function',
  xaxis: {
    title: 'x'
  },
  yaxis: {
    title: 'y'
  }
};

var dataF = [traceF];
var dataf = [tracef];

Plotly.newPlot('plotF', dataF, layoutF);
Plotly.newPlot('plotf', dataf, layoutf);
