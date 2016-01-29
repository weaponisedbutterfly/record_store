var Record = require('./record');
var assert = require('assert');

describe('Record', function(){
  it('A record should have an artist', function(){ purpose = new Record("Purpose", "Justin Bieber", "Virgin EMI", 2015);
    assert.equal('Justin Bieber', purpose.artist);
  });
});
