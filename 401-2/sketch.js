/*



Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When AmanitaMushrooms goes above 0.46 and insecticide dips below 0.25, try decreasing chalk by 0.01
	- If mercury dips below 0.64, lead dips below 0.67, and also cyanide dips below 0.31, raise chalk by 0.01
	- When AmanitaMushrooms goes above 0.45 and mercury goes above 0.61, or on the other hand, cyanide dips below 0.4, reduce BetaBlocker by 0.02
	- If either lead dips below 0.6, polonium goes above 0.43, or perhaps insecticide goes above 0.73, raise BetaBlocker by 0.03
	- When cyanide goes above 0.71 and insecticide dips below 0.54, try decreasing glucagon by 0.04
	- If mercury dips below 0.46 or lead goes above 0.55, increment glucagon by 0.01
	- When mercury dips below 0.62 or AmanitaMushrooms goes above 0.66, reduce antivenom by 0.04
	- If either polonium dips below 0.65, cyanide goes above 0.67, or perhaps insecticide goes above 0.38, raise antivenom by 0.02


Your conditional statements should consider the following poisons:

	- mercury
	- polonium
	- cyanide
	- lead
	- insecticide
	- AmanitaMushrooms


Your conditional statements should modify the following antidotes:

	- chalk
	- BetaBlocker
	- glucagon
	- antivenom


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var mercury;
var polonium;
var cyanide;
var lead;
var insecticide;
var AmanitaMushrooms;

//Declare the antidote variables
var chalk;
var BetaBlocker;
var glucagon;
var antivenom;

//This variable is used for drawing the graph
var graphs;

function setup() {
  createCanvas(800, 600);
  strokeWeight(2);

  //initialise the poisons and antidotes
  mercury = 0.5;
  polonium = 0.5;
  cyanide = 0.5;
  lead = 0.5;
  insecticide = 0.5;
  AmanitaMushrooms = 0.5;
  chalk = 0.5;
  BetaBlocker = 0.5;
  glucagon = 0.5;
  antivenom = 0.5;

  //fills the graph with empty values
  graphs = [];

  for (var i = 0; i < 6; i++) {
    graphs.push([]);
    for (var j = 0; j < 512; j++) {
      graphs[i].push(0.5);
    }
  }
}

function draw() {
  //Develop the antidote below
  //Write conditional statements to change the amount of each substance ...

  if (AmanitaMushrooms > 0.46 && insecticide < 0.25) {
    chalk -= 0.01;
  }

  if (mercury < 0.64 && lead < 0.67 && cyanide < 0.31) {
    chalk += 0.01;
  }

  if ((AmanitaMushrooms > 0.45 && mercury > 0.61) || cyanide < 0.4) {
    BetaBlocker -= 0.02;
  }

  if (lead < 0.6 || polonium > 0.43 || insecticide > 0.73) {
    BetaBlocker += 0.03;
  }

  if (cyanide > 0.71 && insecticide < 0.54) {
    glucagon -= 0.04;
  }

  if (mercury < 0.46 || lead > 0.55) {
    glucagon += 0.01;
  }

  if (mercury < 0.62 || AmanitaMushrooms > 0.66) {
    antivenom -= 0.04;
  }

  if (polonium < 0.65 || cyanide > 0.67 || insecticide > 0.38) {
    antivenom += 0.02;
  }

  //////////////////////////////////////////////////////

  //the code below generates new values using random numbers

  /*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

  mercury = nextValue(graphs[0], mercury);
  polonium = nextValue(graphs[1], polonium);
  cyanide = nextValue(graphs[2], cyanide);
  lead = nextValue(graphs[3], lead);
  insecticide = nextValue(graphs[4], insecticide);
  AmanitaMushrooms = nextValue(graphs[5], AmanitaMushrooms);

  chalk = constrain(chalk, 0, 1);
  BetaBlocker = constrain(BetaBlocker, 0, 1);
  glucagon = constrain(glucagon, 0, 1);
  antivenom = constrain(antivenom, 0, 1);

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
  text("mercury: " + nf(mercury, 1, 2), 20, 20);
  fill(colors[1]);
  text("polonium: " + nf(polonium, 1, 2), 20, 40);
  fill(colors[2]);
  text("cyanide: " + nf(cyanide, 1, 2), 20, 60);
  fill(colors[3]);
  text("lead: " + nf(lead, 1, 2), 20, 80);
  fill(colors[4]);
  text("insecticide: " + nf(insecticide, 1, 2), 20, 100);
  fill(colors[5]);
  text("AmanitaMushrooms: " + nf(AmanitaMushrooms, 1, 2), 20, 120);

  //draw the antidotes bar chart
  drawBar(chalk, 50, "chalk");
  drawBar(BetaBlocker, 200, "BetaBlocker");
  drawBar(glucagon, 350, "glucagon");
  drawBar(antivenom, 500, "antivenom");
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
