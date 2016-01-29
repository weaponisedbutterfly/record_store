

var Record = function(title, artist, price, publisher, year){
  this.title = title;
  this.artist = artist;
  this.price = price;
  this.publisher = publisher;
  this.year = year;
}



var blackstar = new Record("Blackstar", "David Bowie", 9.99, "Columbia", 2016);
var twentyFive = new Record("25", "Adele", 12.99, "XL Recordings", 2015);
var bestOfBowie= new Record("Best Of Bowie", "David Bowie", 7.99, "EMI", 2002);
var deathOfABachelor = new Record("Death Of A Bachelor", "Panic! at the Disco", 8.99, "ATLANTIC", 2016);
var purpose = new Record("Purpose", "Justin Bieber", 9.99, "Virgin EMI", 2015);

module.exports = Record