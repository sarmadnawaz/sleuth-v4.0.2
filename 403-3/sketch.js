/*


Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Gosling Road.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 94 meters from Norbert's Burrito Stall then alert local police by drawing a SeaGreen circle around it with a radius of 94 pixels.
- if Shiffman is in Wrong Side of the tracks then the neighbourhood watch must be notified by drawing a MediumSpringGreen rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a DarkMagenta rectangle covering the area between Reynolds Street, Turing Place, Gosling Road and Crowther Road.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

*/

var img;

function preload() {
  img = loadImage("map.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  // draw the image
  image(img, 0, 0);

  let distance = dist(mouseX, mouseY, 1019, 372);

  //Write your code below here ...
  if (distance <= 94) {
    fill(46, 139, 87);
    ellipse(1019, 372, 188);
  } else if (mouseX > 744 && mouseX < 949 && mouseY > 95 && mouseY < 223) {
    fill(0, 250, 154);
    rect(744, 95, 205, 138);
  } else {
    fill(139, 0, 139);
    rect(1750, 570, 1200, 562);
  }

  // finally, draw Shiffman's position
  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);

  // a helpful mouse coordinate pointer
  fill(255);
  noStroke();
  text(`${mouseX},${mouseY}`, mouseX, mouseY);
}
