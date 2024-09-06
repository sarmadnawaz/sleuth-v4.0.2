/*
802 - The case of Monte Carlo
Stage 4 - Club criminal

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. They are challenging you to find a single card in the deck in just one cut.

- First write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers between 5 and 89.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

Now, the card you are looking for is stored in the cut_point object. You need to cut the deck at this exact location and the card sharks will be forced to give up their secrets.

- Write a function called cut_deck and call it from setup.
- This should search for card matching cut_point inside card_deck.
- Once you've found a match use the JavaScript splice() function to store the cut card and all the elements after from the card_deck array in the deckUptoCut array. 
- You'll need to break the loop once you've done as you don't want to keep searching.
- Finally reverse the elements in deckUptoCut so that the card we cut the deck at is the last element and not the first. 
	- Unfortunately, if we use JavaScript's inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. 


*/

var card_deck = [
  { suit: "Spades", number: "A" },
  { suit: "Spades", number: "2" },
  { suit: "Spades", number: "3" },
  { suit: "Spades", number: "4" },
  { suit: "Spades", number: "5" },
  { suit: "Spades", number: "6" },
  { suit: "Spades", number: "7" },
  { suit: "Spades", number: "8" },
  { suit: "Spades", number: "9" },
  { suit: "Spades", number: "10" },
  { suit: "Spades", number: "J" },
  { suit: "Spades", number: "Q" },
  { suit: "Spades", number: "K" },
  { suit: "Clubs", number: "A" },
  { suit: "Clubs", number: "2" },
  { suit: "Clubs", number: "3" },
  { suit: "Clubs", number: "4" },
  { suit: "Clubs", number: "5" },
  { suit: "Clubs", number: "6" },
  { suit: "Clubs", number: "7" },
  { suit: "Clubs", number: "8" },
  { suit: "Clubs", number: "9" },
  { suit: "Clubs", number: "10" },
  { suit: "Clubs", number: "J" },
  { suit: "Clubs", number: "Q" },
  { suit: "Clubs", number: "K" },
  { suit: "Hearts", number: "A" },
  { suit: "Hearts", number: "2" },
  { suit: "Hearts", number: "3" },
  { suit: "Hearts", number: "4" },
  { suit: "Hearts", number: "5" },
  { suit: "Hearts", number: "6" },
  { suit: "Hearts", number: "7" },
  { suit: "Hearts", number: "8" },
  { suit: "Hearts", number: "9" },
  { suit: "Hearts", number: "10" },
  { suit: "Hearts", number: "J" },
  { suit: "Hearts", number: "Q" },
  { suit: "Hearts", number: "K" },
  { suit: "Diamonds", number: "A" },
  { suit: "Diamonds", number: "2" },
  { suit: "Diamonds", number: "3" },
  { suit: "Diamonds", number: "4" },
  { suit: "Diamonds", number: "5" },
  { suit: "Diamonds", number: "6" },
  { suit: "Diamonds", number: "7" },
  { suit: "Diamonds", number: "8" },
  { suit: "Diamonds", number: "9" },
  { suit: "Diamonds", number: "10" },
  { suit: "Diamonds", number: "J" },
  { suit: "Diamonds", number: "Q" },
  { suit: "Diamonds", number: "K" },
];
var deck_img;
var table_img;
var drawCounter = 0;

var cut_point = { suit: "Diamonds", n: "3" };
var deckUptoCut = [];

function preload() {
  deck_img = loadImage("deck.png");
  table_img = loadImage("table.png");
}
function setup() {
  createCanvas(table_img.width, table_img.height);
  frameRate(30);

  //call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
  shuffleDeck(shuffleSeed());

  //call your cut_deck function here
  cut_deck();
}

//write your cut_deck function here

function cut_deck() {
  for (var i = 0; i < card_deck.length; i++) {
    if (
      card_deck[i].suit == cut_point.suit &&
      card_deck[i].number == cut_point.n
    ) {
      deckUptoCut = card_deck.splice(i);
      break;
    }
  }

  // don't use built-in reverse() function
  var tempDeck = [];
  for (var i = deckUptoCut.length - 1; i >= 0; i--) {
    tempDeck.push(deckUptoCut[i]);
  }

  deckUptoCut = tempDeck;
}

//write your shuffleSeed() function here.

function shuffleSeed() {
  var shuffleSeed = [];
  for (var i = 0; i < 52; i++) {
    shuffleSeed.push(round(random(5, 89)));
  }
  return shuffleSeed;
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed) {
  //shuffle the deck by rotating the cards location with the values in
  //shuffleSeed. Repeat this a random number of times between 20 and 50
  var shuffleIterations = parseInt(random(20, 50));
  for (var i = 0; i < shuffleIterations; i++) {
    for (var j = 0; j < card_deck.length; j++) {
      var tempCard = card_deck.splice(j, 1);
      var newLoc = (j + shuffleSeed[j]) % 52;
      card_deck.splice(newLoc, 0, tempCard[0]);
    }
  }
}

function draw() {
  image(table_img, 0, 0);

  if (frameCount % 7 == 0) {
    drawCounter++;
    if (drawCounter == 5) {
      noLoop();
    }
  }
  for (var i = 0; i < drawCounter; i++) {
    if (i < deckUptoCut.length) {
      drawCard(deckUptoCut[i], 880 + i * 18, 750);
    }
  }
}

function drawCard(card, x, y) {
  var values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      if (card.number == values[j] && card.suit == suits[i]) {
        //img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
        image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
        break;
      }
    }
  }
}
