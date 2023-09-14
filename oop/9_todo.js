// 1. Definisikan class Animal
class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

// 2. Definisikan class Rabbit
class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true); // isMammal selalu true untuk Rabbit
  }

  eat() {
    return `${this.name} sedang makan!`;
  }
}

// 3. Definisikan class Eagle
class Eagle extends Animal {
  constructor(name, age) {
    super(name, age, false); // isMammal selalu false untuk Eagle
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }
}

// 4. Buat instance dari class Rabbit
const myRabbit = new Rabbit("Labi", 2);

// 5. Buat instance dari class Eagle
const myEagle = new Eagle("Elo", 4);

// Contoh penggunaan
console.log(myRabbit.eat()); // Output: Labi sedang makan!
console.log(myEagle.fly()); // Output: Elo sedang terbang!
