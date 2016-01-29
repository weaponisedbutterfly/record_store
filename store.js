var Store = function(name, city, balance ){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = balance;
}

var bigTunes = new Store("Big Tunes", "Aberdeen", 1500);

module.exports = Store
