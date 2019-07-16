const width = 60;
let locked = false;
let p;
let q;

function setup() {
  createCanvas(480, 360);
  p = createVector(width / 2, width / 2)
  q = createVector(width / 2, width / 2)
}

function draw() {
  background(220);
  for (let iy = 0; iy < 8; iy++) {
    for (let ix = 0; ix < 12; ix++) {
      const x = ix * width;
      const y = iy * width;
      if (
        x < mouseX &&
        mouseX < x + width &&
        y < mouseY &&
        mouseY < y + width &&
        locked
      ) {
        fill('white');
      } else {
        fill(192);
      }
      rect(x, y, width, width);
    }
  }
  if (locked) {
    fill(128, 128, 128, 0)
    ellipse(mouseX, mouseY, width - 10)
    line(p.x, p.y, mouseX, mouseY)
  } else {
    v = p5.Vector.sub(q, p).div(8);
    p.add(v);

  }
  fill('#65ace4')
  ellipse(p.x, p.y, width - 10);
}

function mousePressed() {
  locked = true;
}

function mouseReleased() {
  locked = false;
  q = createVector(int(mouseX / width) * width + width / 2, int(mouseY / width) * width + width / 2);
}
