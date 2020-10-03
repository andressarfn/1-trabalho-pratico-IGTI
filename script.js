window.addEventListener('load', start);

var inputRed = null;
var inputGreen = null;
var inputBlue = null;
var rangeRed = null;
var rangeGreen = null;
var rangeBlue = null;
var divSquare = null;

function start() {
  rangeRed = document.querySelector('#rangeRed');
  rangeGreen = document.querySelector('#rangeGreen');
  rangeBlue = document.querySelector('#rangeBlue');

  inputRed = document.querySelector('#inputRed');
  inputGreen = document.querySelector('#inputGreen');
  inputBlue = document.querySelector('#inputBlue');

  divSquare = document.querySelector('#square');

  rangeRed.addEventListener('input', setColor);
  rangeGreen.addEventListener('input', setColor);
  rangeBlue.addEventListener('input', setColor);

  setColor();
}

function setColor() {
  var red = rangeRed.value;
  var green = rangeGreen.value;
  var blue = rangeBlue.value;

  inputRed.value = red;
  inputGreen.value = green;
  inputBlue.value = blue;

  var rgbCSS = 'rgb(' + red + ',' + green + ',' + blue + ')';

  divSquare.style.backgroundColor = rgbCSS;
}
