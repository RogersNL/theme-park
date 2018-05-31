$(document).ready(function() {


  var height = parseInt(prompt("How tall are you in Inches?"));
  if (height >= 60) {
    $('#normal-ride').show();
    $('#tall-ride').show();
    $('#extra-tall').show();
  } else if (height >= 56) {
    $('#normal-ride').show();
    $('#tall-ride').show();
  } else if(height > 48) {
    $('#normal-ride').show();
  } else
    $('#kids-ride').show();
    $('#normal-ride').show();
});
