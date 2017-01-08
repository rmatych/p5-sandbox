var BG = 25;

var canvas;

function setup() {
  canvas = createCanvas(windowWidth, 300);
  canvas.parent('sketch-box');
}

function draw() {
  noStroke();
  background(BG);
}

function windowResized() {
  resizeCanvas(windowWidth, 300);
}
