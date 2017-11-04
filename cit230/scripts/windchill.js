var temperature = 42;
var speed = 15;
var chill = 35.74 + 0.6215 * temperature - 35.75 * (Math.pow(speed, 0.16)) + 0.4275 * temperature * (Math.pow(speed, 0.16));
var rounded = Math.round(chill * 10) /10;

document.getElementById("windchill").innerHTML = rounded;
