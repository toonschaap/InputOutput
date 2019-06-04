//Gamepad
window.addEventListener("gamepadconnected", function(e) {
console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
e.gamepad.index, e.gamepad.id,
e.gamepad.buttons.length, e.gamepad.axes.length);

var gamepadInfo = document.getElementById("gamepad-info");
var ball = document.getElementById("ball");
var start;
var a = 0;
var b = 0;

});
