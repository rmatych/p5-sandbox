var FRICTION = 0.002;
var TRAILLENGTH = 60;

function Spark(pos, vel) {
  if (typeof pos !== 'undefined') {
    this.pos = createVector(pos.x, pos.y);
  } else {
    /* Random initial position */
    var x = random(width);
    var y = random(height);
    this.pos = createVector(x, y);
  }
  if (typeof vel !== 'undefined') {
    this.vel = createVector(vel.x, vel.y);
  } else {
    /* Random initial velocity */
    this.vel = p5.Vector.random2D().mult(random(1));
  }
  this.trail = [];


  /* Draw the spark and its trail */
  this.show = function() {
    base = map(this.vel.mag(), 0, 1, BG, 255);
    fill(base);
    ellipse(this.pos.x, this.pos.y, 4, 4);

    len = this.trail.length;
    for (var i = 0; i < len; i += 1) {

      fill(map(i, 0, len, BG, base));

      size = (i / len) * 4;
      x = this.trail[i].x;
      y = this.trail[i].y;
      ellipse(x, y, size, size);
    }
  };

  /* Adjusts position and velocity vectors */
  this.update = function() {
    this.hist();
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.wrap();
    this.slow();
  };

  /* Wraps spark positions to keep them on the canvas */
  this.wrap = function() {
    if (this.pos.x < 0) {
      this.pos.x = width;
    } else if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
    } else if (this.pos.y > height) {
      this.pos.y = 0;
    }
  };

  /* Spark deceleration */
  this.slow = function() {
    var dv = createVector(this.vel.x, this.vel.y);
    dv.setMag(1).mult(FRICTION);
    this.vel.sub(dv);
  };

  /* When this spark reaches low velocity, it's time to respawn */
  this.respawn = function() {
    if (this.vel.mag() < 0.01) {
      return true;
    }
    return false;
  };

  /* Keeps track of 50 prior locations */
  this.hist = function() {
    if (this.trail.length < TRAILLENGTH) {
      this.trail.push(this.pos);
    } else {
      this.trail.shift();
      this.trail.push(createVector(this.pos.x, this.pos.y));
    }
  };
}
