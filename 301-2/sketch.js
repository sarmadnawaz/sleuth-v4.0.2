/*
The case of the Python Syndicate
Stage 3



Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Countess Hamilton has been declared and initialised
- Position each mugshot relative to Countess Hamilton
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Countess Hamilton object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Countess Hamilton 
- Do not add any additional commands

*/

var photoBoard;
var robbieKrayImg;
var annaKarpinskiImg;
var countessHamiltonImg;
var pawelKarpinskiImg;
var bonesKarpinskiImg;
var adaLovelaceImg;

var countessHamiltonObject;

function preload() {
  photoBoard = loadImage("photoBoard.png");
  robbieKrayImg = loadImage("krayBrothers2.png");
  annaKarpinskiImg = loadImage("karpinskiWoman.png");
  countessHamiltonImg = loadImage("countessHamilton.png");
  pawelKarpinskiImg = loadImage("karpinskiBros2.png");
  bonesKarpinskiImg = loadImage("karpinskiDog.png");
  adaLovelaceImg = loadImage("ada.png");
}

function setup() {
  createCanvas(photoBoard.width, photoBoard.height);
  countessHamiltonObject = {
    x: 701,
    y: 40,
    image: countessHamiltonImg,
  };
}

function draw() {
  image(photoBoard, 0, 0);

  //And update these image commands with your x and y coordinates.
  image(
    countessHamiltonObject.image,
    countessHamiltonObject.x,
    countessHamiltonObject.y
  );

  image(
    robbieKrayImg,
    countessHamiltonObject.x - 586,
    countessHamiltonObject.y
  );
  image(
    annaKarpinskiImg,
    countessHamiltonObject.x - 293,
    countessHamiltonObject.y
  );
  image(
    pawelKarpinskiImg,
    countessHamiltonObject.x - 586,
    countessHamiltonObject.y + 269
  );
  image(
    bonesKarpinskiImg,
    countessHamiltonObject.x - 293,
    countessHamiltonObject.y + 269
  );
  image(
    adaLovelaceImg,
    countessHamiltonObject.x,
    countessHamiltonObject.y + 269
  );
}
