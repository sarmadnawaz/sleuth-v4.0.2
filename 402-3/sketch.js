/*
402 - The case of the Why Gang ruby heist
Stage 4 - Fox

This final Why gang member Fox is the boss of the gang. Fox is particularly cunning and has hidden herself down this twisted network of alleys known as vice city. Head into vice city to find her but don’t get lost!

- Write if statements in the draw loop to set the direction for the detective
- Do this using the properties of the detective object, speedX and speedY. 
	- For example, to go north you would write the following code:
		det.speedX = 0; 
		det.speedY = -1;

- There are many ways to complete this task but you should only use the following commands and operators:
	if(){}
	else if
	>
	<
	&&

- You will need to make careful use of `else if` and the && operator for this task. Join all conditionals with "else if" and use at least one && operator for each condition.

*/

var currentRoad;
var direction;
var mapImage;
var overlayImage;

//the detective object
var det = {
  speedX: 0,
  speedY: 0,
  locationX: 763,
  locationY: 10,
  currentStreet: undefined,
  image: "./det.png",
};

function preload() {
  perp.image = loadImage(perp.image);
  det.image = loadImage(det.image);
  mapImage = loadImage("./map.png");
  overlayImage = loadImage("./overlay.png");
}

function setup() {
  createCanvas(1024, 768);
}

function moveRight() {
  det.speedX = 1;
  det.speedY = 0;
}

function moveLeft() {
  det.speedX = -1;
  det.speedY = 0;
}

function moveUp() {
  det.speedX = 0;
  det.speedY = -1;
}

function moveDown() {
  det.speedX = 0;
  det.speedY = 1;
}

function draw() {
  ///////////////////ADD YOUR CODE HERE///////////////////
  if (det.locationX === 763 && det.locationY >= 10 && det.locationY < 135) {
    moveDown();
  } else if (
    det.locationY === 135 &&
    det.locationX <= 763 &&
    det.locationX > 385
  ) {
    moveLeft();
  } else if (
    det.locationX === 385 &&
    det.locationY >= 135 &&
    det.locationY < 200
  ) {
    moveDown();
  } else if (
    det.locationY === 200 &&
    det.locationX >= 385 &&
    det.locationX < 700
  ) {
    moveRight();
  } else if (
    det.locationX === 700 &&
    det.locationY >= 200 &&
    det.locationY < 325
  ) {
    moveDown();
  } else if (
    det.locationY === 325 &&
    det.locationX <= 700 &&
    det.locationX > 195
  ) {
    moveLeft();
  } else if (
    det.locationX === 195 &&
    det.locationY >= 325 &&
    det.locationY < 450
  ) {
    moveDown();
  } else if (
    det.locationY === 450 &&
    det.locationX >= 195 &&
    det.locationX < 575
  ) {
    moveRight();
  } else if (
    det.locationX === 575 &&
    det.locationY >= 450 &&
    det.locationY < 575
  ) {
    moveDown();
  } else if (
    det.locationY === 575 &&
    det.locationX <= 575 &&
    det.locationX > 260
  ) {
    moveLeft();
  } else if (
    det.locationX === 260 &&
    det.locationY >= 575 &&
    det.locationY < 635
  ) {
    moveDown();
  } else if (
    det.locationY === 635 &&
    det.locationX >= 260 &&
    det.locationX < 700
  ) {
    moveRight();
  } else if (
    det.locationX === 700 &&
    det.locationY >= 635 &&
    det.locationY < 700
  ) {
    moveDown();
  }

  ///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

  background(50);

  if (perp.caught === 0) {
    det.locationX += det.speedX;
    det.locationY += det.speedY;
  }

  //draw the images of the map perp and the detective
  image(mapImage, 0, 0);
  image(overlayImage, 0, 0);
  image(
    perp.image,
    perp.locationX - roadWidth,
    perp.locationY - roadWidth,
    roadWidth * 2,
    roadWidth * 2
  );

  push();
  translate(det.locationX, det.locationY);
  if (det.speedX != 0) rotate((det.speedX - 1.5) * PI);
  else if (det.speedY < 0) rotate(PI);
  image(det.image, -roadWidth, -roadWidth, roadWidth * 2, roadWidth * 2);
  pop();

  push();
  textAlign(CENTER);
  textSize(32);
  noStroke();

  //the perp has been caught
  if (
    dist(det.locationX, det.locationY, perp.locationX, perp.locationY) <
    roadWidth / 2
  ) {
    //display message to the player
    fill(0, 220, 0);
    text(
      "Just in the nick of time! \nYou caught " + perp.name,
      width / 2,
      height / 2
    );
    perp.caught = 1;
  }

  //not on any roads, therefore the game is lost.
  if (!getOnRoad() || (det.speedX == 0 && det.speedY == 0)) {
    fill(255, 0, 0);
    text(
      "You let " + perp.name + " get away.\n Better luck next time.",
      width / 2,
      height / 2
    );
    perp.caught = -1;
  }

  pop();

  hud();

  fill(255);
  text(`${mouseX},${mouseY}`, mouseX, mouseY);
}

function hud() {
  push();
  fill(250);
  noStroke();
  textAlign(LEFT, TOP);
  text(
    "detective location - x: " + det.locationX + " y: " + det.locationY,
    5,
    5
  );
  pop();
}

function getOnRoad() {
  if (mapImage.get(det.locationX, det.locationY)[0] == bckgrndColour) {
    return false;
  }

  return true;
}

var roadWidth = 25;
var bckgrndColour = 50;
var perp = {
  caught: 0,
  name: "Fox",
  image: "./perp.png",
  locationX: 701,
  locationY: 696,
};
