var shuffle = require('/game'),
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

player1 = new hand();
player2 = new hand();
player3 = new hand();
player4 = new hand();
player5 = new hand();
player6 = new hand();

deck = shuffle.shuffle({numberOfDecks:2});

switch(numberOfPlayers)
{
	case default: 
	case 2:
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





// Shuffle all decks

// Draw from community pile

// Draw from discard pile

// Draw joker

// Drop player hand

// Declare Rummy

// end game

