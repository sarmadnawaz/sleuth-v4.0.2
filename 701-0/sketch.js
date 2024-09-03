/*


Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist brad silveira and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. The person I saw was female. It's hard to say. They were carrying a laptop bag. It was so scary! They wore very thick glasses. That's all I know officer. 

*/

var suspectsLog = [
  {
    name: "SUMMER PORTOS",
    glasses: "blue",
    gender: "female",
    accessory: "brown paper bag",
  },
  {
    name: "LESLEY MAUBERT",
    glasses: "white",
    gender: "male",
    accessory: "orange plastic bag",
  },
  {
    name: "LOUISE PHINNEY",
    glasses: "very thick",
    gender: "female",
    accessory: "laptop bag",
  },
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont("SpecialElite.ttf");
  backgroundImg = loadImage("Background.png");
}

function setup() {
  createCanvas(640, 480);
  textFont(myFont);
}

// Declare your function here
function checkSuspect(suspectObj) {
  if (
    suspectObj.gender == "female" &&
    suspectObj.accessory == "laptop bag" &&
    suspectObj.glasses == "very thick"
  ) {
    return true;
  }
  return false;
}

function draw() {
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for (let i = 0; i < suspectsLog.length; i++) {
    if (checkSuspect(suspectsLog[i]) == true) {
      fill(255, 0, 0);
      text(suspectsLog[i].name + " is guilty!", 60, 60 + i * 20);
    } else {
      fill(0, 155, 0);
      text(suspectsLog[i].name + " is not guilty", 60, 60 + i * 20);
    }
  }
}
