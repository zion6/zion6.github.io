module.exports = function(cards)
{

if(cards)
  this.cards = cards;
else
  this.cards = [];
  
  this.push = function(card){
    this.cards.push(card);
  };
  
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
    
};
