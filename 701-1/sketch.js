/*



Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They definately weigh less than 83 Kg. I remember they had a chinese lettering tattoo. By the look of them they were younger than 52. They had short black hair. It was very dark and I could barely see, I'm not quite sure. The person I saw was male. They were carrying a laptop bag. That's all I know officer. 

*/

var suspectList = [
  {
    name: "JACQUELINE SILVEIRA",
    gender: "female",
    accessory: "black duffle bag",
    hair: "thick black",
    weight: 92,
    age: 72,
  },
  {
    name: "LINETTE MAUBERT",
    gender: "male",
    accessory: "plastic box",
    hair: "long white",
    weight: 64,
    age: 58,
  },
  {
    name: "HANG JENI",
    gender: "male",
    accessory: "big black envelope",
    hair: "ginger",
    weight: 71,
    age: 63,
  },
  {
    name: "LESLEY CROME",
    gender: "male",
    accessory: "orange tote bag",
    hair: "shaved",
    weight: 68,
    age: 36,
  },
  {
    name: "JULIANA PORTOS",
    gender: "male",
    accessory: "laptop bag",
    hair: "short black",
    weight: 78,
    age: 47,
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

function matchProperties(suspectObj) {
  if (
    suspectObj.gender == "male" &&
    suspectObj.accessory == "laptop bag" &&
    suspectObj.hair == "short black" &&
    suspectObj.weight < 83 &&
    suspectObj.age < 52
  ) {
    return true;
  }
  return false;
}

function draw() {
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for (let i = 0; i < suspectList.length; i++) {
    if (matchProperties(suspectList[i]) == true) {
      fill(255, 0, 0);
      text(suspectList[i].name + " is guilty!", 60, 60 + i * 20);
    } else {
      fill(0, 155, 0);
      text(suspectList[i].name + " is not guilty", 60, 60 + i * 20);
    }
  }
}
