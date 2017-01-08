var NUMSPARKS = 20;
var BG = 25;

var canvas;
var sparks = [];

function setup() {
  canvas = createCanvas(windowWidth, 300);
  canvas.parent('sketch-box');
  for (var i = 0; i < NUMSPARKS; i += 1) {
    sparks[i] = new Spark();
  }
}

function draw() {
  noStroke();
  background(BG);
  for (var i = 0; i < NUMSPARKS; i += 1) {
    sparks[i].update();
    if (sparks[i].respawn()) {
      sparks[i] = new Spark();
    }
    sparks[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, 300);
}
