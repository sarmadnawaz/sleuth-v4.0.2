/*


Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, DarkTurquoise fill rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var FryLogbook = {
  LocX: [
    127, 156, 179, 200, 220, 228, 249, 269, 292, 321, 354, 390, 396, 429, 456,
    467, 483, 531, 547, 571, 589, 637,
  ],
  LocY: [
    175, 158, 192, 154, 133, 168, 149, 139, 168, 133, 159, 144, 225, 228, 230,
    277, 267, 291, 278, 274, 318, 280,
  ],
};

function preload() {
  countyMap = loadImage("map.png");
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);
  noFill();
  noStroke();

  image(countyMap, 0, 0);

  //add your code below here

  // Some of the shapes used to draw Casey Fry's trail are too large. Keep dimensions at less than 10 pixels.

  fill(0, 206, 209);
  for (var i = 0; i < FryLogbook.LocX.length; i++) {
    rect(FryLogbook.LocX[i], FryLogbook.LocY[i], 5, 5);
  }
}

//We are not using the draw function this time
