/*


Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from tu symmes.
All they need is for you to do the detective work.

This time you must implement two functions:

- A matchProperties function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A getSuspectMatch function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - function getSuspectMatch(){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. The person I saw was male. They brobably weigh between 73 and 88 kg. They were fairly tall, I think between a height of 168 and 192 cm. Their expression seemed menacing. It was so scary! I'll never forget their brown eyes. I distinctly remember that they were wearing a dotted necktie, I remember thinking that was quite unusual. It's hard to say. They seemed to be between the age of 25 and 72 years old. I'm not quite sure. They were wearing a green army coat. They had white hair. That's all I know officer. 

*/

var lineupLog = [
  {
    name: "KITTY ADVERSANE",
    coat: "black hoodie",
    eyes: "pale",
    gender: "female",
    item: "pair of leather trousers",
    age: 26,
    height: 168,
    weight: 67,
  },
  {
    name: "HANG CROME",
    coat: "green army coat",
    eyes: "brown",
    gender: "male",
    item: "dotted necktie",
    age: 41,
    height: 180,
    weight: 74,
  },
  {
    name: "JACQUELINE WARMAN",
    coat: "white fur coat",
    eyes: "green",
    gender: "female",
    item: "purple hat",
    age: 29,
    height: 166,
    weight: 71,
  },
  {
    name: "LESLEY JOYER",
    coat: "green jacket",
    eyes: "blue",
    gender: "male",
    item: "fur vest",
    age: 50,
    height: 173,
    weight: 70,
  },
  {
    name: "LOUISE DURANTS",
    coat: "yellow poncho",
    eyes: "black",
    gender: "female",
    item: "pink scarf",
    age: 42,
    height: 187,
    weight: 63,
  },
  {
    name: "JESUS COURTWOOD",
    coat: "blue overcoat",
    eyes: "brown",
    gender: "female",
    item: "red necktie",
    age: 55,
    height: 155,
    weight: 84,
  },
  {
    name: "RANDEE FORSLIN",
    coat: "black overcoat",
    eyes: "pale",
    gender: "male",
    item: "net weave shirt",
    age: 39,
    height: 161,
    weight: 73,
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

// Declare both your functions here

function matchProperties(suspectObj) {
  let match = 0;
  if (suspectObj.gender == "male") {
    match += 1;
  }
  if (suspectObj.weight >= 73 && suspectObj.weight <= 88) {
    match += 1;
  }
  if (suspectObj.height >= 168 && suspectObj.height <= 192) {
    match += 1;
  }
  if (suspectObj.eyes == "brown") {
    match += 1;
  }
  if (suspectObj.coat == "green army coat") {
    match += 1;
  }
  if (suspectObj.item == "dotted necktie") {
    match += 1;
  }
  if (suspectObj.age >= 25 && suspectObj.age <= 72) {
    match += 1;
  }

  return match;
}

function getSuspectMatch() {
  for (var i = 0; i < lineupLog.length; i++) {
    if (matchProperties(lineupLog[i]) === 7) {
      return lineupLog[i];
    }
  }
  return {};
}

function draw() {
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255, 0, 0);
  text(getSuspectMatch().name + " is guilty!", 60, 80);
}
