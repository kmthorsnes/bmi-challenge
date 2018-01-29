function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.selection = attr.selection;
};

Person.prototype.calculate_bmi = function() {
  calculator = new BMICalculator();
  calculator.metric_bmi(this);
};

// Person.prototype.calculate_bmi = function() {
//   calculator = new BMICalculator();
//   calculator.imperial_bmi(this);
// };
