// TODO? Javascript bukanlah class-based language, melainkan prototype-based language
// TODO Constructor Function
function Car(brand, color, maxSpeed, chassisNumber) {
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function() {
  console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function() {
  console.log(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function() {
  console.log(`${this.brand} ${this.color} is turning`);
}

// TODO Membuat objek mobil dengan constructor function Car
const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');
const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.drive();
car3.drive();

// TODO? Sintaks Class di ES6
class Game {
  constructor(name, genre, rating) {
    this.name = name;
    this.genre = genre;
    this.rating = rating;
  }

  play() {
    console.log(`${this.name} ${this.genre} is played`);
  }

  notPlayed() {
    console.log(`${this.name} ${this.genre} is not played!`);
  }
}

const game1 = new Game('Genshin Impact', 'MMORPG', 4.9);
const game2 = new Game('CS:GO', 'FPS', 4.8);
const game3 = new Game('Clash of Clans', 'Strategy', 5.0);

console.log(game1);
console.log(game2);
console.log(game3);

game1.play();
game2.notPlayed();
game3.play();

console.log(typeof Game); //syntactic sugar atau cara alternatif, masih bertipe function