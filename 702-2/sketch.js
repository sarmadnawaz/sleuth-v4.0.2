/*


Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a white car with a licence_plate of 04X4P6. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of detective_carObject and the cars in
Car_Array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function DriveVehicle() {
  /*
	This function should do the following: 
	 - increment detective_carObject's distance_amnt property by its accel_value property 
	 - add a random amount between -0.09 and 0.09 to detective_carObject's engineRumble_value property
	 - use the constrain function to constrain detective_carObject's engineRumble_value property to values between 0.04 and 1.16
	 - call the TurnoverCarMotor function passing detective_carObject as an argument
	*/

  detective_carObject.distance_amnt += detective_carObject.accel_value;
  detective_carObject.engineRumble_value += random(-0.09, 0.09);
  detective_carObject.engineRumble_value = constrain(
    detective_carObject.engineRumble_value,
    0.04,
    1.16
  );
  TurnoverCarMotor(detective_carObject);
}

function ChangeLanes(target_vehicle) {
  /*
	This function should do the following: 
	 - move target_vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_pos_A and Lane_pos_B to effect the change.
	 - finally you should return target_vehicle at the end of the function.
	 hint: You will need to modify the position_x property of target_vehicle.
	*/

  if (target_vehicle.position_x == Lane_pos_A)
    target_vehicle.position_x = Lane_pos_B;
  else target_vehicle.position_x = Lane_pos_A;

  return target_vehicle;
}

function CheckIsAhead(Car_A, Car_B) {
  /*
	This function should do the following: 
	 - determine if Car_A is in the same lane and less than 200px behind Car_B.
	 - do this by comparing the two cars' distance_amnt properties
	 - if these requirements are met then return true. Otherwise return false.
	*/

  if (
    abs(Car_A.distance_amnt - Car_B.distance_amnt) < 200 &&
    Car_A.position_x == Car_B.position_x &&
    Car_A.distance_amnt < Car_B.distance_amnt
  ) {
    return true;
  } else {
    return false;
  }
}

function CheckCarAtSide(TargetVehicle_A, TargetVehicle_B) {
  /*
	This function should do the following: 
	 - determine if TargetVehicle_A is parallel with TargetVehicle_B.
	 - if TargetVehicle_A is found to be parallel to TargetVehicle_B then return TargetVehicle_B.
	 - cars are considered parallel if the absolute difference between their distance_amnt properties is less than 25 px and they have non-matching position_x properties	*/

  if (
    abs(TargetVehicle_A.distance_amnt - TargetVehicle_B.distance_amnt) < 25 &&
    TargetVehicle_A.position_x != TargetVehicle_B.position_x
  ) {
    return TargetVehicle_B;
  } else {
    return false;
  }
}

function DetectCriminal() {
  /*
	This function should do the following: 
	 - Check cars passing parallel to detective_carObject to see if they match the licence_plate property in the criminal description.
	 - it does this by traversing Car_Array and calling CheckCarAtSide for each car
.	 - if a positive result is returned then the licence_plate property of the found car is then checked against the criminal description.
	 - if a match is found then the car in question is assigned to the global variable criminal.
	*/

  for (var i = 0; i < Car_Array.length; i++) {
    var car = CheckCarAtSide(detective_carObject, Car_Array[i]);
    if (car) {
      if (car.licence_plate == "04X4P6") {
        criminal = car;
      }
    }
  }
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var detective_carObject;

var roadWidth;
var roadLeftEdge;
var Lane_pos_A;
var Lane_pos_B;
var carImages = {};
var criminal;

var Car_Array = [
  {
    position_x: 300,
    position_y: 0,
    distance_amnt: -200,
    car_variety: "blueCar",
    licence_plate: "EDVV5Y",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    distance_amnt: 200,
    car_variety: "whiteCar",
    licence_plate: "RPD9BM",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    distance_amnt: 600,
    car_variety: "whiteCar",
    licence_plate: "9TY3P7",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    distance_amnt: 1000,
    car_variety: "greenCar",
    licence_plate: "Z9JS0W",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    distance_amnt: 1400,
    car_variety: "redCar",
    licence_plate: "K8JEJ0",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    distance_amnt: 1800,
    car_variety: "whiteCar",
    licence_plate: "04X4P6",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    distance_amnt: 2200,
    car_variety: "blueCar",
    licence_plate: "DGTBML",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    distance_amnt: 2600,
    car_variety: "greenCar",
    licence_plate: "21ZRNQ",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    distance_amnt: 3000,
    car_variety: "redCar",
    licence_plate: "KZ80AJ",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    distance_amnt: 3400,
    car_variety: "blueCar",
    licence_plate: "MZQRCV",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    distance_amnt: 3800,
    car_variety: "greenCar",
    licence_plate: "XAA0CZ",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    distance_amnt: 4200,
    car_variety: "greenCar",
    licence_plate: "TQ8QGB",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    distance_amnt: 4600,
    car_variety: "greenCar",
    licence_plate: "F3FRTX",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    distance_amnt: 5000,
    car_variety: "redCar",
    licence_plate: "8DJJPQ",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    distance_amnt: 5400,
    car_variety: "whiteCar",
    licence_plate: "BSGGVX",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    distance_amnt: 5800,
    car_variety: "redCar",
    licence_plate: "ZXZPAD",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    distance_amnt: 6200,
    car_variety: "whiteCar",
    licence_plate: "15IRWT",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    distance_amnt: 6600,
    car_variety: "blueCar",
    licence_plate: "RHDF2P",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    distance_amnt: 7000,
    car_variety: "whiteCar",
    licence_plate: "ZJLRRB",
    accel_value: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    distance_amnt: 7400,
    car_variety: "blueCar",
    licence_plate: "NJBX9K",
    accel_value: 2,
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
  Lane_pos_A = 300;
  Lane_pos_B = 500;

  detective_carObject = {
    position_x: roadLeftEdge + roadWidth / 4,
    position_y: 550,
    distance_amnt: 0,
    accel_value: 3,
    engineRumble_value: 0,
    car_variety: "detective",
    licence_plate: "5L3UTH",
    exhaust: [],
  };
}

function draw() {
  background(0);

  drawRoad();
  drawCars();

  if (criminal) {
    fill(255);

    text("criminal found !", width / 2, height / 2);
    return;
  }

  ////////////////////// HANDLE DETECTIVE /////////////////////////

  DriveVehicle();
  for (var i = 0; i < Car_Array.length; i++) {
    var b2b = CheckIsAhead(detective_carObject, Car_Array[i]);
    if (b2b) ChangeLanes(detective_carObject);
  }
  DetectCriminal();

  //////////////////////HANDLE THE OTHER CARS//////////////////////

  for (var i = 0; i < Car_Array.length; i++) {
    Car_Array[i].distance_amnt += Car_Array[i].accel_value;
    Car_Array[i].position_y =
      detective_carObject.position_y -
      Car_Array[i].distance_amnt +
      detective_carObject.distance_amnt;
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
      i * 100 + (detective_carObject.distance_amnt % 100),
      roadLeftEdge + roadWidth / 2,
      i * 100 + 70 + (detective_carObject.distance_amnt % 100)
    );
  }
}

function drawCars() {
  //draw the detective car

  image;
  drawExhaust(detective_carObject);
  image(
    carImages["detective"],
    detective_carObject.position_x -
      carImages["detective"].width / 2 +
      random(
        -detective_carObject.engineRumble_value,
        detective_carObject.engineRumble_value
      ),
    detective_carObject.position_y +
      random(
        -detective_carObject.engineRumble_value,
        detective_carObject.engineRumble_value
      )
  );

  //draw all other cars

  for (var i = 0; i < Car_Array.length; i++) {
    if (
      Car_Array[i].position_y < height &&
      Car_Array[i].position_y > -height / 2
    ) {
      image(
        carImages[Car_Array[i].car_variety],
        Car_Array[i].position_x - carImages[Car_Array[i].car_variety].width / 2,
        Car_Array[i].position_y
      );
      TurnoverCarMotor(Car_Array[i]);

      drawExhaust(Car_Array[i]);
    }
  }
}

function TurnoverCarMotor(car) {
  car.exhaust.push({
    size: 2,
    x: car.position_x,
    y: car.position_y + carImages[car.car_variety].height,
  });

  for (var i = car.exhaust.length - 1; i >= 0; i--) {
    car.exhaust[i].y += max(0.75, car.accel_value / 3);
    if (car.car_variety != "detective")
      car.exhaust[i].y += detective_carObject.accel_value - car.accel_value;
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
