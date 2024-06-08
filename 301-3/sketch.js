/*
The case of the Python Syndicate
Stage 4


To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var annaKarpinskiImg;
var cecilKarpinskiImg;
var robbieKrayImg;
var adaLovelaceImg;
var pawelKarpinskiImg;
var rockyKrayImg;

var cecilKarpinskiObject;

//declare your new objects below
var annaKarpinskiObject;
var robbieKrayObject;
var adaLovelaceObject;
var pawelKarpinskiObject;
var rockyKrayObject;

function preload() {
  photoBoard = loadImage("photoBoard.png");
  annaKarpinskiImg = loadImage("karpinskiWoman.png");
  cecilKarpinskiImg = loadImage("karpinskiBros1.png");
  robbieKrayImg = loadImage("krayBrothers2.png");
  adaLovelaceImg = loadImage("ada.png");
  pawelKarpinskiImg = loadImage("karpinskiBros2.png");
  rockyKrayImg = loadImage("krayBrothers1.png");
}

function setup() {
  createCanvas(photoBoard.width, photoBoard.height);
  cecilKarpinskiObject = {
    x: 408,
    y: 40,
    image: cecilKarpinskiImg,
  };

  //define your new objects below
  annaKarpinskiObject = {
    x: 115,
    y: 40,
    image: annaKarpinskiImg,
  };

  robbieKrayObject = {
    x: 701,
    y: 40,
    image: robbieKrayImg,
  };

  adaLovelaceObject = {
    x: 115,
    y: 309,
    image: adaLovelaceImg,
  };

  pawelKarpinskiObject = {
    x: 408,
    y: 309,
    image: pawelKarpinskiImg,
  };

  rockyKrayObject = {
    x: 701,
    y: 309,
    image: rockyKrayImg,
  };
}

function draw() {
  image(photoBoard, 0, 0);

  //And update these image commands with your x and y coordinates.
  image(
    annaKarpinskiObject.image,
    annaKarpinskiObject.x,
    annaKarpinskiObject.y
  );
  image(
    cecilKarpinskiObject.image,
    cecilKarpinskiObject.x,
    cecilKarpinskiObject.y
  );
  image(robbieKrayObject.image, robbieKrayObject.x, robbieKrayObject.y);
  image(adaLovelaceObject.image, adaLovelaceObject.x, adaLovelaceObject.y);
  image(
    pawelKarpinskiObject.image,
    pawelKarpinskiObject.x,
    pawelKarpinskiObject.y
  );
  image(rockyKrayObject.image, rockyKrayObject.x, rockyKrayObject.y);
}
