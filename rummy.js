var shuffle = require('./game'),
    playerHand = require('./hand'),
    EventEmitter = require('events').EventEmitter,
    util = require('util');
    
var deck,
    	player1,
	player2,
	player3,
	player4,
	player5,
	player6,
    	numberOfPlayers,
	discardPile,
	communityPile,
	joker,
	cardInPlay;


EventEmitter.call(this);

communityPile = new playerHand();
discardPile = new playerHand();
player1 = new playerHand();
player2 = new playerHand();
player3 = new playerHand();
player4 = new playerHand();
player5 = new playerHand();
player6 = new playerHand();

alert('beforeShuffle' + deck);
// Shuffle all decks
deck = shuffle.shuffle({numberOfDecks:2});

alert('afterShuffle' + deck);

// Deal the cards
function dealCards(){
	switch(numberOfPlayers)
	{
		case 2:
			alert('dealing' + deck);
			deck.deal(13, [player1, player2]);
			break;
		case 3:
			deck.deal(13, [player1, player2, player3]);
			break;
		case 4:
			deck.deal(13, [player1, player2, player3, player4]);
			break;
		case 5:
			deck.deal(13, [player1, player2, player3, player4, player5]);
			break;
		case 6:
			deck.deal(13, [player1, player2, player3, player4, player5, player6]);
			break;
	};
}



// Draw from community pile
function drawFromCommunity(){
	if(!communityPile)
	{
		communityPile.pushCards(discardPile.cards);
		discardPile.clear();
	}
	cardInPlay = communityPile.pop();
}


// Draw from discard pile
function drawFromCommunity(){
	if(!discardPile)
	cardInPlay = discardPile.pop();
}


// Draw joker
function drawJoker()
{
	joker = communityPile.drawRandom();
}

// Drop player hand
function dropHand(pHand)
{
  communityPile.push(pHand);
  pHand.clear();
}

// Declare Rummy
function declareRummy(pHand)
{
	//show all hands!
}

// end game
function endGame()
{
	player1.clear();
	player2.clear();
	player3.clear();
	player4.clear();
	player5.clear();
	player6.clear();
	communityPile.clear();
	discardPile.clear();
	joker = null;
	cardInPlay = null;
	
}
