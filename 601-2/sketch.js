/*


Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Teal fill triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, LightSeaGreen fill ellipses at each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 53 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- triangle() NB. Draw each triangle with the point roughly at its center.

- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var KillerData = {
  positionX: [
    639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714,
    695, 693, 654, 624, 594, 555,
  ],
  positionY: [
    288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514,
    531, 552, 523, 500, 484, 474,
  ],
};

//Recent crime records.

var IncidentLog = [
  { PosX: 409, PosY: 446, KilledDetails: "JESUS FORSLIN" },
  { PosX: 443, PosY: 419, KilledDetails: "DRUSILLA WARMAN" },
  { PosX: 465, PosY: 548, KilledDetails: "LAVERNE JACQUELIN" },
  { PosX: 709, PosY: 552, KilledDetails: "MALINDA GOODBURY" },
  { PosX: 695, PosY: 421, KilledDetails: "RANDEE CROME" },
  { PosX: 652, PosY: 268, KilledDetails: "SUMMER CASIMERE" },
  { PosX: 641, PosY: 306, KilledDetails: "HANG NIEMELA" },
  { PosX: 119, PosY: 344, KilledDetails: "LIANNE COURTWOOD" },
  { PosX: 114, PosY: 359, KilledDetails: "LINETTE MOHWAWK" },
  { PosX: 90, PosY: 490, KilledDetails: "JACQUELINE DURANTS" },
  { PosX: 76, PosY: 516, KilledDetails: "KITTY THAXTER" },
  { PosX: 615, PosY: 741, KilledDetails: "DARBY MYRLE" },
  { PosX: 349, PosY: 796, KilledDetails: "NICOLE ASHELY" },
  { PosX: 456, PosY: 770, KilledDetails: "ERMELINDA OORIN" },
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

  fill(0, 128, 128);
  for (let i = 0; i < KillerData.positionX.length; i++) {
    triangle(
      KillerData.positionX[i] - 5,
      KillerData.positionY[i] - 5,
      KillerData.positionX[i] + 5,
      KillerData.positionY[i] - 5,
      KillerData.positionX[i],
      KillerData.positionY[i] + 5
    );
  }

  fill(32, 178, 170);
  for (let i = 0; i < IncidentLog.length; i++) {
    ellipse(IncidentLog[i].PosX, IncidentLog[i].PosY, 8, 8);
  }

  for (let i = 0; i < KillerData.positionX.length; i++) {
    for (let j = 0; j < IncidentLog.length; j++) {
      if (
        dist(
          KillerData.positionX[i],
          KillerData.positionY[i],
          IncidentLog[j].PosX,
          IncidentLog[j].PosY
        ) < 53
      ) {
        possibleMatches.push({
          crime: {
            x: IncidentLog[j].PosX,
            y: IncidentLog[j].PosY,
            victimName: IncidentLog[j].KilledDetails,
          },
          suspect: { x: KillerData.positionX[i], y: KillerData.positionY[i] },
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
