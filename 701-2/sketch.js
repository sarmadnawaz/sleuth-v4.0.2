/*


Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from tu maubert. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They were fairly tall, I think between a height of 176 and 180 cm. They brobably weigh between 68 and 79 kg. They seemed to be between the age of 30 and 45 years old. They had thick black hair. It was very dark and I could barely see, They were wearing a white fur coat. I distinctly remember that they were wearing a fur vest, I remember thinking that was quite unusual. I'll never forget their blue eyes. It was very dark and I could barely see, They were carrying a orange plastic bag. Can I go home now Sir? 

*/

var usualSuspects = [
	{ 
		"name": "MAJORIE GOODBURY",
		"hair": "white",
		"accessory": "brown paper bag",
		"coat": "green army coat",
		"eyes": "pale",
		"age": 42,
		"height": 181,
		"weight": 67
	},
	{ 
		"name": "LINETTE DORCEY",
		"hair": "dark brown",
		"accessory": "black duffle bag",
		"coat": "black overcoat",
		"eyes": "green",
		"age": 43,
		"height": 162,
		"weight": 61
	},
	{ 
		"name": "GAYLA JENI",
		"hair": "long white",
		"accessory": "red backpack",
		"coat": "blue overcoat",
		"eyes": "black",
		"age": 44,
		"height": 169,
		"weight": 70
	},
	{ 
		"name": "JESUS CASIMERE",
		"hair": "red",
		"accessory": "plastic box",
		"coat": "red parka",
		"eyes": "pale",
		"age": 37,
		"height": 199,
		"weight": 73
	},
	{ 
		"name": "BRIDGET SYMMES",
		"hair": "no",
		"accessory": "orange tote bag",
		"coat": "yellow poncho",
		"eyes": "grey",
		"age": 36,
		"height": 175,
		"weight": 75
	},
	{ 
		"name": "RANDEE JACQUELIN",
		"hair": "short black",
		"accessory": "glass bottle",
		"coat": "green jacket",
		"eyes": "blue",
		"age": 38,
		"height": 168,
		"weight": 71
	},
	{ 
		"name": "JESSIA CROME",
		"hair": "thick black",
		"accessory": "orange plastic bag",
		"coat": "white fur coat",
		"eyes": "blue",
		"age": 39,
		"height": 178,
		"weight": 76
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here

function testProperties(suspectObj){
	  
  let match = 0;
  
  if(suspectObj.height > 176 && suspectObj.height < 180){
	match++;
  }
  
  if(suspectObj.weight > 68 && suspectObj.weight < 79){
	match++;
  }
  
  if(suspectObj.age > 30 && suspectObj.age < 45){
	match++;
  }
  
  if(suspectObj.hair === "thick black"){
	match++;
  }
  
  if(suspectObj.coat === "white fur coat"){
	match++;
  }
  
  if(suspectObj.accessory === "orange plastic bag"){
	match++;
  }
  
  if(suspectObj.eyes === "blue"){
	match++;
  }
  
  return match;
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < usualSuspects.length; i++){
    let matchingProperties = testProperties(usualSuspects[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + usualSuspects[i].name, 60, 60 + i * 20);
  }
}
