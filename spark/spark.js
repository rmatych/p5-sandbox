var friction = 0.005;

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
    this.vel = p5.Vector.random2D().mult(random());
  }

  /* Draws an ellipse at spark's position */
  this.show = function() {
    fill(map(this.vel.mag(), 0, 1, 25, 255));
    ellipse(this.pos.x, this.pos.y, 4, 4);
  };

  /* Adjusts position and velocity vectors */
  this.update = function() {
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
    dv.setMag(1).mult(friction);
    this.vel.sub(dv);
  };

  /* When this spark reaches low velocity, randomly generate a new one */
  this.respawn = function() {
    if (this.vel.mag() < 0.01) {
      return true;
    }
    return false;
  };
}
