var canvas;
var numSparks = 20;
var sparks = [];

function setup() {
  canvas = createCanvas(windowWidth, 300);
  canvas.parent('sketch-box');
  for (var i = 0; i < numSparks; i += 1) {
    sparks[i] = new Spark();
  }
}

function draw() {
  background(25);
  for (var i = 0; i < numSparks; i += 1) {
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
