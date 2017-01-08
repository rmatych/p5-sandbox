var canvas;

function setup() {
  canvas = createCanvas(windowWidth, 300, WEBGL);
  canvas.parent('sketch-box');
}

function draw() {
  background(51);
}

function windowResized() {
  resizeCanvas(windowWidth, 300);
}
