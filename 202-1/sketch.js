/*


Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Violet filled text with a Medium Blue outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload() {
  letterFont = loadFont("Melissa.otf");
}

function setup() {
  createCanvas(634, 484);
  textFont(letterFont);
  textSize(30);
}

function draw() {
  background(255);

  fill(255, 0, 0);
  stroke(0, 0, 255);
  // text("x", 60,374);
  fill(255, 127, 80);
  stroke(255, 0, 0);
  // text("at", 209,187);
  fill(0, 255, 127);
  stroke(218, 165, 32);
  // text("will", 446,217);
  fill(139, 69, 19);
  stroke(0, 191, 255);
  // text("again", 7,254);
  fill(218, 165, 32);
  stroke(32, 178, 170);
  // text("My", 7,30);
  fill(124, 252, 0);
  stroke(0, 250, 154);
  // text("yours,", 76,314);
  fill(238, 130, 238);
  stroke(0, 0, 205);
  text("store", 224, 217);
  text("side", 266, 187);
  text("at", 471, 120);
  fill(255, 140, 0);
  stroke(0, 100, 0);
  // text("you", 241,120);
  fill(30, 144, 255);
  stroke(0, 255, 127);
  // text("I", 45,154);
  fill(123, 104, 238);
  stroke(0, 0, 139);
  // text("my", 295,120);
  fill(160, 82, 45);
  stroke(0, 0, 255);
  // text("stare", 394,120);
  fill(72, 209, 204);
  stroke(148, 0, 211);
  // text("I'm", 246,154);
  fill(152, 251, 152);
  stroke(127, 255, 0);
  // text("desolate.", 486,187);
  fill(139, 0, 0);
  stroke(0, 206, 209);
  // text("sky,", 579,120);
  fill(139, 69, 19);
  stroke(218, 165, 32);
  // text("kissed", 47,120);
  fill(25, 25, 112);
  stroke(0, 255, 127);
  // text("onger", 59,217);
  fill(222, 184, 135);
  stroke(0, 100, 0);
  // text("your", 374,154);
  fill(250, 128, 114);
  stroke(0, 128, 0);
  // text("return.", 471,154);
  fill(135, 206, 250);
  stroke(0, 250, 154);
  // text("months", 437,90);
  fill(165, 42, 42);
  stroke(255, 140, 0);
  // text("I", 48,90);
  fill(64, 224, 208);
  stroke(107, 142, 35);
  // text("have", 154,217);
  fill(238, 130, 238);
  stroke(50, 205, 50);
  // text("ht", 554,120);
  fill(186, 85, 211);
  stroke(0, 191, 255);
  // text("miss", 64,90);
  fill(0, 128, 0);
  stroke(139, 69, 19);
  // text("I", 138,217);
  fill(135, 206, 235);
  stroke(25, 25, 112);
  // text("only", 144,154);
  fill(0, 206, 209);
  stroke(0, 128, 128);
  // text("long", 138,120);
  fill(255, 255, 0);
  stroke(124, 252, 0);
  // text("arms.", 326,120);
  fill(199, 21, 133);
  stroke(184, 134, 11);
  // text("darling", 40,30);
  fill(0, 255, 127);
  stroke(139, 0, 0);
  // text("last", 8,120);
  fill(250, 128, 114);
  stroke(165, 42, 42);
  // text("?", 378,217);
  fill(0, 0, 255);
  stroke(255, 69, 0);
  // text("you.", 209,154);
  fill(255, 99, 71);
  stroke(0, 128, 0);
  // text("is", 505,90);
  fill(255, 127, 80);
  stroke(255, 215, 0);
  // text("to", 198,217);
  fill(34, 139, 34);
  stroke(32, 178, 170);
  // text("you", 175,187);
  fill(32, 178, 170);
  stroke(128, 128, 0);
  // text("How", 565,187);
  fill(255, 127, 80);
  stroke(0, 128, 128);
  // text("and", 10,154);
  fill(148, 0, 211);
  stroke(128, 128, 0);
  // text("small", 344,187);
  fill(238, 130, 238);
  stroke(0, 0, 205);
  text("up", 447, 120);
  fill(135, 206, 250);
  stroke(0, 255, 127);
  // text("without", 104,187);
  fill(233, 150, 122);
  stroke(218, 165, 32);
  // text("banking", 280,154);
  fill(255, 0, 0);
  stroke(127, 255, 0);
  // text("feels", 439,187);
  fill(0, 255, 127);
  stroke(255, 69, 0);
  // text("Bob,", 100,30);
  fill(255, 99, 71);
  stroke(75, 0, 130);
  // text("I", 378,120);
  fill(72, 209, 204);
  stroke(255, 165, 0);
  // text("we", 594,90);
  fill(222, 184, 135);
  stroke(128, 128, 0);
  // text("do", 112,217);
  stroke(220, 20, 60);
  // text("this", 277,217);
  fill(173, 255, 47);
  stroke(0, 128, 128);
  // text("onging", 319,217);
  fill(222, 184, 135);
  stroke(124, 252, 0);
  // text("place.", 295,90);
  fill(238, 130, 238);
  stroke(0, 0, 128);
  // text("this", 305,187);
  fill(186, 85, 211);
  stroke(255, 215, 0);
  // text("When", 394,217);
  fill(199, 21, 133);
  stroke(255, 0, 255);
  // text("the", 261,90);
  fill(255, 69, 0);
  stroke(165, 42, 42);
  // text("I", 122,120);
  fill(255, 99, 71);
  stroke(50, 205, 50);
  // text("Even", 531,154);
  fill(250, 128, 114);
  stroke(32, 178, 170);
  // text("think", 96,154);
  fill(135, 206, 250);
  stroke(128, 0, 0);
  // text("to", 177,120);
  fill(0, 191, 255);
  stroke(139, 69, 19);
  // text("?", 57,254);
  fill(153, 50, 204);
  stroke(46, 139, 87);
  // text("How", 346,90);
  fill(233, 150, 122);
  stroke(0, 128, 128);
  // text("you", 167,90);
  fill(152, 251, 152);
  stroke(255, 140, 0);
  // text("?", 106,120);
  fill(135, 206, 235);
  stroke(218, 165, 32);
  // text("ng,", 73,187);
  fill(30, 144, 255);
  stroke(0, 0, 139);
  // text("having", 109,90);
  fill(153, 50, 204);
  stroke(184, 134, 11);
  // text("it", 526,90);
  fill(238, 130, 238);
  stroke(0, 0, 205);
  text("swift", 416, 154);
  text("hold", 203, 120);
  fill(30, 144, 255);
  stroke(0, 255, 127);
  // text("since", 546,90);
  fill(123, 104, 238);
  stroke(107, 142, 35);
  // text("of", 183,154);
  fill(152, 251, 152);
  stroke(255, 0, 255);
  // text("town", 391,187);
  fill(210, 105, 30);
  stroke(0, 100, 0);
  // text("on", 348,154);
  fill(127, 255, 212);
  stroke(128, 0, 0);
  // text("many", 387,90);
  fill(50, 205, 50);
  stroke(0, 255, 255);
  // text("Daisy", 7,374);
  fill(30, 144, 255);
  stroke(220, 20, 60);
  // text("united", 536,217);
  fill(100, 149, 237);
  stroke(255, 165, 0);
  // text("in", 576,154);
  fill(128, 0, 128);
  stroke(25, 25, 112);
  // text("my", 235,187);
  fill(100, 149, 237);
  stroke(124, 252, 0);
  // text("How", 7,90);
  fill(176, 224, 230);
  stroke(0, 0, 128);
  // text("be", 511,217);
  fill(255, 215, 0);
  stroke(153, 50, 204);
  // text("l", 56,217);
  fill(0, 255, 127);
  stroke(255, 255, 0);
  // text("Forever", 7,314);
  fill(240, 128, 128);
  stroke(220, 20, 60);
  // text("we", 479,217);
  fill(255, 105, 180);
  stroke(0, 255, 127);
  // text("in", 275,120);
  fill(255, 99, 71);
  stroke(218, 165, 32);
  // text("spri", 41,187);
  fill(75, 0, 130);
  stroke(184, 134, 11);
  // text("l", 316,217);
  fill(127, 255, 0);
  stroke(0, 250, 154);
  // text("much", 10,217);
  fill(255, 215, 0);
  stroke(165, 42, 42);
  // text("the", 497,120);
  fill(219, 112, 147);
  stroke(32, 178, 170);
  // text("nig", 531,120);
  fill(240, 230, 140);
  stroke(128, 0, 128);
  // text("can", 61,154);
  fill(0, 100, 0);
  stroke(0, 0, 128);
  // text("the", 7,187);
  fill(127, 255, 0);
  stroke(199, 21, 133);
  // text("around", 201,90);
}
