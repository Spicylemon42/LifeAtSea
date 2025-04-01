class Trash {
  constructor(x, y, r) {
    this.pos = createVector(x, y); 
    this.r = r;
    this.vel = createVector(random(-2, 2), random(-2, 2)); // Random initial velocity

    // Random number of sides for the polygon
    this.sides = floor(random(3, 8));

    // Random color for each trash object
    this.color = color(random(255), random(255), random(255));

    // Store random vertices for the polygon
    this.vertices = [];
    for (let i = 0; i < this.sides; i++) {
      let angle = TWO_PI / this.sides * i;
      let radius = random(this.r / 2, this.r); // Randomize radius of each vertex
      let x = cos(angle) * radius;
      let y = sin(angle) * radius;
      this.vertices.push(createVector(x, y)); // Store vertex as vector
    }
  }

  // Update position and wrap around when reaching the canvas boundary
  update() {
    // Add velocity to position to move the trash
    this.pos.add(this.vel);

    // Wrap around horizontally
    if (this.pos.x > windowWidth*10) {
      this.pos.x = 0; // Move to the left side if going off the right
    } else if (this.pos.x < 0) {
      this.pos.x < windowWidth*10; // Move to the right side if going off the left
    }



    // Wrap around vertically
    if (this.pos.y > windowHeight*10) {
      this.pos.y = 0; // Move to the top if going off the bottom
    } else if (this.pos.y < 0) {
      this.pos.y < windowHeight*10; // Move to the bottom if going off the top
    }
  }

  // Show the polygon trash
  show() {
    fill(this.color);
    stroke(255);
    strokeWeight(0);

    push();
    translate(this.pos.x, this.pos.y);
    beginShape();
    for (let i = 0; i < this.sides; i++) {
      vertex(this.vertices[i].x, this.vertices[i].y);
    }
    endShape(CLOSE);
    pop();
  }
}
