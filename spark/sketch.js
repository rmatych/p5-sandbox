var NUMSPARKS = 20;
var BG = 21;
var BGCOLOR = [72, 66, 244];
var WHITE = [255, 255, 255];

var canvas;
var sparks = [];

function setup() {
  BGCOLOR = color(BGCOLOR);
  WHITE = color(WHITE);

  canvas = createCanvas(windowWidth, 300);
  canvas.parent('sketch-box');
  for (var i = 0; i < NUMSPARKS; i += 1) {
    sparks[i] = new Spark();
  }
}

function draw() {
  // background(BG);
  background(BGCOLOR);
  noStroke();
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
