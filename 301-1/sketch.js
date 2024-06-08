/*
The case of the Python Syndicate
Stage 2




- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Rocky Kray

- The variables for Rocky Kray have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Rocky Kray
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Rocky Kray variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Rocky Kray 
- Do not add any additional commands

*/

var photoBoard;
var pawelKarpinskiImage;
var robbieKrayImage;
var bonesKarpinskiImage;
var countessHamiltonImage;
var rockyKrayImage;
var annaKarpinskiImage;

var rockyKrayPositionX = 408;
var rockyKrayPositionY = 309;

function preload() {
  photoBoard = loadImage("photoBoard.png");
  pawelKarpinskiImage = loadImage("karpinskiBros2.png");
  robbieKrayImage = loadImage("krayBrothers2.png");
  bonesKarpinskiImage = loadImage("karpinskiDog.png");
  countessHamiltonImage = loadImage("countessHamilton.png");
  rockyKrayImage = loadImage("krayBrothers1.png");
  annaKarpinskiImage = loadImage("karpinskiWoman.png");
}

function setup() {
  createCanvas(photoBoard.width, photoBoard.height);
}

function draw() {
  image(photoBoard, 0, 0);

  //And update these image commands with your x and y coordinates.
  image(rockyKrayImage, rockyKrayPositionX, rockyKrayPositionY);

  image(
    pawelKarpinskiImage,
    rockyKrayPositionX - 293,
    rockyKrayPositionY - 269
  );
  image(robbieKrayImage, rockyKrayPositionX, rockyKrayPositionY - 269);
  image(
    bonesKarpinskiImage,
    rockyKrayPositionX + 293,
    rockyKrayPositionY - 269
  );
  image(countessHamiltonImage, rockyKrayPositionX - 293, rockyKrayPositionY);
  image(annaKarpinskiImage, rockyKrayPositionX + 293, rockyKrayPositionY);
}
