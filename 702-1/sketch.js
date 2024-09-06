/*

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of SleuthPI_Car and the cars in
carObject_array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveVehicle() {
  /*
	This function should do the following: 
	 - increment SleuthPI_Car's Kms_Amt property by its Gas_Val property 
	 - add a random amount between -0.1 and 0.1 to SleuthPI_Car's Shudder_Amt property
	 - use the constrain function to constrain SleuthPI_Car's Shudder_Amt property to values between 0.03 and 0.9
	 - call the runCar_engine function passing SleuthPI_Car as an argument
	*/

  SleuthPI_Car.Kms_Amt += SleuthPI_Car.Gas_Val;
  SleuthPI_Car.Shudder_Amt += random(-0.1, 0.1);
  SleuthPI_Car.Shudder_Amt = constrain(SleuthPI_Car.Shudder_Amt, 0.03, 0.9);
  runCar_engine(SleuthPI_Car);
}

function crossLanes(car) {
  /*
	This function should do the following: 
	 - move car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePos_a and LanePos_b to effect the change.
	 - finally you should return car at the end of the function.
	 hint: You will need to modify the X_Coordinate property of car.
	*/

  if (car.X_Coordinate == LanePos_a) car.X_Coordinate = LanePos_b;
  else car.X_Coordinate = LanePos_a;

  return car;
}

function checkCarIsAhead(car_obj_a, car_obj_b) {
  /*
	This function should do the following: 
	 - determine if car_obj_a is in the same lane and less than 200px behind car_obj_b.
	 - do this by comparing the two cars' Kms_Amt properties
	 - if these requirements are met then return the Licence_Plate property for car_obj_b. Otherwise return false.
	*/
  if (
    car_obj_a.X_Coordinate == car_obj_b.X_Coordinate &&
    car_obj_a.Kms_Amt < car_obj_b.Kms_Amt &&
    car_obj_b.Kms_Amt - car_obj_a.Kms_Amt < 200
  ) {
    return car_obj_b.Licence_Plate;
  } else {
    return false;
  }
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var SleuthPI_Car;

var roadWidth;
var roadLeftEdge;
var LanePos_a;
var LanePos_b;
var carImages = {};

var carObject_array = [
  {
    X_Coordinate: 300,
    Y_Coordinate: 0,
    Kms_Amt: -200,
    Car_Type: "redCar",
    Licence_Plate: "DZ6RFL",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 300,
    Y_Coordinate: 0,
    Kms_Amt: 200,
    Car_Type: "whiteCar",
    Licence_Plate: "DTPCOM",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 300,
    Y_Coordinate: 0,
    Kms_Amt: 600,
    Car_Type: "whiteCar",
    Licence_Plate: "LZU4MV",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 500,
    Y_Coordinate: 0,
    Kms_Amt: 1000,
    Car_Type: "whiteCar",
    Licence_Plate: "466EKK",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 500,
    Y_Coordinate: 0,
    Kms_Amt: 1400,
    Car_Type: "whiteCar",
    Licence_Plate: "OX2YT7",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 500,
    Y_Coordinate: 0,
    Kms_Amt: 1800,
    Car_Type: "redCar",
    Licence_Plate: "CD1D75",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 300,
    Y_Coordinate: 0,
    Kms_Amt: 2200,
    Car_Type: "greenCar",
    Licence_Plate: "9CX343",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 500,
    Y_Coordinate: 0,
    Kms_Amt: 2600,
    Car_Type: "redCar",
    Licence_Plate: "U2VYFY",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 500,
    Y_Coordinate: 0,
    Kms_Amt: 3000,
    Car_Type: "whiteCar",
    Licence_Plate: "YI64TY",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 300,
    Y_Coordinate: 0,
    Kms_Amt: 3400,
    Car_Type: "whiteCar",
    Licence_Plate: "22ZP6Z",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 300,
    Y_Coordinate: 0,
    Kms_Amt: 3800,
    Car_Type: "blueCar",
    Licence_Plate: "HSNVWJ",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 500,
    Y_Coordinate: 0,
    Kms_Amt: 4200,
    Car_Type: "greenCar",
    Licence_Plate: "CWWI6I",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 500,
    Y_Coordinate: 0,
    Kms_Amt: 4600,
    Car_Type: "greenCar",
    Licence_Plate: "SNW8FB",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 500,
    Y_Coordinate: 0,
    Kms_Amt: 5000,
    Car_Type: "whiteCar",
    Licence_Plate: "16UONQ",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 500,
    Y_Coordinate: 0,
    Kms_Amt: 5400,
    Car_Type: "blueCar",
    Licence_Plate: "RI66WP",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 300,
    Y_Coordinate: 0,
    Kms_Amt: 5800,
    Car_Type: "redCar",
    Licence_Plate: "HAXLMC",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 500,
    Y_Coordinate: 0,
    Kms_Amt: 6200,
    Car_Type: "redCar",
    Licence_Plate: "V2CZJ5",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 500,
    Y_Coordinate: 0,
    Kms_Amt: 6600,
    Car_Type: "blueCar",
    Licence_Plate: "PZY67P",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 300,
    Y_Coordinate: 0,
    Kms_Amt: 7000,
    Car_Type: "whiteCar",
    Licence_Plate: "J2ACGP",
    Gas_Val: 2,
    exhaust: [],
  },
  {
    X_Coordinate: 300,
    Y_Coordinate: 0,
    Kms_Amt: 7400,
    Car_Type: "blueCar",
    Licence_Plate: "3ROKNE",
    Gas_Val: 2,
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

  roadWidth = 400;
  roadLeftEdge = 200;
  LanePos_a = 300;
  LanePos_b = 500;

  SleuthPI_Car = {
    X_Coordinate: roadLeftEdge + roadWidth / 4,
    Y_Coordinate: 550,
    Kms_Amt: 0,
    Gas_Val: 3,
    Shudder_Amt: 0,
    Car_Type: "detective",
    Licence_Plate: "5L3UTH",
    exhaust: [],
  };
}

function draw() {
  background(0);

  drawRoad();
  drawCars();

  ////////////////////// HANDLE DETECTIVE /////////////////////////

  moveVehicle();
  for (var i = 0; i < carObject_array.length; i++) {
    var b2b = checkCarIsAhead(SleuthPI_Car, carObject_array[i]);
    if (b2b) crossLanes(SleuthPI_Car);
  }

  //////////////////////HANDLE THE OTHER CARS//////////////////////

  for (var i = 0; i < carObject_array.length; i++) {
    carObject_array[i].Kms_Amt += carObject_array[i].Gas_Val;
    carObject_array[i].Y_Coordinate =
      SleuthPI_Car.Y_Coordinate -
      carObject_array[i].Kms_Amt +
      SleuthPI_Car.Kms_Amt;
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
      i * 100 + (SleuthPI_Car.Kms_Amt % 100),
      roadLeftEdge + roadWidth / 2,
      i * 100 + 70 + (SleuthPI_Car.Kms_Amt % 100)
    );
  }
}

function drawCars() {
  //draw the detective car

  image;
  drawExhaust(SleuthPI_Car);
  image(
    carImages["detective"],
    SleuthPI_Car.X_Coordinate -
      carImages["detective"].width / 2 +
      random(-SleuthPI_Car.Shudder_Amt, SleuthPI_Car.Shudder_Amt),
    SleuthPI_Car.Y_Coordinate +
      random(-SleuthPI_Car.Shudder_Amt, SleuthPI_Car.Shudder_Amt)
  );

  //draw all other cars

  for (var i = 0; i < carObject_array.length; i++) {
    if (
      carObject_array[i].Y_Coordinate < height &&
      carObject_array[i].Y_Coordinate > -height / 2
    ) {
      image(
        carImages[carObject_array[i].Car_Type],
        carObject_array[i].X_Coordinate -
          carImages[carObject_array[i].Car_Type].width / 2,
        carObject_array[i].Y_Coordinate
      );
      runCar_engine(carObject_array[i]);

      drawExhaust(carObject_array[i]);
    }
  }
}

function runCar_engine(car) {
  car.exhaust.push({
    size: 2,
    x: car.X_Coordinate,
    y: car.Y_Coordinate + carImages[car.Car_Type].height,
  });

  for (var i = car.exhaust.length - 1; i >= 0; i--) {
    car.exhaust[i].y += max(0.75, car.Gas_Val / 3);
    if (car.Car_Type != "detective")
      car.exhaust[i].y += SleuthPI_Car.Gas_Val - car.Gas_Val;
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
