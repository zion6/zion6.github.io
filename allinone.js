// JavaScript source code
function playingCard(suit, description, sort) {
    this.suit = suit;
    this.description = description;
    this.sort = sort;

    this.toString = function () {
        return this.description + ' of ' + this.suit + 's';
    }

    this.toShortDisplayString = function () {
        var suit = this.suit.substring(0, 1);
        var value;
        switch (this.sort) {
            case 11:
                value = 'J';
                break;
            case 12:
                value = 'Q';
                break;
            case 13:
                value = 'K';
                break;
            case 14:
                value = 'A';
                break;
            default:
                value = this.sort;
        }
        return value + suit;
    }
}



function PlayingCardDeck() {
    this.cards = [
        new playingCard('Club', 'Two', 2),
        new playingCard('Club', 'Three', 3),
        new playingCard('Club', 'Four', 4),
        new playingCard('Club', 'Five', 5),
        new playingCard('Club', 'Six', 6),
        new playingCard('Club', 'Seven', 7),
        new playingCard('Club', 'Eight', 8),
        new playingCard('Club', 'Nine', 9),
        new playingCard('Club', 'Ten', 10),
        new playingCard('Club', 'Jack', 11),
        new playingCard('Club', 'Queen', 12),
        new playingCard('Club', 'King', 13),
        new playingCard('Club', 'Ace', 14),
        new playingCard('Diamond', 'Two', 2),
        new playingCard('Diamond', 'Three', 3),
        new playingCard('Diamond', 'Four', 4),
        new playingCard('Diamond', 'Five', 5),
        new playingCard('Diamond', 'Six', 6),
        new playingCard('Diamond', 'Seven', 7),
        new playingCard('Diamond', 'Eight', 8),
        new playingCard('Diamond', 'Nine', 9),
        new playingCard('Diamond', 'Ten', 10),
        new playingCard('Diamond', 'Jack', 11),
        new playingCard('Diamond', 'Queen', 12),
        new playingCard('Diamond', 'King', 13),
        new playingCard('Diamond', 'Ace', 14),
        new playingCard('Heart', 'Two', 2),
        new playingCard('Heart', 'Three', 3),
        new playingCard('Heart', 'Four', 4),
        new playingCard('Heart', 'Five', 5),
        new playingCard('Heart', 'Six', 6),
        new playingCard('Heart', 'Seven', 7),
        new playingCard('Heart', 'Eight', 8),
        new playingCard('Heart', 'Nine', 9),
        new playingCard('Heart', 'Ten', 10),
        new playingCard('Heart', 'Jack', 11),
        new playingCard('Heart', 'Queen', 12),
        new playingCard('Heart', 'King', 13),
        new playingCard('Heart', 'Ace', 14),
        new playingCard('Spade', 'Two', 2),
        new playingCard('Spade', 'Three', 3),
        new playingCard('Spade', 'Four', 4),
        new playingCard('Spade', 'Five', 5),
        new playingCard('Spade', 'Six', 6),
        new playingCard('Spade', 'Seven', 7),
        new playingCard('Spade', 'Eight', 8),
        new playingCard('Spade', 'Nine', 9),
        new playingCard('Spade', 'Ten', 10),
        new playingCard('Spade', 'Jack', 11),
        new playingCard('Spade', 'Queen', 12),
        new playingCard('Spade', 'King', 13),
        new playingCard('Spade', 'Ace', 14)
    ];
}




function deck(cards, random) {
    this.reset = function () {
        this.cards = cards.slice(0);
        this.length = this.cards.length;
    };
    this.shuffle = function () {
        fisherYates(this.cards);
    };

    this.reset();
    this.shuffle();

    this.deal = function (numberOfCards, arrayOfHands) {
        for (var i = 0; i < numberOfCards; i++)
            for (var j = 0; j < arrayOfHands.length; j++)
                arrayOfHands[j].push(this.cards.pop());
        this.length = this.cards.length;
    };

    this.draw = function (num) {
        if (!num || num <= 1) {
            this.length = this.cards.length - 1;
            return this.cards.pop();
        }

        var ret = [];
        for (var i = 0; i < num; i++)
            ret.push(this.cards.pop());
        this.length = this.cards.length;
        return ret;
    };

    this.drawFromBottomOfDeck = function (num) {
        if (!num || num < 1) {
            num = 1;
        }

        var ret = [];
        for (var i = 0; i < num; i++) {
            ret.push(this.cards.shift());
        }
        this.length = this.cards.length;

        if (ret.length === 1) {
            return ret[0];
        } else {
            return ret;
        }
    };

    this.drawRandom = function (num) {
        var _draw = function () {
            var index = Math.floor(random() * this.cards.length);
            var card = this.cards[index];
            this.cards.splice(index, 1);
            this.length = this.cards.length;
            return card;
        };

        if (!num || num <= 1) {
            return _draw.apply(this);
        } else {
            var cards = [];
            for (var i = 0; i < num; i++) {
                cards.push(_draw.apply(this));
            }
            return cards;
        }
    };

    this.putOnTopOfDeck = function (cards) {
        if (!cards instanceof Array)
            this.cards.push(cards);
        else
            for (var i = 0; i < cards.length; i++)
                this.cards.push(cards[i]);
        this.length = this.cards.length;
    };

    this.putOnBottomOfDeck = function (cards) {
        if (!cards instanceof Array)
            this.cards.unshift(cards);
        else
            for (var i = 0; i < cards.length; i++)
                this.cards.unshift(cards[i]);
        this.length = this.cards.length;
    };

    //array shuffling algorithm: http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    function fisherYates(arr) {
        var i = arr.length;
        if (i === 0)
            return false;
        while (--i) {
            var j = Math.floor(random() * (i + 1));
            var tempi = arr[i];
            var tempj = arr[j];
            arr[i] = tempj;
            arr[j] = tempi;
        }
    }
}

function shuffle()
{
var defaultOptions = {
    deck: new PlayingCardDeck().cards,
    numberOfDecks: 2,
    random: function () { return Math.random(); }
};

this.playingCards = function () {
    return new PlayingCardDeck().cards;
};

this.shuffle = function (options) {
    if (!options)
        options = defaultOptions;

    if (!options.deck) {
        options.deck = defaultOptions.deck;
    }

    if (options.numberOfDecks) {
        var oneDeck = options.deck;
        for (var i = 0; i < options.numberOfDecks - 1; i++) {
            options.deck = options.deck.concat(oneDeck);
        }
    }

    if (!options.random) {
        options.random = defaultOptions.random;
    }

    return new deck(options.deck, options.random);
}
}




function playerHand(cards) {

    if (cards)
        this.cards = cards;
    else
        this.cards = [];

    this.push = function (card) {
        this.cards.push(card);
    };

    this.pushCards = function (cardsArray) {
        for (var i = 0; i < cardsArray.length; i++)
            cards.push(cardsArray[i]);
    }

    this.toString = function () {
        var ret = [];
        for (var i = 0; i < this.cards.length; i++)
            ret.push(this.cards[i].toShortDisplayString());
        return ret.join(',');
    };


    this.pop = function (index) {
        if (index > -1)
            this.cards.splice(index, 1);
    };

    this.pushAt = function (card, index) {
        if (card && index > -1)
            this.cards.splice(index, 0, card);
    };

    this.clear = function () {
        this.cards.splice(0, this.cards.length);
    };

    this.drawRandom = function () {
        return this.cards.splice(Math.floor(Math.random() * this.cards.length), 1);
    };

    this.shuffle = function () {
        for (var remainingToShuffle = this.cards.length; remainingToShuffle > 0; remainingToShuffle--) {
            var randomIndex = Math.floor(Math.random() * remainingToShuffle);
            swap(this.cards, remainingToShuffle - 1, randomIndex);
        }

        function swap(array, a, b) {
            var temp = array[a];
            array.splice(a, 1, array[b]);
            array.splice(b, 1, temp);
        }
    };


}



var cDeck,
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
cDeck = shuffle.shuffle({ numberOfDecks: 2 });

alert('afterShuffle' + cDeck);

// Deal the cards
function dealCards() {
    switch (numberOfPlayers) {
        case 2:
            alert('dealing' + cDeck);
            cDeck.deal(13, [player1, player2]);
            break;
        case 3:
            cDeck.deal(13, [player1, player2, player3]);
            break;
        case 4:
            cDeck.deal(13, [player1, player2, player3, player4]);
            break;
        case 5:
            cDeck.deal(13, [player1, player2, player3, player4, player5]);
            break;
        case 6:
            cDeck.deal(13, [player1, player2, player3, player4, player5, player6]);
            break;
    };
}



// Draw from community pile
function drawFromCommunity() {
    if (!communityPile) {
        communityPile.pushCards(discardPile.cards);
        discardPile.clear();
    }
    cardInPlay = communityPile.pop();
}


// Draw from discard pile
function drawFromCommunity() {
    if (!discardPile)
        cardInPlay = discardPile.pop();
}


// Draw joker
function drawJoker() {
    joker = communityPile.drawRandom();
}

// Drop player hand
function dropHand(pHand) {
    communityPile.push(pHand);
    pHand.clear();
}

// Declare Rummy
function declareRummy(pHand) {
    //show all hands!
}

// end game
function endGame() {
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
