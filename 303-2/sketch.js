/*

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is pressed:
	- Make ClassifiedVaultVal_0 equal to the value of mouseX
	- Use the 'min' function to prevent ClassifiedVaultVal_0 from going above 15

	Whilst the mouse is being dragged:
	- Decrement ClassifiedVaultVal_1 by 1
	- Use the 'max' function to prevent ClassifiedVaultVal_1 from falling below 1

	Whilst the mouse is moving:
	- Make ClassifiedVaultVal_2 equal to the value of mouseY
	- Use the 'max' function to prevent ClassifiedVaultVal_2 from falling below 3

	Whilst the mouse is moving:
	- Decrement ClassifiedVaultVal_3 by 3
	- Use the 'constrain' function to prevent ClassifiedVaultVal_3 from falling below 2 and going above 16

	Whilst the mouse is moving:
	- Make ClassifiedVaultVal_4 equal to the value of mouseY
	- Use the 'constrain' function to prevent ClassifiedVaultVal_4 from falling below 11 and going above 70



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var ClassifiedVaultVal_0;
var ClassifiedVaultVal_1;
var ClassifiedVaultVal_2;
var ClassifiedVaultVal_3;
var ClassifiedVaultVal_4;

function preload() {
  //IMAGES WILL BE LOADED HERE
}

function setup() {
  createCanvas(512, 512);

  //initialise the variables
  ClassifiedVaultVal_0 = 0;
  ClassifiedVaultVal_1 = 0;
  ClassifiedVaultVal_2 = 0;
  ClassifiedVaultVal_3 = 0;
  ClassifiedVaultVal_4 = 0;
}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mousePressed() {
  ClassifiedVaultVal_0 = min(mouseX, 15);
}

function mouseDragged() {
  ClassifiedVaultVal_1 = max(ClassifiedVaultVal_1 - 1, 1);
}

function mouseMoved() {
  ClassifiedVaultVal_2 = max(mouseY, 3);
  ClassifiedVaultVal_3 = constrain(ClassifiedVaultVal_3 - 3, 2, 16);
  ClassifiedVaultVal_4 = constrain(mouseY, 11, 70);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw() {
  //Draw the safe door
  background(70);
  noStroke();
  fill(29, 110, 6);
  rect(26, 26, width - 52, width - 52);

  //Draw the combination dials
  push();
  translate(120, 170);
  drawDial(140, ClassifiedVaultVal_0, 19);
  pop();

  push();
  translate(120, 380);
  drawDial(140, ClassifiedVaultVal_1, 16);
  pop();

  push();
  translate(280, 170);
  drawDial(140, ClassifiedVaultVal_2, 25);
  pop();

  push();
  translate(280, 380);
  drawDial(140, ClassifiedVaultVal_3, 22);
  pop();

  //Draw the lever
  push();
  translate(width - 125, 256);
  drawLever(ClassifiedVaultVal_4);
  pop();
}

function drawDial(diameter, num, maxNum) {
  //the combination lock

  var r = diameter * 0.5;
  var p = r * 0.6;

  stroke(0);
  fill(255, 255, 200);
  ellipse(0, 0, diameter, diameter);
  fill(100);
  noStroke();
  ellipse(0, 0, diameter * 0.66, diameter * 0.66);
  fill(150, 0, 0);
  triangle(-p * 0.4, -r - p, p * 0.4, -r - p, 0, -r - p / 5);

  noStroke();

  push();
  var inc = 360 / maxNum;

  rotate(radians(-num * inc));
  for (var i = 0; i < maxNum; i++) {
    push();
    rotate(radians(i * inc));
    stroke(0);
    line(0, -r * 0.66, 0, -(r - 10));
    noStroke();
    fill(0);
    text(i, 0, -(r - 10));
    pop();
  }

  pop();
}

function drawLever(rot) {
  push();
  rotate(radians(-rot));
  stroke(0);
  fill(100);
  rect(-10, 0, 20, 100);
  ellipse(0, 0, 50, 50);
  ellipse(0, 100, 35, 35);
  pop();
}
