/*


Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Pale Goldenrod text (see https://www.w3.org/TR/css3-iccprof#numerical). 
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload() {
  letterFont = loadFont("Ballpointprint.ttf");
}

function setup() {
  createCanvas(511, 597);
  textFont(letterFont);
  textSize(28);
}

function draw() {
  background(255);

  fill(147, 112, 219);
  //   text("since", 386, 84);
  fill(128, 128, 0);
  //   text("hear", 219, 172);
  fill(128, 0, 128);
  //   text("lovely", 57, 28);
  //   text("seconds", 369, 326);
  //   text("one", 216, 359);
  fill(218, 165, 32);
  //   text("and", 76, 415);
  fill(238, 232, 170);
  text("first", 72, 292);
  fill(0, 139, 139);
  //   text("from", 188, 326);
  fill(255, 165, 0);
  //   text("I", 265, 292);
  fill(255, 255, 0);
  //   text("am", 369, 234);
  fill(0, 0, 139);
  //   text("my", 188, 262);
  //   text("kisses,", 125, 415);
  fill(222, 184, 135);
  //   text("love.", 317, 359);
  //   text("I", 321, 202);
  fill(30, 144, 255);
  //   text("It", 162, 144);
  fill(153, 50, 204);
  //   text("few", 312, 326);
  fill(148, 0, 211);
  //   text("eyes.", 91, 144);
  fill(127, 255, 212);
  //   text("must", 355, 202);
  fill(219, 112, 147);
  //   text("You", 93, 262);
  fill(165, 42, 42);
  //   text("only", 204, 115);
  fill(205, 133, 63);
  //   text("saw", 299, 292);
  fill(153, 50, 204);
  //   text("lovely", 397, 292);
  fill(25, 25, 112);
  //   text("moment", 131, 292);
  //   text("I", 185, 172);
  fill(154, 205, 50);
  //   text("knew", 124, 326);
  fill(0, 250, 154);
  //   text("Ever", 323, 84);
  fill(255, 0, 255);
  //   text("of", 177, 202);
  //   text("x", 69, 471);
  //   text("face,", 23, 326);
  fill(255, 127, 80);
  //   text("were", 110, 359);
  fill(184, 134, 11);
  //   text("music", 114, 202);
  fill(238, 232, 170);
  text("date", 65, 115);
  text("April", 377, 262);
  text("is", 203, 144);
  fill(160, 82, 45);
  //   text("your", 278, 172);
  fill(255, 215, 0);
  //   text("I", 335, 234);
  //   text("?", 292, 84);
  fill(186, 85, 211);
  //   text("I", 299, 144);
  fill(250, 128, 114);
  //   text("you", 66, 359);
  fill(240, 230, 140);
  //   text("day", 294, 262);
  fill(128, 0, 0);
  //   text("I", 90, 326);
  //   text("darling,", 403, 115);
  //   text("my", 175, 359);
  fill(144, 238, 144);
  //   text("confession", 178, 84);
  //   text("your", 346, 292);
  fill(72, 209, 204);
  //   text("of", 315, 115);
  fill(255, 69, 0);
  //   text("alive", 223, 234);
  fill(255, 215, 0);
  //   text("that", 134, 172);
  fill(218, 112, 214);
  //   text("when", 234, 144);
  fill(255, 0, 255);
  //   text("sunny", 229, 262);
  fill(186, 85, 211);
  //   text("am", 333, 144);
  fill(100, 149, 237);
  //   text("our", 451, 84);
  fill(255, 105, 180);
  //   text("make", 103, 84);
  fill(219, 112, 147);
  //   text("in", 345, 262);
  //   text("can", 160, 115);
  //   text("person", 150, 234);
  fill(107, 142, 35);
  //   text("I", 69, 84);
  fill(123, 104, 238);
  //   text("like", 393, 172);
  fill(255, 140, 0);
  //   text("that", 214, 292);
  fill(250, 128, 114);
  //   text("the", 214, 202);
  fill(255, 105, 180);
  //   text("luck", 64, 234);
  fill(123, 104, 238);
  //   text("that", 15, 359);
  //   text("are", 141, 262);
  //   text("those", 246, 326);
  fill(255, 99, 71);
  //   text("voice", 329, 172);
  fill(32, 178, 170);
  //   text("iest", 97, 234);
  fill(34, 139, 34);
  //   text("your", 352, 115);
  fill(240, 128, 128);
  //   text("From", 435, 262);
  fill(152, 251, 152);
  //   text("May", 15, 84);
  //   text("Daisy,", 125, 28);
  //   text("quiet", 67, 172);
  fill(205, 133, 63);
  //   text("Oh", 15, 28);
  //   text("Love", 15, 415);
  //   text("your", 408, 234);
  fill(124, 252, 0);
  //   text("blessed", 19, 202);
  fill(0, 0, 255);
  //   text("that", 284, 234);
  fill(127, 255, 212);
  //   text("the", 18, 172);
  fill(186, 85, 211);
  //   text("the", 15, 234);
  fill(127, 255, 0);
  //   text("be", 409, 202);
  //   text("the", 445, 172);
  fill(178, 34, 34);
  //   text("alone", 372, 144);
  //   text("green", 16, 144);
  fill(135, 206, 250);
  //   text("Bob", 15, 471);
  fill(255, 99, 71);
  //   text("I", 126, 115);
  fill(238, 232, 170);
  text("chosen", 15, 262);
  text("a", 153, 84);
  fill(0, 0, 205);
  //   text("harp.", 263, 202);
  fill(127, 255, 212);
  //   text("think", 253, 115);
  fill(173, 255, 47);
  //   text("last", 20, 115);
  //   text("the", 23, 292);
  //   text("in", 434, 144);
  //   text("true", 264, 359);
}
