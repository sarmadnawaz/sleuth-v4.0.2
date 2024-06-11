/*

Case 303 - The Case of the Crooked Attorney
Stage 1 - Torvalds' Office

District Attorney Torvalds is well respected in Console City as an upstanding citizen and
enforcer of the law. Of course he’s as crooked as they come. I’ve had enough of having our
hard work at Sleuth and Co undermined by his bribes and back-payments. Let’s take take this
sucker down. I happen to know that Torvalds keeps his incriminating documents spread amongst
several safes in town. I’ll need you to bend the rules a little by breaking into them and
retrieving the incriminating evidence.

The first safe is in Torvald’s office. Crack it by doing the following:

	When any key is pressed:
	- Make classified_vault_comb0 equal to 15

	Whilst the mouse is being dragged:
	- Make classified_vault_comb0 equal to 23

	Whilst the mouse is moving:
	- Make classified_vault_comb0 equal to 13

	When the mouse button is released:
	- Make classified_vault_comb0 equal to 0

	When any key is released:
	- Make classified_vault_comb1 equal to 4

	When the mouse button is released:
	- Make classified_vault_comb1 equal to 80

	When the mouse button is pressed:
	- Make classified_vault_comb1 equal to 89

	When any key is pressed:
	- Make classified_vault_comb1 equal to 0



There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !

*/

//declare the variables

var classified_vault_comb0;
var classified_vault_comb1;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	classified_vault_comb0 = 0;
	classified_vault_comb1 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Add your code to these events to open the safe ...

function mouseMoved()
{
	console.log("mouseMoved", mouseX, mouseY);
	classified_vault_comb0 = 13;
}

function mouseDragged()
{
	console.log("mouseDragged", mouseX, mouseY);
	classified_vault_comb0 = 23;
}

function mousePressed()
{
	console.log("mousePressed");
	classified_vault_comb1 = 89;
}

function mouseReleased()
{
	console.log("mouseReleased");
	classified_vault_comb0 = 0;
	classified_vault_comb1 = 80;
}

function keyPressed()
{
	console.log("keyPressed", key);
	classified_vault_comb0 = 15;
	classified_vault_comb1 = 0;
}

function keyReleased()
{
	console.log("keyReleased", key);
	classified_vault_comb1 = 4;
	
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{


	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dial
	push();
	translate(200,height/2);
	drawDial(200, classified_vault_comb0, 34);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(classified_vault_comb1);
	pop();

}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
