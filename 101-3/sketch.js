/*

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Medium Spring Green filled rectangle with a Yellow outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Brown filled
rectangle with a Pale Violet Red outline around him.

Identify the man reading the newspaper by drawing a Cornflower Blue filled rectangle
with a Tomato outline around him.

Identify the woman with the dog by drawing a Forest Green filled rectangle with a
Dark Red outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload() {
  img = loadImage("img.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  strokeWeight(2);
}

function draw() {
  image(img, 0, 0);

  //Write your code below here ...
  fill(0, 250, 154);
  stroke(255, 255, 0);
  rect(600, 345, 265, 540);

  fill(165, 42, 42);
  stroke(219, 112, 147);
  rect(1720, 520, 185, 240);

  fill(100, 149, 237);
  stroke(255, 99, 71);
  rect(105, 410, 230, 460);

  fill(34, 139, 34);
  stroke(139, 0, 0);
  rect(1225, 310, 370, 80);

  //A helpful mouse pointer
  push();
  fill(0);
  noStroke();
  text(mouseX + "," + mouseY, mouseX, mouseY);
  pop();
}
