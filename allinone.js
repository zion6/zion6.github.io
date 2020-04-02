
class playingCard {
    constructor
        (suit, description, sort) {
        this.suit = suit;
        this.description = description;
        this.sort = sort;
    }

    toString() {
        return this.description + ' of ' + this.suit + 's';
    }

    toShortDisplayString() {
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


class PlayingCardDeck {
    constructor()
    {
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
}


class deck {
    constructor(cards, random) {
        this.cards = cards;
        this.random = random;
    }

    reset() {
        this.cards = cards.slice(0);
        this.length = this.cards.length;
    }

    shuffle() {
        fisherYates(this.cards);
    }

    deal(numberOfCards, arrayOfHands) {
        for (var i = 0; i < numberOfCards; i++)
            for (var j = 0; j < arrayOfHands.length; j++)
                arrayOfHands[j].push(this.cards.pop());
        this.length = this.cards.length;
    }

}


