describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({
      weight: 90,
      height: 186,
      selection: "metric"
    });
  });

  it("should have weight of 90", function() {
    expect(person.weight).toEqual(90);
  });

  it("should have height of 186", function() {
    expect(person.height).toEqual(186);
  });

  it("should calculate BMI value", function() {
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(26.01)
  });

  it("should have a BMI Message", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("overweight")
  });

  it("should have a BMI Image", function() {
    person.calculate_bmi();
    image = '<img src="img/overweight.png" width="50%"/>';
    expect(person.bmiImage).toEqual('overweight.png')
  });

});
