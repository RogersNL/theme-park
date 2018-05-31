$(document).ready(function() {


  var height = parseInt(prompt("How tall are you in Inches?"));
  if (height >= 60) {
    $('#normal-ride').addClass("highlighted");
    $('#tall-ride').addClass("highlighted");
    $('#extra-tall').addClass("highlighted");
  } else if (height >= 56) {
    $('#normal-ride').addClass("highlighted");
    $('#tall-ride').addClass("highlighted");
  } else if(height > 48) {
    $('#normal-ride').addClass("highlighted");
  } else
    $('#kids-ride').addClass("highlighted");
    $('#normal-ride').addClass("highlighted");
});
