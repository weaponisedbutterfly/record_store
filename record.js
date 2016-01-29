

var Record = function(title, artist, publisher, year){
  this.artist = artist;
  this.publisher = publisher;
  this.year = year;
}



var Blackstar = new Record("Blackstar", "David Bowie", "Columbia", 2016);
var TwentyFive = new Record("25", "Adele", "XL Recordings", 2015);
var BestOfBowie= new Record("Best Of Bowie", "David Bowie", "EMI", 2002);
var DeathOfABachelor = new Record("Death Of A Bachelor", "Panic! at the Disco", "ATLANTIC", 2016);
var Purpose = new Record("Purpose", "Justin Bieber", "Virgin EMI", 2015);

module.exports = Record