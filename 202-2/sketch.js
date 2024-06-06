/*



Case 202 - The case of Bob and Daisy - stage 3

Wow these two like to ham it up. Here’s the next letter. This time it’s from Bob (aka. Jobs).
I need you to decode it to uncover more details about their plan.

Discover the hidden code by commenting out all text commands except
those which produce Blue Violet filled text in RonsFont font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var Ballpointprint;
var Melissa;
var Diggity;
var RonsFont;

function preload() {
  Ballpointprint = loadFont("Ballpointprint.ttf");
  Melissa = loadFont("Melissa.otf");
  Diggity = loadFont("Diggity.ttf");
  RonsFont = loadFont("RonsFont.ttf");
}

function setup() {
  createCanvas(612, 670);
  textSize(33);
}

function draw() {
  background(255);

  fill(178, 34, 34);
  textFont(Ballpointprint);
  // text("in", 426,245);
  fill(0, 100, 0);
  textFont(Melissa);
  // text("kisses,", 115,500);
  textFont(Diggity);
  // text("sh", 533,135);
  fill(176, 224, 230);
  textFont(Ballpointprint);
  // text("Upon", 321,135);
  fill(50, 205, 50);
  textFont(RonsFont);
  // text("I", 14,99);
  fill(255, 215, 0);
  textFont(Melissa);
  // text("th", 273,135);
  fill(107, 142, 35);
  textFont(Diggity);
  // text("Do", 445,284);
  fill(0, 255, 255);
  textFont(Melissa);
  // text("eam", 209,245);
  fill(255, 127, 80);
  textFont(Diggity);
  // text("from", 177,135);
  fill(100, 149, 237);
  textFont(RonsFont);
  // text("at", 482,364);
  fill(0, 255, 127);
  textFont(Diggity);
  // text("by", 239,284);
  fill(0, 0, 205);
  textFont(Ballpointprint);
  // text("to", 269,434);
  fill(220, 20, 60);
  textFont(Diggity);
  // text("Daisy,", 138,33);
  fill(255, 255, 0);
  textFont(RonsFont);
  // text("no", 16,169);
  fill(255, 140, 0);
  textFont(Melissa);
  // text("urn", 449,135);
  fill(238, 232, 170);
  textFont(Ballpointprint);
  // text("raising", 349,324);
  fill(0, 0, 139);
  textFont(Melissa);
  // text("is.", 293,135);
  fill(0, 191, 255);
  // text("dr", 190,245);
  textFont(Diggity);
  // text("!", 125,324);
  fill(139, 69, 19);
  // text("Jer", 16,364);
  fill(127, 255, 212);
  // text("counting", 245,99);
  fill(138, 43, 226);
  textFont(RonsFont);
  text("the", 525, 364);
  text("gun", 185, 99);
  fill(153, 50, 204);
  textFont(Melissa);
  // text("every", 406,208);
  fill(152, 251, 152);
  textFont(RonsFont);
  // text("my", 502,397);
  fill(0, 139, 139);
  textFont(Ballpointprint);
  // text("run", 159,434);
  // text("I", 119,397);
  fill(65, 105, 225);
  textFont(Diggity);
  // text("not", 485,284);
  fill(100, 149, 237);
  // text("walks", 355,245);
  fill(127, 255, 212);
  textFont(Melissa);
  // text("until", 537,99);
  // text("ight", 17,434);
  fill(186, 85, 211);
  textFont(Ballpointprint);
  // text("be", 298,324);
  fill(178, 34, 34);
  textFont(Melissa);
  // text("car", 551,397);
  fill(0, 100, 0);
  textFont(Diggity);
  // text("we", 214,324);
  fill(154, 205, 50);
  textFont(RonsFont);
  // text("at", 363,208);
  fill(72, 209, 204);
  // text("love", 254,169);
  fill(173, 255, 47);
  textFont(Ballpointprint);
  // text("st", 112,208);
  fill(138, 43, 226);
  textFont(RonsFont);
  text("hidden", 314, 169);
  text("at", 522, 324);
  fill(238, 232, 170);
  // text("our", 290,245);
  fill(240, 128, 128);
  textFont(Melissa);
  // text("jump", 418,397);
  fill(139, 0, 139);
  textFont(Ballpointprint);
  // text("all", 323,208);
  fill(154, 205, 50);
  textFont(Melissa);
  // text("ret", 420,135);
  fill(124, 252, 0);
  textFont(Ballpointprint);
  // text("down", 412,364);
  fill(0, 206, 209);
  // text("devotion", 184,208);
  fill(222, 184, 135);
  // text("too", 43,99);
  fill(255, 165, 0);
  textFont(Diggity);
  // text("rys", 48,364);
  fill(0, 128, 0);
  textFont(Ballpointprint);
  // text("opportunity.", 19,245);
  textFont(Diggity);
  // text("so", 205,397);
  fill(0, 206, 209);
  textFont(Melissa);
  // text("Bob", 8,566);
  fill(255, 69, 0);
  textFont(RonsFont);
  // text("be", 156,99);
  fill(0, 255, 127);
  textFont(Ballpointprint);
  // text("down", 340,99);
  fill(128, 0, 0);
  textFont(Melissa);
  // text("Love", 18,500);
  fill(144, 238, 144);
  textFont(Ballpointprint);
  // text("broadca", 27,208);
  fill(218, 112, 214);
  textFont(Melissa);
  // text("old", 314,284);
  fill(173, 216, 230);
  textFont(Ballpointprint);
  // text("We", 402,169);
  fill(139, 0, 0);
  textFont(Melissa);
  // text("r", 8,434);
  fill(250, 128, 114);
  textFont(Ballpointprint);
  // text("ovely", 62,33);
  // text("shooters", 306,364);
  fill(240, 230, 140);
  textFont(Diggity);
  // text("all", 242,135);
  fill(128, 0, 128);
  textFont(Melissa);
  // text("now", 60,434);
  fill(199, 21, 133);
  // text("and", 77,500);
  fill(184, 134, 11);
  // text("the", 276,284);
  fill(178, 34, 34);
  textFont(Diggity);
  // text("all", 554,135);
  fill(255, 0, 0);
  // text("toasts", 440,324);
  fill(184, 134, 11);
  // text("Oh", 18,33);
  fill(75, 0, 130);
  textFont(Melissa);
  // text("x", 49,566);
  fill(0, 191, 255);
  textFont(Ballpointprint);
  // text("sh", 459,169);
  fill(165, 42, 42);
  // text("get", 48,135);
  fill(135, 206, 235);
  textFont(Melissa);
  // text("our", 148,208);
  fill(138, 43, 226);
  textFont(RonsFont);
  text("down", 157, 284);
  text("arcade", 12, 397);
  fill(147, 112, 219);
  textFont(Ballpointprint);
  // text("you.", 305,434);
  fill(199, 21, 133);
  textFont(Melissa);
  // text("can", 10,135);
  textFont(Ballpointprint);
  // text("I", 150,245);
  fill(139, 0, 0);
  textFont(RonsFont);
  // text("in", 468,397);
  // text("to", 374,397);
  fill(0, 206, 209);
  textFont(Ballpointprint);
  // text("days", 467,99);
  fill(0, 250, 154);
  textFont(Melissa);
  // text("our", 218,169);
  fill(255, 215, 0);
  textFont(Diggity);
  // text("back", 207,434);
  fill(218, 112, 214);
  // text("and", 106,284);
  fill(255, 255, 0);
  textFont(Ballpointprint);
  // text("Soon", 143,324);
  fill(255, 215, 0);
  // text("all", 483,169);
  fill(176, 224, 230);
  textFont(Melissa);
  // text("my", 386,135);
  fill(233, 150, 122);
  textFont(Ballpointprint);
  // text("despair", 25,324);
  // text("and", 102,434);
  textFont(Melissa);
  // text("wine", 94,364);
  fill(124, 252, 0);
  textFont(Diggity);
  // text("away", 106,135);
  fill(255, 215, 0);
  textFont(Ballpointprint);
  // text("woods", 27,284);
  // text("and", 180,364);
  fill(123, 104, 238);
  textFont(Melissa);
  // text("I", 580,99);
  fill(205, 133, 63);
  textFont(Diggity);
  // text("harbour.", 347,284);
  // text("of", 253,245);
  fill(160, 82, 45);
  textFont(Melissa);
  // text("playing", 237,364);
  // text("will", 260,324);
  fill(144, 238, 144);
  textFont(RonsFont);
  // text("the", 463,245);
  fill(123, 104, 238);
  // text("tempted", 240,397);
  textFont(Ballpointprint);
  // text("the", 410,99);
  fill(255, 127, 80);
  textFont(RonsFont);
  // text("have", 89,99);
  // text("we", 483,135);
  fill(210, 105, 30);
  textFont(Melissa);
  // text("to", 294,208);
  textFont(RonsFont);
  // text("longer", 58,169);
  fill(255, 165, 0);
  // text("keep", 149,169);
  fill(210, 105, 30);
  textFont(Ballpointprint);
  // text("am", 159,397);
  fill(148, 0, 211);
  textFont(Melissa);
  // text("bar", 143,364);
  fill(139, 69, 19);
  textFont(Ballpointprint);
  // text("l", 57,33);
}
