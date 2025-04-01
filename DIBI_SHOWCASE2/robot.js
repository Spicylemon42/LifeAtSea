let trashCollected = 0;

class Robot {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.targetPos = createVector(x, y); // Target position for lerping
    this.speed = 20; // Speed of movement

    // Movement flags for each key
    this.movingUp = false;
    this.movingDown = false;
    this.movingLeft = false;
    this.movingRight = false;
  }

  update() {
    // Calculate the target position based on movement flags
    if (this.movingLeft) {
      this.targetPos.x -= this.speed;
    }
    if (this.movingRight) {
      this.targetPos.x += this.speed;
    }
    if (this.movingUp) {
      this.targetPos.y -= this.speed;
    }
    if (this.movingDown) {
      this.targetPos.y += this.speed;
    }

    // Lerp the position to smoothly move towards the target position
    this.pos.x = lerp(this.pos.x, this.targetPos.x, 0.1); // Adjust 0.1 for smoothness
    this.pos.y = lerp(this.pos.y, this.targetPos.y, 0.1);
  }

  show() {
    fill(0, 0, 0);  // Green color for dibi
    stroke(255);
    strokeWeight(5);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2); // Display dibi
  }

  eats(other) {
    var d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    if (d < this.r + other.r) {
      var sum = PI * this.r * this.r + PI * other.r * other.r;
      trashCollected++;
      return true;
    }
    return false;
  }
}

// Capture key presses
function keyPressed() {
  if (key === 'A' || key === 'a') {
    dibi.movingLeft = true;
  }
  if (key === 'D' || key === 'd') {
    dibi.movingRight = true;
  }
  if (key === 'W' || key === 'w') {
    dibi.movingUp = true;
  }
  if (key === 'S' || key === 's') {
    dibi.movingDown = true;
  }
}

// Capture key releases
function keyReleased() {
  if (key === 'A' || key === 'a') {
    dibi.movingLeft = false;
  }
  if (key === 'D' || key === 'd') {
    dibi.movingRight = false;
  }
  if (key === 'W' || key === 'w') {
    dibi.movingUp = false;
  }
  if (key === 'S' || key === 's') {
    dibi.movingDown = false;
  }
}
