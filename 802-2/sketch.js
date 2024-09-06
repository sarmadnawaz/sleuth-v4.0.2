/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in winner from the deck and store it in the hand array.

- Write a function called buildWinningHand and call it from setup.
- The function should take each card in winner and seacrh for a match in playingCards.
- Matching cards should be added to the hand array
- You'll need to use a nested for loop and break statement in the inner loop to stop searching once you've found a match.

- You also need to write a shuffleSeed() function. 
- This needs to return an array of 52 random integers between 0 and 100.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var playingCards = [ { card_suit: 'Spades', no: 'A'} , { card_suit: 'Spades', no: '2'} , { card_suit: 'Spades', no: '3'} , { card_suit: 'Spades', no: '4'} , { card_suit: 'Spades', no: '5'} , { card_suit: 'Spades', no: '6'} , { card_suit: 'Spades', no: '7'} , { card_suit: 'Spades', no: '8'} , { card_suit: 'Spades', no: '9'} , { card_suit: 'Spades', no: '10'} , { card_suit: 'Spades', no: 'J'} , { card_suit: 'Spades', no: 'Q'} , { card_suit: 'Spades', no: 'K'} , { card_suit: 'Clubs', no: 'A'} , { card_suit: 'Clubs', no: '2'} , { card_suit: 'Clubs', no: '3'} , { card_suit: 'Clubs', no: '4'} , { card_suit: 'Clubs', no: '5'} , { card_suit: 'Clubs', no: '6'} , { card_suit: 'Clubs', no: '7'} , { card_suit: 'Clubs', no: '8'} , { card_suit: 'Clubs', no: '9'} , { card_suit: 'Clubs', no: '10'} , { card_suit: 'Clubs', no: 'J'} , { card_suit: 'Clubs', no: 'Q'} , { card_suit: 'Clubs', no: 'K'} , { card_suit: 'Hearts', no: 'A'} , { card_suit: 'Hearts', no: '2'} , { card_suit: 'Hearts', no: '3'} , { card_suit: 'Hearts', no: '4'} , { card_suit: 'Hearts', no: '5'} , { card_suit: 'Hearts', no: '6'} , { card_suit: 'Hearts', no: '7'} , { card_suit: 'Hearts', no: '8'} , { card_suit: 'Hearts', no: '9'} , { card_suit: 'Hearts', no: '10'} , { card_suit: 'Hearts', no: 'J'} , { card_suit: 'Hearts', no: 'Q'} , { card_suit: 'Hearts', no: 'K'} , { card_suit: 'Diamonds', no: 'A'} , { card_suit: 'Diamonds', no: '2'} , { card_suit: 'Diamonds', no: '3'} , { card_suit: 'Diamonds', no: '4'} , { card_suit: 'Diamonds', no: '5'} , { card_suit: 'Diamonds', no: '6'} , { card_suit: 'Diamonds', no: '7'} , { card_suit: 'Diamonds', no: '8'} , { card_suit: 'Diamonds', no: '9'} , { card_suit: 'Diamonds', no: '10'} , { card_suit: 'Diamonds', no: 'J'} , { card_suit: 'Diamonds', no: 'Q'} , { card_suit: 'Diamonds', no: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var winner = [ { type: 'Clubs', value: 'K'} , { type: 'Clubs', value: 'J'} , { type: 'Diamonds', value: 'Q'} , { type: 'Hearts', value: 'K'} , { type: 'Diamonds', value: 'J'}  ];
var hand =[];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
	shuffleDeck(shuffleSeed());

	//call your buildWinningHand function here
	buildWinningHand();

}

//write your buildWinningHand function here

function buildWinningHand() {
  for (var i = 0; i < winner.length; i++) {
	for (var j = 0; j < playingCards.length; j++) {
	  if (winner[i].type == playingCards[j].card_suit && winner[i].value == playingCards[j].no) {
		hand.push(playingCards[j]);
		break;
	  }
	}
  }
}

//write your shuffleSeed() function here.

function shuffleSeed() {
	  var shuffleSeed = [];
  for (var i = 0; i < 52; i++) {
	shuffleSeed.push(round(random(0, 100)));
  }
  return shuffleSeed;
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < playingCards.length; j++)
	   {
		  var tempCard = playingCards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          playingCards.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if( i < hand.length)
		{
			drawCard(hand[i], 880 + i * 18, 750);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.no == values[j] && card.card_suit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
