/*
802 - The case of Monte Carlo
Stage 1 - Card sharks


Don your best threads we're off to the Monte Carlo Casino ! We're tailing a gang of high rolling statisticians who run Rossling Polling, a company used by the shady politicians of Console City to make them seem more popular than they really are.

They’re prepared to give up the dirt on their techniques if we can beat them in a game of 5 card stud poker. We can’t go in and gamble away Sleuth & Co’s cash reserves. There isn’t that much green in the evidence room to compete with these card sharks. Let’s stack the odds in our favour. First let’s learn how to mark cards.

- Write a function called  pickCards.
- Inside the function, use a for loop to set the marked property of the cards array elements to true when the suit is Diamonds or the value is 8
- Call the function from within setup

*/

var cards = [ { marked: false, cardSuit: 'Spades', n: 'A'} , { marked: false, cardSuit: 'Spades', n: '2'} , { marked: false, cardSuit: 'Spades', n: '3'} , { marked: false, cardSuit: 'Spades', n: '4'} , { marked: false, cardSuit: 'Spades', n: '5'} , { marked: false, cardSuit: 'Spades', n: '6'} , { marked: false, cardSuit: 'Spades', n: '7'} , { marked: false, cardSuit: 'Spades', n: '8'} , { marked: false, cardSuit: 'Spades', n: '9'} , { marked: false, cardSuit: 'Spades', n: '10'} , { marked: false, cardSuit: 'Spades', n: 'J'} , { marked: false, cardSuit: 'Spades', n: 'Q'} , { marked: false, cardSuit: 'Spades', n: 'K'} , { marked: false, cardSuit: 'Clubs', n: 'A'} , { marked: false, cardSuit: 'Clubs', n: '2'} , { marked: false, cardSuit: 'Clubs', n: '3'} , { marked: false, cardSuit: 'Clubs', n: '4'} , { marked: false, cardSuit: 'Clubs', n: '5'} , { marked: false, cardSuit: 'Clubs', n: '6'} , { marked: false, cardSuit: 'Clubs', n: '7'} , { marked: false, cardSuit: 'Clubs', n: '8'} , { marked: false, cardSuit: 'Clubs', n: '9'} , { marked: false, cardSuit: 'Clubs', n: '10'} , { marked: false, cardSuit: 'Clubs', n: 'J'} , { marked: false, cardSuit: 'Clubs', n: 'Q'} , { marked: false, cardSuit: 'Clubs', n: 'K'} , { marked: false, cardSuit: 'Hearts', n: 'A'} , { marked: false, cardSuit: 'Hearts', n: '2'} , { marked: false, cardSuit: 'Hearts', n: '3'} , { marked: false, cardSuit: 'Hearts', n: '4'} , { marked: false, cardSuit: 'Hearts', n: '5'} , { marked: false, cardSuit: 'Hearts', n: '6'} , { marked: false, cardSuit: 'Hearts', n: '7'} , { marked: false, cardSuit: 'Hearts', n: '8'} , { marked: false, cardSuit: 'Hearts', n: '9'} , { marked: false, cardSuit: 'Hearts', n: '10'} , { marked: false, cardSuit: 'Hearts', n: 'J'} , { marked: false, cardSuit: 'Hearts', n: 'Q'} , { marked: false, cardSuit: 'Hearts', n: 'K'} , { marked: false, cardSuit: 'Diamonds', n: 'A'} , { marked: false, cardSuit: 'Diamonds', n: '2'} , { marked: false, cardSuit: 'Diamonds', n: '3'} , { marked: false, cardSuit: 'Diamonds', n: '4'} , { marked: false, cardSuit: 'Diamonds', n: '5'} , { marked: false, cardSuit: 'Diamonds', n: '6'} , { marked: false, cardSuit: 'Diamonds', n: '7'} , { marked: false, cardSuit: 'Diamonds', n: '8'} , { marked: false, cardSuit: 'Diamonds', n: '9'} , { marked: false, cardSuit: 'Diamonds', n: '10'} , { marked: false, cardSuit: 'Diamonds', n: 'J'} , { marked: false, cardSuit: 'Diamonds', n: 'Q'} , { marked: false, cardSuit: 'Diamonds', n: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;


function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your pickCards function here
	pickCards();

}

//write your pickCards function here
function pickCards() {
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].cardSuit == "Diamonds" || cards[i].n == "8") {
      cards[i].marked = true;
    }
  }
}



function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (cards[i].marked)
		{
			drawCard(cards[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(cards[i], 400 + i * 18, 250);
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
			if (card.n == values[j] && card.cardSuit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
