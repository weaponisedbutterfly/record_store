var Record = require('./record');
var Store = require('./store');
var assert = require('assert');

describe('Record', function(){
  it('A record should have an artist', function(){ purpose = new Record("Purpose", "Justin Bieber", "Virgin EMI", 2015);
    assert.equal('Justin Bieber', purpose.artist);
  });
  it('A record should have a price', function(){ twentyFive = new Record("25", "Adele", 12.99, "XL Recordings", 2015);
    assert.equal(12.99, twentyFive.price);
  });

});

describe('Store', function(){
  it('A store should have a name', function(){ bigTunes = new Store("Big Tunes", "Aberdeen", 1500);
    assert.equal("Big Tunes", bigTunes.name); 
  });

  it('A store should have money in the bank', function(){ bigTunes = new Store("Big Tunes", "Aberdeen", 1500);
    assert.equal(1500, bigTunes.balance); 
  });


});
