var Store = function(name, city, balance ){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
}

// perhaps use a prototype here that has inventory function on it.


var bigTunes = new Store("Big Tunes", "Aberdeen", 1500);

var bobbyCollector = new Store("Bobby Collector", "Torry", 875);

module.exports = Store
