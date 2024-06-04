/*
201 - The case of Judge Hopper
Stage 4 - The warehouse


As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload() {
  img = loadImage("scene.png");
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  image(img, 0, 0);
  stroke(255, 0, 0);
  strokeWeight(3);
  noFill();

  // write the code to draw around the Judge's body below
  beginShape();
  vertex(245, 140);
  vertex(275, 200);
  vertex(400, 210);
  vertex(330, 520);
  vertex(435, 520);
  vertex(495, 450);
  vertex(495, 350);
  vertex(520, 265);
  vertex(560, 285);
  vertex(620, 200);
  vertex(580, 200);
  vertex(560, 245);
  vertex(530, 190);
  vertex(490, 130);
  vertex(460, 130);

  endShape(CLOSE);

  //A helpful mouse pointer
  push();
  fill(0);
  noStroke();
  text(mouseX + "," + mouseY, mouseX, mouseY);
  pop();
}
