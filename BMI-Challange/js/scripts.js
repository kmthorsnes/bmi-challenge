function feetAndInchesToInches(he) {
  let inches = (he % 1).toFixed(1);
  let feet = (he - inches);
  let height = ((feet * 12) + (inches * 100));
  return height;
}

$(document).ready(function() {
  document.getElementById('selection').addEventListener('change', function() {
    document.getElementById('weight').setAttribute('placeholder',
      this.options[this.selectedIndex].getAttribute('data-ph-w'));
    document.getElementById('height').setAttribute('placeholder',
      this.options[this.selectedIndex].getAttribute('data-ph-h'));
  });
});

$(document).ready(function() {
  $('#calculate').click(function() {
    var s = document.getElementById("selection").value;
    var w = parseFloat($('#weight').val());
    var h = parseFloat($('#height').val());
    if (s == 'imperial') {
      h = feetAndInchesToInches(h)
    }
    var person = new Person({
      weight: w,
      height: h,
      selection: s
    });
    person.calculate_bmi();

    $('#display_value').html(`Your BMI is ${person.bmiValue}`);
    $('#display_message').html(`and you are ${person.bmiMessage}`);
    //$('#display_tips').html(person.bmiTips);
    if (person.bmiImage != undefined) {
      $('#display_image').html(`<br />
        <img src="img/${person.bmiImage}" width="50%"/>`);
    }
    if (person.bmiTips != undefined) {
      $('#display_tips').html(`<br /><h5>Sponsored tip for you</h5>
      <img style="border: 1px solid #eeeeee; padding: 10px;"
       src="img/${person.bmiTips}" width="50%"/>`);
    }
  });
});
