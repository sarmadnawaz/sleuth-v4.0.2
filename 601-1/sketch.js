/*

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, RoyalBlue fill triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Coral stroke ellipses at each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- triangle() NB. Draw each triangle with the point roughly at its center.

- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var murderer_sightings = [
  { loc_x: 639, loc_y: 288 },
  { loc_x: 681, loc_y: 286 },
  { loc_x: 712, loc_y: 293 },
  { loc_x: 756, loc_y: 310 },
  { loc_x: 715, loc_y: 368 },
  { loc_x: 701, loc_y: 425 },
  { loc_x: 753, loc_y: 436 },
  { loc_x: 815, loc_y: 468 },
  { loc_x: 795, loc_y: 506 },
  { loc_x: 788, loc_y: 497 },
  { loc_x: 781, loc_y: 486 },
  { loc_x: 768, loc_y: 489 },
  { loc_x: 750, loc_y: 500 },
  { loc_x: 732, loc_y: 506 },
  { loc_x: 714, loc_y: 514 },
  { loc_x: 695, loc_y: 531 },
  { loc_x: 693, loc_y: 552 },
  { loc_x: 654, loc_y: 523 },
  { loc_x: 624, loc_y: 500 },
  { loc_x: 594, loc_y: 484 },
  { loc_x: 555, loc_y: 474 },
];

//Recent crime records.

var crime_recorded_CoordX = [
  403, 402, 427, 646, 639, 830, 809, 844, 802, 683, 552, 629, 712, 783, 415,
  561, 562, 751, 680, 626, 701, 838, 322, 468, 625,
];
var crime_recorded_CoordY = [
  401, 360, 403, 284, 264, 434, 443, 496, 350, 413, 464, 498, 562, 603, 225,
  282, 392, 283, 359, 436, 455, 565, 508, 556, 737,
];

function preload() {
  countyMap = loadImage("map.png");
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);
  noFill();
  noStroke();
  image(countyMap, 0, 0);

  //add your code below here

  fill(65, 105, 225);
  for (var i = 0; i < murderer_sightings.length; i++) {
    let x = murderer_sightings[i].loc_x;
    let y = murderer_sightings[i].loc_y;
    triangle(x, y - 5, x - 5, y + 5, x + 5, y + 5);
  }

  stroke(255, 127, 80);
  noFill();
  for (var i = 0; i < crime_recorded_CoordX.length; i++) {
    ellipse(crime_recorded_CoordX[i], crime_recorded_CoordY[i], 10, 10);
  }
}

//We are not using the draw function this time
