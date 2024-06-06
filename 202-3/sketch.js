/*



Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Olive filled text with a Chocolate outline in Melissa font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload() {
  Ballpointprint = loadFont("Ballpointprint.ttf");
  Melissa = loadFont("Melissa.otf");
  Diggity = loadFont("Diggity.ttf");
  RonsFont = loadFont("RonsFont.ttf");
}

function setup() {
  createCanvas(507, 342);
  textSize(20);
}

function draw() {
  background(255);

  fill(139, 69, 19);
  stroke(0, 191, 255);
  textFont(Melissa);
  //   text("Are", 39, 81);
  fill(255, 99, 71);
  stroke(165, 42, 42);
  textFont(Diggity);
  //   text("I'm", 264, 122);
  fill(138, 43, 226);
  stroke(46, 139, 87);
  textFont(RonsFont);
  //   text("how", 351, 122);
  fill(255, 0, 255);
  stroke(154, 205, 50);
  //   text("away", 347, 81);
  fill(148, 0, 211);
  textFont(Ballpointprint);
  //   text("these", 157, 60);
  fill(233, 150, 122);
  stroke(25, 25, 112);
  //   text("you", 63, 81);
  push();
  fill(205, 133, 63);
  stroke(255, 255, 0);
  //   text("are", 60, 122);
  pop();
  stroke(218, 165, 32);
  //   text("no", 54, 60);
  push();
  fill(139, 0, 139);
  stroke(0, 206, 209);
  textFont(Melissa);
  //   text("of", 260, 101);
  pop();
  fill(25, 25, 112);
  textFont(Diggity);
  //   text("?", 82, 142);
  fill(218, 165, 32);
  stroke(178, 34, 34);
  //   text("Bob,", 72, 20);
  push();
  fill(154, 205, 50);
  stroke(0, 128, 0);
  textFont(Melissa);
  //   text("avoiding", 95, 81);
  pop();
  fill(255, 165, 0);
  textFont(Melissa);
  //   text("You", 36, 122);
  fill(0, 128, 128);
  stroke(50, 205, 50);
  textFont(Ballpointprint);
  //   text("?", 17, 81);
  fill(144, 238, 144);
  stroke(75, 0, 130);
  textFont(Melissa);
  //   text("a", 417, 81);
  push();
  fill(199, 21, 133);
  stroke(139, 0, 0);
  //   text("Forever", 8, 182);
  pop();
  fill(34, 139, 34);
  textFont(Ballpointprint);
  //   text("Are", 159, 101);
  fill(250, 128, 114);
  stroke(148, 0, 211);
  //   text("continual", 208, 60);
  fill(34, 139, 34);
  stroke(178, 34, 34);
  //   text("short", 218, 101);
  fill(178, 34, 34);
  stroke(46, 139, 87);
  textFont(Melissa);
  //   text("so,", 358, 101);
  fill(0, 128, 0);
  stroke(139, 0, 139);
  textFont(Diggity);
  //   text("silence.", 234, 142);
  fill(0, 255, 255);
  stroke(50, 205, 50);
  textFont(Melissa);
  //   text("I", 8, 60);
  push();
  fill(30, 144, 255);
  stroke(127, 255, 0);
  textFont(RonsFont);
  //   text("break", 429, 81);
  pop();
  stroke(0, 0, 128);
  textFont(Diggity);
  //   text("can", 8, 142);
  push();
  fill(255, 215, 0);
  stroke(154, 205, 50);
  textFont(Melissa);
  //   text("our", 342, 60);
  pop();
  stroke(34, 139, 34);
  textFont(RonsFont);
  //   text("The", 97, 142);
  fill(72, 209, 204);
  stroke(0, 139, 139);
  textFont(Melissa);
  //   text("not", 290, 122);
  fill(154, 205, 50);
  stroke(255, 0, 0);
  textFont(RonsFont);
  //   text("so", 93, 122);
  fill(148, 0, 211);
  stroke(0, 128, 128);
  textFont(Diggity);
  //   text("If", 341, 101);
  fill(0, 250, 154);
  stroke(139, 0, 0);
  textFont(RonsFont);
  //   text("can", 19, 60);
  push();
  fill(135, 206, 250);
  stroke(0, 250, 154);
  textFont(Melissa);
  //   text("?", 330, 101);
  pop();
  stroke(0, 100, 0);
  textFont(Diggity);
  //   text("longer", 78, 60);
  fill(0, 128, 128);
  stroke(0, 128, 128);
  textFont(Ballpointprint);
  //   text("?", 172, 81);
  fill(128, 128, 0);
  stroke(255, 0, 0);
  textFont(Melissa);
  //   text("My", 11, 20);
  fill(72, 209, 204);
  stroke(32, 178, 170);
  textFont(RonsFont);
  //   text("yours,", 53, 182);
  fill(178, 34, 34);
  stroke(0, 100, 0);
  //   text("guarded", 116, 122);
  fill(244, 164, 96);
  stroke(0, 0, 139);
  textFont(Melissa);
  //   text("darling", 33, 20);
  push();
  fill(147, 112, 219);
  stroke(199, 21, 133);
  textFont(Diggity);
  //   text("more", 430, 122);
  pop();
  fill(0, 0, 255);
  textFont(Ballpointprint);
  //   text("Is", 312, 60);
  fill(173, 216, 230);
  stroke(139, 0, 139);
  textFont(Diggity);
  //   text("sometimes.", 190, 122);
  fill(240, 230, 140);
  stroke(0, 255, 255);
  textFont(Ballpointprint);
  //   text("relationship", 363, 60);
  push();
  fill(64, 224, 208);
  stroke(34, 139, 34);
  textFont(Diggity);
  //   text("and", 12, 101);
  pop();
  fill(139, 0, 0);
  stroke(107, 142, 35);
  textFont(RonsFont);
  //   text("take", 38, 142);
  fill(123, 104, 238);
  stroke(0, 191, 255);
  //   text("can", 404, 101);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  textFont(Ballpointprint);
  //   text("much", 388, 122);
  fill(165, 42, 42);
  stroke(0, 255, 127);
  //   text("money", 277, 101);
  fill(65, 105, 225);
  stroke(128, 0, 0);
  //   text("me", 141, 81);
  fill(0, 0, 205);
  stroke(148, 0, 211);
  textFont(RonsFont);
  //   text("s,", 180, 142);
  push();
  fill(128, 0, 128);
  stroke(128, 0, 0);
  textFont(Diggity);
  //   text("send", 439, 101);
  pop();
  fill(0, 128, 128);
  stroke(0, 100, 0);
  textFont(Diggity);
  //   text("x", 47, 222);
  fill(64, 224, 208);
  stroke(32, 178, 170);
  //   text("sort", 43, 101);
  fill(255, 0, 255);
  stroke(128, 128, 0);
  textFont(Melissa);
  //   text("you", 196, 101);
  fill(0, 128, 0);
  stroke(255, 0, 0);
  textFont(Diggity);
  //   text("Daisy", 7, 222);
  fill(32, 178, 170);
  stroke(0, 128, 128);
  //   text("we", 244, 81);
  fill(255, 99, 71);
  stroke(25, 25, 112);
  textFont(Ballpointprint);
  //   text("sure", 313, 122);
  push();
  fill(30, 144, 255);
  stroke(32, 178, 170);
  //   text("out.", 128, 101);
  pop();
  fill(0, 206, 209);
  stroke(139, 0, 0);
  textFont(Melissa);
  //   text("this", 78, 101);
  fill(0, 0, 255);
  stroke(128, 0, 128);
  //   text("delays.", 271, 60);
  fill(240, 128, 128);
  stroke(0, 255, 127);
  textFont(RonsFont);
  //   text("secret", 127, 142);
  fill(0, 128, 0);
  stroke(199, 21, 133);
  textFont(Ballpointprint);
  //   text("the", 199, 142);
  fill(128, 128, 0);
  stroke(210, 105, 30);
  textFont(Melissa);
  text("ignore", 121, 60);
  text("go", 330, 81);
  text("cash", 5, 122);
  fill(124, 252, 0);
  stroke(0, 191, 255);
  textFont(Ballpointprint);
  //   text("I", 380, 101);
  fill(222, 184, 135);
  stroke(160, 82, 45);
  //   text("all", 104, 101);
  fill(255, 215, 0);
  stroke(0, 250, 154);
  textFont(Melissa);
  //   text("Perhaps", 194, 81);
  fill(30, 144, 255);
  stroke(255, 140, 0);
  //   text("I", 470, 122);
  fill(128, 128, 0);
  stroke(210, 105, 30);
  text("for", 395, 81);
  text("safe", 448, 60);
  push();
  fill(107, 142, 35);
  stroke(0, 0, 255);
  textFont(RonsFont);
  //   text("should", 271, 81);
  pop();
}
