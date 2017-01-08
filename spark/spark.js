function Spark(pos, vel) {
  if (typeof pos !== 'undefined') {
    this.pos = createVector(pos.x, pos.y);
  } else {
    var x = random(width);
    var y = random(height);
    this.pos = createVector(x, y);
  }
  if (typeof vel !== 'undefined') {
    this.vel = createVector(vel.x, vel.y);
  } else {
    this.vel = p5.Vector.random2D().mult(1);
  }

  this.show = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4, 4);
  };

  this.update = function() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.wrap();
  };

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
}
