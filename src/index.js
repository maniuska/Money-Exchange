// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    var set = {"H":0,"Q":0,"D":0,"N":0,"P":0};
    
    if (currency > 10000) 
      return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency <=0)
      return {};
     
    set.H = (currency/50 >= 1) ? parseInt(currency/50) : 0;
    set.Q = (currency%50/25 >= 1) ? parseInt(currency%50/25) : 0; 
    set.D = (currency%50%25/10 >= 1) ? parseInt(currency%50%25/10) : 0;
    set.N = (currency%50%25%10/5 >= 1) ? parseInt(currency%50%25%10/5) : 0; 
    set.P = (currency%50%25%10%5 > 0) ? parseInt(currency%50%25%10%5) : 0;
    
    for (var k in set){
      if (set[k] == 0)
        delete set[k];
    }
        return set; 

}
