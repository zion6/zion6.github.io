//var util = require('util');
var deck = require(['deck']);
var playingCardDeck = require(['PlayingCardDeck']);
var shuffle = module.exports = {};
var defaultOptions = {
  deck: new PlayingCardDeck().cards,
  numberOfDecks : 2,
  random: function(){ return Math.random(); }
};

shuffle.playingCards = function(){
  return new PlayingCardDeck().cards;
};

shuffle.shuffle = function(options){
  if(!options)
    options = defaultOptions;

  if(!options.deck) {
    options.deck = defaultOptions.deck;
  }

  if(options.numberOfDecks) {
    var oneDeck = options.deck;
    for(var i = 0 ; i < options.numberOfDecks - 1  ; i++) {
      options.deck = options.deck.concat(oneDeck);
    }
  }

  if(!options.random) {
    options.random = defaultOptions.random;
  }

  return new deck(options.deck, options.random);
};
