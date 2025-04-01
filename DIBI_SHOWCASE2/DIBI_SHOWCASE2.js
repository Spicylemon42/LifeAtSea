let dibi;
let trash = [];
let grow = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dibi = new Robot(0, 0, 64);
  for (let i = 0; i < 2000; i++) {
    let x = random(-60000, 60000);
    let y = random(-60000, 60000);
    trash[i] = new Trash(x, y, 16);
  }
}

function draw() {
  background(0);

  translate(width / 2, height / 2);
  let regrow = 64 / dibi.r;
  grow = lerp(grow, regrow, 0.1);
  scale(grow);
  translate(-dibi.pos.x, -dibi.pos.y);

  for (let i = trash.length - 1; i >= 0; i--) {
    trash[i].show();
    if (dibi.eats(trash[i])) {
      trash.splice(i, 1);
      addNewTrash();
    }
  }

  dibi.show();
  dibi.update();
  
  for (let i = 0; i < trash.length; i++) {
  trash[i].update();  // Move the trash
  trash[i].show();    // Display the trash
}
 fill(255);
  textSize(32);
  text("Trash Collected: " + trashCollected, 10, 40);
  translate(windowWidth, windowHeight);
  
  fill(255);
  textSize(32);
  text("Did you know?\n.5% of plastics produced\neach year ends up in the \nocean?", 0, 0);
  translate(windowWidth, windowHeight);
  
  fill(255);
  textSize(32);
  text("Did you know?\nOver 5 trillion pieces\nplastics are currently \nlittering our oceans. ", 100, 400);
  translate(windowWidth, windowHeight);
  
  fill(255);
  textSize(32);
  text("Did you know? \nHumans produce over 400 \nmillion metric tons of plastic annually. \nRoughly the weight of  all humans \non the planet", 67.6438, 43.5745);
  translate(windowWidth, windowHeight);
}

function addNewTrash() {
  let x = random(0,windowWidth*10);
  let y = random(0,windowHeight*10);
  trash.push(new Trash(x, y, 16));
}
