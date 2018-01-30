function BMICalculator() {};

function setBMIMessage(obj) {
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = "underweight";
    obj.bmiImage = "elf-clipart-12.png";
  }
  if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "normal";
    obj.bmiImage = "normal.png";
  }
  if (obj.bmiValue > 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "overweight";
    obj.bmiImage = "overweight.png";
  }
  if (obj.bmiValue > 30) {
    obj.bmiMessage = "obese";
    obj.bmiImage = "obese.png";
  }
  if (obj.bmiValue = undefined) {
    obj.bmiMessage = "undefined";
    obj.bmiImage = "xena-undefined.png";
  }

}

BMICalculator.prototype.metric_bmi = function(obj) {
  var weight = obj.weight;
  var height = obj.height;
  var selection = obj.selection;
  if (weight > 0 && height > 0) {
    if (selection == "metric") {
      var finalBmi = weight / (height / 100 * height / 100);
    } else if (selection == "imperial") {
      var finalBmi = ((weight / (height * height)) * 703);
    }
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }
};

// BMICalculator.prototype.imperial_bmi = function(obj) {
//   var weight = obj.weight;
//   var height = obj.height;
//   if (weight > 0 && height > 0) {
//     var finalBmi = ((weight / (height * height)) * 703);
//     obj.bmiValue = parseFloat(finalBmi.toFixed(2));
//     setBMIMessage(obj);
//   }
// };
