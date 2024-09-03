/*

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Gold fill ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, YellowGreen stroke triangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 36 pixels of any of the crimes within no more than 2 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- ellipse()

- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var frySighted_PositionX = [
  518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68,
];
var frySighted_PositionY = [
  471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493,
  461,
];
var frySighted_recordDate = [
  12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24,
];

//Recent crime records.

var attackLogbook_loc_x = [
  438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817,
];
var attackLogbook_loc_y = [
  420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474,
];
var attackLogbook_recordDate = [
  11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18,
];
var attackLogbook_fatality_name = [
  "TAMICA MAUBERT",
  "JULIANA ADVERSANE",
  "PIERRE DORCEY",
  "MALINDA GOODBURY",
  "DRUSILLA WARMAN",
  "MAJORIE JENI",
  "HANG NIEMELA",
  "LIANNE COURTWOOD",
  "LAKESHA SYMMES",
  "LAVERNE JACQUELIN",
  "JESSIA PORTOS",
  "ERMELINDA OORIN",
  "TU DAVISWOOD",
  "LARRAINE PEGORD",
  "BRIDGET BROADVIEW",
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

  fill(255, 215, 0);
  for (let i = 0; i < frySighted_PositionX.length; i++) {
    ellipse(frySighted_PositionX[i], frySighted_PositionY[i], 8);
  }

  stroke(154, 205, 50);
  noFill();
  for (let i = 0; i < attackLogbook_loc_x.length; i++) {
    triangle(
      attackLogbook_loc_x[i] - 5,
      attackLogbook_loc_y[i] - 5,
      attackLogbook_loc_x[i] + 5,
      attackLogbook_loc_y[i] - 5,
      attackLogbook_loc_x[i],
      attackLogbook_loc_y[i] + 5
    );
  }

  // code to find the matches
  for (let i = 0; i < attackLogbook_loc_x.length; i++) {
    for (let j = 0; j < frySighted_PositionX.length; j++) {
      if (
        dist(
          attackLogbook_loc_x[i],
          attackLogbook_loc_y[i],
          frySighted_PositionX[j],
          frySighted_PositionY[j]
        ) < 36 &&
        abs(attackLogbook_recordDate[i] - frySighted_recordDate[j]) <= 2
      ) {
        possibleMatches.push({
          crime: {
            x: attackLogbook_loc_x[i],
            y: attackLogbook_loc_y[i],
            victimName: attackLogbook_fatality_name[i],
          },
          suspect: { x: frySighted_PositionX[j], y: frySighted_PositionY[j] },
        });
      }
    }
  }

  // code to draw the matches ( if any)
  for (let i = 0; i < possibleMatches.length; i++) {
    stroke(127);
    strokeWeight(3);
    line(
      possibleMatches[i].crime.x,
      possibleMatches[i].crime.y,
      possibleMatches[i].suspect.x,
      possibleMatches[i].suspect.y
    );

    noStroke();
    fill(127);
    text(
      possibleMatches[i].crime.victimName,
      possibleMatches[i].crime.x + 15,
      possibleMatches[i].crime.y + 15
    );
  }
}

//We are not using the draw function this time
