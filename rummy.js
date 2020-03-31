var shuffle = require('/game'),
    blackjackHand = require('./playerhand'),
    EventEmitter = require('events').EventEmitter,
    util = require('util');
    
var deck,
    player1,
		player2,
		player3,
		player4,
		player5,
		player6,
		discardPile,
		communityPile,
		joker,
		cardInPlay;

