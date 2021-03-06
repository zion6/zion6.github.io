module.exports = function(cards)
{

if(cards)
  this.cards = cards;
else
  this.cards = [];
  
  this.push = function(card){
    this.cards.push(card);
  };
  
  this.pushCards = function(cardsArray)
  {
    for(var i = 0; i < cardsArray.length; i++)
      cards.push(cardsArray[i]);
  }
  
  this.toString = function(){
    var ret = [];
    for(var i = 0; i < this.cards.length; i++)
    ret.push(this.cards[i].toShortDisplayString());
    return ret.join(',');
  };


this.pop = function(index)
  {
   if(index > -1)
    this.cards.splice(index, 1);
  };
  
  this.pushAt = function(card, index)
  {
    if(card && index > -1)
      this.cards.splice(index, 0, card);
  };
  
  this.clear = function()
  {
    this.cards.splice(0, this.cards.length);
  };
  
  this.drawRandom = function()
  {
    return this.cards.splice(Math.floor(Math.random()*this.cards..length), 1);
  };
  
  this.shuffle = function() {
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

    
};
