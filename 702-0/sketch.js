/*


Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of sleuthPI_car to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function DriveVehicle()
{
	/*
	This function should do the following: 
	 - increment sleuthPI_car's distance_amnt property by its gas_value property 
	 - add a random amount between -0.01 and 0.01 to sleuthPI_car's vibrate_value property
	 - use the constrain function to constrain sleuthPI_car's vibrate_value property to values between 0.03 and 0.78
	 - call the CycleCar_engine function passing sleuthPI_car as an argument
	*/

	sleuthPI_car.distance_amnt += sleuthPI_car.gas_value;
	sleuthPI_car.vibrate_value += random(-0.01,0.01);
	sleuthPI_car.vibrate_value = constrain(sleuthPI_car.vibrate_value, 0.03, 0.78);
	CycleCar_engine(sleuthPI_car);
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPI_car;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	sleuthPI_car = 
	{
		x: roadLeftEdge + roadWidth/4,
		y: 300,
		distance_amnt: 0,
		gas_value: 3,
		vibrate_value: 0,
		car_type: 'detective',
		licence_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	DriveVehicle();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthPI_car.distance_amnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthPI_car.distance_amnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuthPI_car);
	image
	(
		carImages["detective"],
		sleuthPI_car.x - carImages["detective"].width/2 + random(-sleuthPI_car.vibrate_value, sleuthPI_car.vibrate_value),
		sleuthPI_car.y + random(-sleuthPI_car.vibrate_value, sleuthPI_car.vibrate_value)
	);

}

function CycleCar_engine(car)
{

	car.exhaust.push({size: 2, x: car.x, y: car.y + carImages[car.car_type].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gas_value/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
