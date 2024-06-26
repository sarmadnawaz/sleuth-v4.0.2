/*



Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- When polonium dips below 0.63 and arsenic dips below 0.38, reduce plasma by 0.01
	- When strychnine dips below 0.61 or sarin dips below 0.33, increase plasma by 0.04
	- If polonium dips below 0.68 and arsenic goes above 0.59, try decreasing aspirin by 0.01
	- If sarin dips below 0.56, try increasing aspirin by 0.03
	- If polonium dips below 0.26 and strychnine goes above 0.59, decrement chalk by 0.05
	- When arsenic goes above 0.3 or sarin dips below 0.5, increase chalk by 0.02
	- If polonium goes above 0.66 and strychnine goes above 0.72, reduce hydrochloricAcid by 0.05
	- If arsenic goes above 0.59, raise hydrochloricAcid by 0.04


Your conditional statements should consider the following poisons:

	- polonium
	- sarin
	- arsenic
	- strychnine


Your conditional statements should modify the following antidotes:

	- plasma
	- aspirin
	- chalk
	- hydrochloricAcid


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var polonium;
var sarin;
var arsenic;
var strychnine;


//Declare the antidote variables
var plasma;
var aspirin;
var chalk;
var hydrochloricAcid;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	polonium = 0.5;
	sarin = 0.5;
	arsenic = 0.5;
	strychnine = 0.5;
	plasma = 0.5;
	aspirin = 0.5;
	chalk = 0.5;
	hydrochloricAcid = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

	// When polonium dips below 0.63 and arsenic dips below 0.38, reduce plasma by 0.01
	if (polonium < 0.63 && arsenic < 0.38)
	{
		plasma -= 0.01;
	}

	// When strychnine dips below 0.61 or sarin dips below 0.33, increase plasma by 0.04
	if (strychnine < 0.61 || sarin < 0.33)
	{
		plasma += 0.04;
	}

	// If polonium dips below 0.68 and arsenic goes above 0.59, try decreasing aspirin by 0.01
	if (polonium < 0.68 && arsenic > 0.59)
	{
		aspirin -= 0.01;
	}

	// If sarin dips below 0.56, try increasing aspirin by 0.03
	if (sarin < 0.56)
	{
		aspirin += 0.03;
	}

	// If polonium dips below 0.26 and strychnine goes above 0.59, decrement chalk by 0.05
	if (polonium < 0.26 && strychnine > 0.59)
	{
		chalk -= 0.05;
	}

	// When arsenic goes above 0.3 or sarin dips below 0.5, increase chalk by 0.02
	if (arsenic > 0.3 || sarin < 0.5)
	{
		chalk += 0.02;
	}

	// If polonium goes above 0.66 and strychnine goes above 0.72, reduce hydrochloricAcid by 0.05
	if (polonium > 0.66 && strychnine > 0.72)
	{
		hydrochloricAcid -= 0.05;
	}


	// If arsenic goes above 0.59, raise hydrochloricAcid by 0.04
	if (arsenic > 0.59)
	{
		hydrochloricAcid += 0.04;
	}

	




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	polonium = nextValue(graphs[0],polonium);
	sarin = nextValue(graphs[1],sarin);
	arsenic = nextValue(graphs[2],arsenic);
	strychnine = nextValue(graphs[3],strychnine);


	plasma = constrain(plasma, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	chalk = constrain(chalk, 0, 1);
	hydrochloricAcid = constrain(hydrochloricAcid, 0, 1);


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
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('polonium: ' + nf(polonium,1,2), 20,20);
	fill(colors[1]);
	text('sarin: ' + nf(sarin,1,2), 20,40);
	fill(colors[2]);
	text('arsenic: ' + nf(arsenic,1,2), 20,60);
	fill(colors[3]);
	text('strychnine: ' + nf(strychnine,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(plasma,50,'plasma');
	drawBar(aspirin,200,'aspirin');
	drawBar(chalk,350,'chalk');
	drawBar(hydrochloricAcid,500,'hydrochloricAcid');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
