/*



Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the population down with a potent poison. Word has it that he is smuggling his venomous filth via a streetside weiner stand. Hundreds of people have been affected, and the municipal water company tells me that their sewers are at full capacity. This is no laughing matter. I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:

	- If botulinium goes above 0.56, reduce antivenom by 0.03
	- If hemlock dips below 0.71, raise antivenom by 0.05
	- When formaldehyde goes above 0.28, decrease beta_blocker by 0.04
	- If hemlock dips below 0.49, increase beta_blocker by 0.05
	- When hemlock goes above 0.39, decrease opioids by 0.04
	- When formaldehyde goes above 0.32, increase opioids by 0.05


Your conditional statements should consider the following poisons:

	- botulinium
	- formaldehyde
	- hemlock


Your conditional statements should modify the following antidotes:

	- antivenom
	- beta_blocker
	- opioids


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	+=
	-=

*/

//Declare the poison variables
var botulinium;
var formaldehyde;
var hemlock;

//Declare the antidote variables
var antivenom;
var beta_blocker;
var opioids;

//This variable is used for drawing the graph
var graphs;

function setup() {
  createCanvas(800, 600);
  strokeWeight(2);

  //initialise the poisons and antidotes
  botulinium = 0.5;
  formaldehyde = 0.5;
  hemlock = 0.5;
  antivenom = 0.5;
  beta_blocker = 0.5;
  opioids = 0.5;

  //fills the graph with empty values
  graphs = [];

  for (var i = 0; i < 3; i++) {
    graphs.push([]);
    for (var j = 0; j < 512; j++) {
      graphs[i].push(0.5);
    }
  }
}

function draw() {
  //Develop the antidote below
  //Write conditional statements to change the amount of each substance ...

  // If botulinium goes above 0.56, reduce antivenom by 0.03
  if (botulinium > 0.56) {
    antivenom -= 0.03;
  }

  // If hemlock dips below 0.71, raise antivenom by 0.05

  if (hemlock < 0.71) {
    antivenom += 0.05;
  }

  // When formaldehyde goes above 0.28, decrease beta_blocker by 0.04
  if (formaldehyde > 0.28) {
    beta_blocker -= 0.04;
  }

  // If hemlock dips below 0.49, increase beta_blocker by 0.05
  if (hemlock < 0.49) {
    beta_blocker += 0.05;
  }

  // When hemlock goes above 0.39, decrease opioids by 0.04
  if (hemlock > 0.39) {
    opioids -= 0.04;
  }

  // When formaldehyde goes above 0.32, increase opioids by 0.05
  if (formaldehyde > 0.32) {
    opioids += 0.05;
  }

  //////////////////////////////////////////////////////

  //the code below generates new values using random numbers

  /*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

  botulinium = nextValue(graphs[0], botulinium);
  formaldehyde = nextValue(graphs[1], formaldehyde);
  hemlock = nextValue(graphs[2], hemlock);

  antivenom = constrain(antivenom, 0, 1);
  beta_blocker = constrain(beta_blocker, 0, 1);
  opioids = constrain(opioids, 0, 1);

  ///////// DO NOT CHANGE THE CODE BELOW ///////////

  //drawing code

  // set background
  background(0);
  noFill();

  //draw the graphs for the vitals
  var colors = [
    color(255, 0, 0),
    color(0, 255, 0),
    color(0, 0, 255),
    color(255, 0, 255),
    color(255, 255, 0),
    color(0, 255, 255),
  ];

  for (var i = 0; i < graphs.length; i++) {
    stroke(colors[i]);
    drawGraph(graphs[i]);
  }

  //draw the poisons as text
  noStroke();
  fill(colors[0]);
  text("botulinium: " + nf(botulinium, 1, 2), 20, 20);
  fill(colors[1]);
  text("formaldehyde: " + nf(formaldehyde, 1, 2), 20, 40);
  fill(colors[2]);
  text("hemlock: " + nf(hemlock, 1, 2), 20, 60);

  //draw the antidotes bar chart
  drawBar(antivenom, 50, "antivenom");
  drawBar(beta_blocker, 200, "beta_blocker");
  drawBar(opioids, 350, "opioids");
}

function nextValue(graph, val) {
  //gets the next value for a vital and puts it in an array for drawing
  var delta = random(-0.03, 0.03);

  val += delta;
  if (val > 1 || val < 0) {
    delta *= -1;
    val += delta * 2;
  }

  graph.push(val);
  graph.shift();
  return val;
}

function drawGraph(graph) {
  //draws an array as a graph
  beginShape();
  for (var i = 0; i < graph.length; i++) {
    vertex((width * i) / 512, height * 0.5 - (graph[i] * height) / 3);
  }
  endShape();
}

function drawBar(val, x, name) {
  //draws the bars for bar chart
  noStroke();
  fill(0, 100, 100);
  var mh = height * 0.4 - 50;
  rect(x, height - 50 - val * mh, 100, val * mh);
  fill(255);
  text(name + ": " + val, x, height - 20);
}
