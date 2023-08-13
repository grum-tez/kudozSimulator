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
