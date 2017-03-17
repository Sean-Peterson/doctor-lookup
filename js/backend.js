function Object(parameter) {
  this.property = parameter;
}

Object.prototype.someFunction = function(n1, n2) {
  return n1 + n2;
};
