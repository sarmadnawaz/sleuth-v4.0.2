/*


Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a white car with a Number_Plate of SH4CYD.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of Chase_Car and the cars in
trafficObjects_array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function drive_car() {
  /*
	This function should do the following: 
	 - increment Chase_Car's Miles_Driven property by its Speed_Value property 
	 - add a random amount between -0.09 and 0.09 to Chase_Car's EngineRumble_Amount property
	 - use the constrain function to constrain Chase_Car's EngineRumble_Amount property to values between 0.02 and 0.98
	 - call the cycle_carMotor function passing Chase_Car as an argument
	*/

  Chase_Car.Miles_Driven += Chase_Car.Speed_Value;
  Chase_Car.EngineRumble_Amount += random(-0.09, 0.09);
  Chase_Car.EngineRumble_Amount = constrain(
    Chase_Car.EngineRumble_Amount,
    0.02,
    0.98
  );
  cycle_carMotor(Chase_Car);
}

function switch_lanes(targetCar) {
  /*
	This function should do the following: 
	 - move targetCar from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lane_pos_a and lane_pos_b to effect the change.
	 - finally you should return targetCar at the end of the function.
	 hint: You will need to modify the Coordinate_X property of targetCar.
	*/

  if (targetCar.Coordinate_X == lane_pos_a) targetCar.Coordinate_X = lane_pos_b;
  else targetCar.Coordinate_X = lane_pos_a;

  return targetCar;
}

function check_isInfront(targetCar) {
  /*
	This function should do the following: 
	 - determine if targetCar is in the same lane and less than 200px behind any of the cars in trafficObjects_array.
	 - do this by traversing trafficObjects_array and comparing each car's Miles_Driven property to that of targetCar.
	 - use the Number_Plate property of each car to ignore cars that match targetCar.
	 - if you find a car that matches these requirements then return the index representing the car's position in trafficObjects_array. Otherwise return false.
	*/

  for (var i = 0; i < trafficObjects_array.length; i++) {
    if (
      targetCar.Coordinate_X == trafficObjects_array[i].Coordinate_X &&
      targetCar.Miles_Driven < trafficObjects_array[i].Miles_Driven &&
      trafficObjects_array[i].Miles_Driven - targetCar.Miles_Driven < 200 &&
      trafficObjects_array[i].Number_Plate != targetCar.Number_Plate
    ) {
      return i;
    }
  }
}

function checkCar_parallel(carObj) {
  /*
	This function should do the following: 
	 - determine if carObj is parallel with Chase_Car.
	 - if carObj is found to be parallel to Chase_Car then return the Number_Plate property of carObj.
	 - cars are considered parallel if the absolute difference between their Miles_Driven properties is less than 25 px and they have non-matching Coordinate_X properties	*/

  if (
    abs(Chase_Car.Miles_Driven - carObj.Miles_Driven) < 25 &&
    Chase_Car.Coordinate_X != carObj.Coordinate_X
  ) {
    return carObj.Number_Plate;
  }
}

function identify_criminal() {
  /*
	This function should do the following: 
	 - Check cars passing parallel to Chase_Car to see if they match the Number_Plate property in the criminal description.
	 - it does this by traversing trafficObjects_array and calling checkCar_parallel for each car
.	 - if a positive result is returned then the Number_Plate property of the found car is then checked against the criminal description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/

  for (var i = 0; i < trafficObjects_array.length; i++) {
    if (checkCar_parallel(trafficObjects_array[i]) == "SH4CYD") {
      return trafficObjects_array[i];
    }
  }
  return false;
}

function chase_criminal() {
  /*
	This function should do the following: 
	 - only operate if the Tailing_Criminal property of Chase_Car is true and the global variable criminal is assigned to an object.
	 - scale the Speed_Value property of Chase_Car by a factor of 1.001.
	 - use the min function to make sure that Chase_Car's Speed_Value property does not exceed 6.
	 - it should call check_isInfront to detect any cars in front of Chase_Car.
	 - if a positive result is returned it should check to see if the Number_Plate property of that car matches that of criminal.
	 - for a match, pullOver_criminal should be called, otherwise call switch_lanes.
	*/

  if (Chase_Car.Tailing_Criminal && criminal) {
    Chase_Car.Speed_Value = min(Chase_Car.Speed_Value * 1.001, 6);
    var b2b = check_isInfront(Chase_Car);
    if (b2b) {
      if (
        trafficObjects_array[b2b].Number_Plate == criminal.Number_Plate &&
        trafficObjects_array[b2b].Miles_Driven - Chase_Car.Miles_Driven < 200
      ) {
        pullOver_criminal();
      } else {
        switch_lanes(Chase_Car);
      }
    }
  }
}

function pullOver_criminal() {
  /*
	This function should do the following: 
	 - set the isApprehended property of criminal to true.
	 - set the IsApprehending_Criminal property of Chase_Car to true.
	 - set the Speed_Value properties of both vehicles to zero.
	*/

  criminal.isApprehended = true;
  Chase_Car.IsApprehending_Criminal = true;
  Chase_Car.Speed_Value = 0;
  criminal.Speed_Value = 0;
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Chase_Car;

var roadWidth;
var roadLeftEdge;
var lane_pos_a;
var lane_pos_b;
var carImages = {};
var criminal;

var trafficObjects_array = [
  {
    Coordinate_X: 500,
    Coordinate_Y: 0,
    Miles_Driven: -200,
    Vehicle_Category: "blueCar",
    Number_Plate: "VMOUEI",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 500,
    Coordinate_Y: 0,
    Miles_Driven: 200,
    Vehicle_Category: "blueCar",
    Number_Plate: "EZRUVH",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 500,
    Coordinate_Y: 0,
    Miles_Driven: 600,
    Vehicle_Category: "whiteCar",
    Number_Plate: "ZJNJSD",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 300,
    Coordinate_Y: 0,
    Miles_Driven: 1000,
    Vehicle_Category: "greenCar",
    Number_Plate: "AAR2TY",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 300,
    Coordinate_Y: 0,
    Miles_Driven: 1400,
    Vehicle_Category: "redCar",
    Number_Plate: "CZ8KY2",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 300,
    Coordinate_Y: 0,
    Miles_Driven: 1800,
    Vehicle_Category: "whiteCar",
    Number_Plate: "EHJNFP",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 300,
    Coordinate_Y: 0,
    Miles_Driven: 2200,
    Vehicle_Category: "whiteCar",
    Number_Plate: "JOGOWI",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 500,
    Coordinate_Y: 0,
    Miles_Driven: 2600,
    Vehicle_Category: "greenCar",
    Number_Plate: "RQG4FW",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 500,
    Coordinate_Y: 0,
    Miles_Driven: 3000,
    Vehicle_Category: "redCar",
    Number_Plate: "DYWA96",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 500,
    Coordinate_Y: 0,
    Miles_Driven: 3400,
    Vehicle_Category: "whiteCar",
    Number_Plate: "SH4CYD",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 300,
    Coordinate_Y: 0,
    Miles_Driven: 3800,
    Vehicle_Category: "greenCar",
    Number_Plate: "KAASTH",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 500,
    Coordinate_Y: 0,
    Miles_Driven: 4200,
    Vehicle_Category: "whiteCar",
    Number_Plate: "O6JIAD",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 500,
    Coordinate_Y: 0,
    Miles_Driven: 4600,
    Vehicle_Category: "blueCar",
    Number_Plate: "GPVCOM",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 500,
    Coordinate_Y: 0,
    Miles_Driven: 5000,
    Vehicle_Category: "redCar",
    Number_Plate: "OMK4J5",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 500,
    Coordinate_Y: 0,
    Miles_Driven: 5400,
    Vehicle_Category: "greenCar",
    Number_Plate: "9PXLBU",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 300,
    Coordinate_Y: 0,
    Miles_Driven: 5800,
    Vehicle_Category: "whiteCar",
    Number_Plate: "4H5OOU",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 300,
    Coordinate_Y: 0,
    Miles_Driven: 6200,
    Vehicle_Category: "blueCar",
    Number_Plate: "X0CJ7G",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 300,
    Coordinate_Y: 0,
    Miles_Driven: 6600,
    Vehicle_Category: "blueCar",
    Number_Plate: "TO93OM",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 500,
    Coordinate_Y: 0,
    Miles_Driven: 7000,
    Vehicle_Category: "blueCar",
    Number_Plate: "ZY9KI6",
    Speed_Value: 2,
    exhaust: [],
  },
  {
    Coordinate_X: 500,
    Coordinate_Y: 0,
    Miles_Driven: 7400,
    Vehicle_Category: "greenCar",
    Number_Plate: "6PL76W",
    Speed_Value: 2,
    exhaust: [],
  },
];

function preload() {
  var carTypes = ["detective", "redCar", "greenCar", "blueCar", "whiteCar"];

  for (var i = 0; i < carTypes.length; i++) {
    carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
  }
}

function setup() {
  createCanvas(800, 800);
  textSize(30);
  textAlign(CENTER);

  roadWidth = 400;
  roadLeftEdge = 200;
  lane_pos_a = 300;
  lane_pos_b = 500;

  Chase_Car = {
    Coordinate_X: roadLeftEdge + roadWidth / 4,
    Coordinate_Y: 550,
    Miles_Driven: 0,
    Speed_Value: 3,
    EngineRumble_Amount: 0,
    Vehicle_Category: "detective",
    Number_Plate: "5L3UTH",
    IsApprehending_Criminal: false,
    Tailing_Criminal: false,
    exhaust: [],
  };
}

function draw() {
  background(0);

  drawRoad();
  drawCars();

  if (criminal) {
    if (criminal.isApprehended) {
      fill(255);

      text("criminal isApprehended!", width / 2, height / 2);
    }
  }

  ////////////////////// HANDLE DETECTIVE /////////////////////////

  if (!Chase_Car.Tailing_Criminal && !Chase_Car.IsApprehending_Criminal) {
    drive_car();
    var b2b = check_isInfront(Chase_Car);
    if (b2b) switch_lanes(Chase_Car);
    var a = identify_criminal();
    if (a != false) criminal = a;
    if (criminal) Chase_Car.Tailing_Criminal = true;
  } else if (!Chase_Car.IsApprehending_Criminal) {
    chase_criminal();
    drive_car();
  }

  ////////////////////// HANDLE ASSAILANT /////////////////////////

  if (criminal) {
    if (!criminal.isApprehended) {
      criminal.Speed_Value = 5;
      var b2b = check_isInfront(criminal);
      if (b2b) {
        if (b2b.Number_Plate != criminal.Number_Plate) {
          switch_lanes(criminal);
        }
      }
    }
  }

  //////////////////////HANDLE THE OTHER CARS//////////////////////

  for (var i = 0; i < trafficObjects_array.length; i++) {
    trafficObjects_array[i].Miles_Driven += trafficObjects_array[i].Speed_Value;
    trafficObjects_array[i].Coordinate_Y =
      Chase_Car.Coordinate_Y -
      trafficObjects_array[i].Miles_Driven +
      Chase_Car.Miles_Driven;

    if (criminal) {
      if (criminal.isApprehended) {
        if (trafficObjects_array[i].Coordinate_X == Chase_Car.Coordinate_X) {
          if (trafficObjects_array[i].Miles_Driven < Chase_Car.Miles_Driven) {
            if (
              trafficObjects_array[i].Miles_Driven - Chase_Car.Miles_Driven <
              200
            ) {
              switch_lanes(trafficObjects_array[i]);
            }
          }
        }
      }
    }
  }
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad() {
  stroke(100);
  fill(50);
  rect(roadLeftEdge, 0, roadWidth, 800);
  stroke(255);

  for (var i = -1; i < 20; i++) {
    line(
      roadLeftEdge + roadWidth / 2,
      i * 100 + (Chase_Car.Miles_Driven % 100),
      roadLeftEdge + roadWidth / 2,
      i * 100 + 70 + (Chase_Car.Miles_Driven % 100)
    );
  }
}

function drawCars() {
  //draw the detective car

  drawExhaust(Chase_Car);
  image(
    carImages["detective"],
    Chase_Car.Coordinate_X -
      carImages["detective"].width / 2 +
      random(-Chase_Car.EngineRumble_Amount, Chase_Car.EngineRumble_Amount),
    Chase_Car.Coordinate_Y +
      random(-Chase_Car.EngineRumble_Amount, Chase_Car.EngineRumble_Amount)
  );

  //draw all other cars

  for (var i = 0; i < trafficObjects_array.length; i++) {
    if (
      trafficObjects_array[i].Coordinate_Y < height &&
      trafficObjects_array[i].Coordinate_Y > -height / 2
    ) {
      image(
        carImages[trafficObjects_array[i].Vehicle_Category],
        trafficObjects_array[i].Coordinate_X -
          carImages[trafficObjects_array[i].Vehicle_Category].width / 2,
        trafficObjects_array[i].Coordinate_Y
      );
      cycle_carMotor(trafficObjects_array[i]);

      drawExhaust(trafficObjects_array[i]);
    }
  }
}

function cycle_carMotor(car) {
  car.exhaust.push({
    size: 2,
    x: car.Coordinate_X,
    y: car.Coordinate_Y + carImages[car.Vehicle_Category].height,
  });

  for (var i = car.exhaust.length - 1; i >= 0; i--) {
    car.exhaust[i].y += max(0.75, car.Speed_Value / 3);
    if (car.Vehicle_Category != "detective")
      car.exhaust[i].y += Chase_Car.Speed_Value - car.Speed_Value;
    car.exhaust[i].x += random(-1, 1);
    car.exhaust[i].size += 0.5;

    if (car.exhaust[i].y > height || car.exhaust[i].y < 0) {
      car.exhaust.splice(i, 1);
    }
  }
}

function drawExhaust(car) {
  noStroke();
  for (var i = 0; i < car.exhaust.length; i++) {
    var alpha = map(car.exhaust[i].size, 0, 40, 50, 0);
    fill(125, alpha);
    ellipse(car.exhaust[i].x + 20, car.exhaust[i].y, car.exhaust[i].size);
  }
}
