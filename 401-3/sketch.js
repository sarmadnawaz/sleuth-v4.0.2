/*


Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When Deadly_Nightshade goes above 0.32 or novichok dips below 0.64, whilst at the same time, hemlock goes above 0.27, decrement charcoal by 0.04
	- If chlorine dips below 0.63, ricin dips below 0.27, and also Snake_Venom dips below 0.75, increase charcoal by 0.05
	- If ricin goes above 0.5 and Snake_Venom dips below 0.7, or on the other hand, chlorine dips below 0.53, reduce methylene by 0.03
	- When hemlock goes above 0.38, whilst at the same time, novichok dips below 0.44 or Deadly_Nightshade dips below 0.39, increase methylene by 0.05
	- When either chlorine goes above 0.58, ricin dips below 0.74, or perhaps Snake_Venom goes above 0.39, decrease plasma by 0.05
	- When novichok goes above 0.47 and Deadly_Nightshade dips below 0.57, whilst at the same time, mercury dips below 0.5 or nerveGas goes above 0.49, try increasing plasma by 0.01
	- If novichok dips below 0.59, ricin dips below 0.57, chlorine dips below 0.58, and also nerveGas dips below 0.36, decrease protamine by 0.04
	- If mercury goes above 0.45, Deadly_Nightshade dips below 0.29, and also hemlock dips below 0.38, increase protamine by 0.01
	- If Deadly_Nightshade goes above 0.44 or novichok dips below 0.68, whilst at the same time, ricin goes above 0.63 or mercury goes above 0.59, try decreasing CalciumGluconate by 0.01
	- When Snake_Venom dips below 0.29 or chlorine dips below 0.73, whilst at the same time, nerveGas dips below 0.35 or hemlock goes above 0.68, raise CalciumGluconate by 0.02


Your conditional statements should consider the following poisons:

	- Snake_Venom
	- Deadly_Nightshade
	- ricin
	- novichok
	- hemlock
	- chlorine
	- mercury
	- nerveGas


Your conditional statements should modify the following antidotes:

	- charcoal
	- methylene
	- plasma
	- protamine
	- CalciumGluconate


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
var Snake_Venom;
var Deadly_Nightshade;
var ricin;
var novichok;
var hemlock;
var chlorine;
var mercury;
var nerveGas;

//Declare the antidote variables
var charcoal;
var methylene;
var plasma;
var protamine;
var CalciumGluconate;

//This variable is used for drawing the graph
var graphs;

function setup() {
  createCanvas(800, 600);
  strokeWeight(2);

  //initialise the poisons and antidotes
  Snake_Venom = 0.5;
  Deadly_Nightshade = 0.5;
  ricin = 0.5;
  novichok = 0.5;
  hemlock = 0.5;
  chlorine = 0.5;
  mercury = 0.5;
  nerveGas = 0.5;
  charcoal = 0.5;
  methylene = 0.5;
  plasma = 0.5;
  protamine = 0.5;
  CalciumGluconate = 0.5;

  //fills the graph with empty values
  graphs = [];

  for (var i = 0; i < 8; i++) {
    graphs.push([]);
    for (var j = 0; j < 512; j++) {
      graphs[i].push(0.5);
    }
  }
}

function draw() {
  //Develop the antidote below
  //Write conditional statements to change the amount of each substance ...

  if ((Deadly_Nightshade > 0.32 || novichok < 0.64) && hemlock > 0.27) {
    charcoal -= 0.04;
  }

  if (chlorine < 0.63 && ricin < 0.27 && Snake_Venom < 0.75) {
    charcoal += 0.05;
  }

  if ((ricin > 0.5 && Snake_Venom < 0.7) || chlorine < 0.53) {
    methylene -= 0.03;
  }

  if (hemlock > 0.38 && (novichok < 0.44 || Deadly_Nightshade < 0.39)) {
    methylene += 0.05;
  }

  if (chlorine > 0.58 || ricin < 0.74 || Snake_Venom > 0.39) {
    plasma -= 0.05;
  }

  if (
    novichok > 0.47 &&
    Deadly_Nightshade < 0.57 &&
    (mercury < 0.5 || nerveGas > 0.49)
  ) {
    plasma += 0.01;
  }

  if (novichok < 0.59 && ricin < 0.57 && chlorine < 0.58 && nerveGas < 0.36) {
    protamine -= 0.04;
  }

  if (mercury > 0.45 && Deadly_Nightshade < 0.29 && hemlock < 0.38) {
    protamine += 0.01;
  }

  if (
    (Deadly_Nightshade > 0.44 || novichok < 0.68) &&
    (ricin > 0.63 || mercury > 0.59)
  ) {
    CalciumGluconate -= 0.01;
  }

  if (
    (Snake_Venom < 0.29 || chlorine < 0.73) &&
    (nerveGas < 0.35 || hemlock > 0.68)
  ) {
    CalciumGluconate += 0.02;
  }

  //////////////////////////////////////////////////////

  //the code below generates new values using random numbers

  /*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

  Snake_Venom = nextValue(graphs[0], Snake_Venom);
  Deadly_Nightshade = nextValue(graphs[1], Deadly_Nightshade);
  ricin = nextValue(graphs[2], ricin);
  novichok = nextValue(graphs[3], novichok);
  hemlock = nextValue(graphs[4], hemlock);
  chlorine = nextValue(graphs[5], chlorine);
  mercury = nextValue(graphs[6], mercury);
  nerveGas = nextValue(graphs[7], nerveGas);

  charcoal = constrain(charcoal, 0, 1);
  methylene = constrain(methylene, 0, 1);
  plasma = constrain(plasma, 0, 1);
  protamine = constrain(protamine, 0, 1);
  CalciumGluconate = constrain(CalciumGluconate, 0, 1);

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
    color(255, 100, 100),
    color(255, 100, 0),
  ];

  for (var i = 0; i < graphs.length; i++) {
    stroke(colors[i]);
    drawGraph(graphs[i]);
  }

  //draw the poisons as text
  noStroke();
  fill(colors[0]);
  text("Snake_Venom: " + nf(Snake_Venom, 1, 2), 20, 20);
  fill(colors[1]);
  text("Deadly_Nightshade: " + nf(Deadly_Nightshade, 1, 2), 20, 40);
  fill(colors[2]);
  text("ricin: " + nf(ricin, 1, 2), 20, 60);
  fill(colors[3]);
  text("novichok: " + nf(novichok, 1, 2), 20, 80);
  fill(colors[4]);
  text("hemlock: " + nf(hemlock, 1, 2), 20, 100);
  fill(colors[5]);
  text("chlorine: " + nf(chlorine, 1, 2), 20, 120);
  fill(colors[6]);
  text("mercury: " + nf(mercury, 1, 2), 20, 140);
  fill(colors[7]);
  text("nerveGas: " + nf(nerveGas, 1, 2), 20, 160);

  //draw the antidotes bar chart
  drawBar(charcoal, 50, "charcoal");
  drawBar(methylene, 200, "methylene");
  drawBar(plasma, 350, "plasma");
  drawBar(protamine, 500, "protamine");
  drawBar(CalciumGluconate, 650, "CalciumGluconate");
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
