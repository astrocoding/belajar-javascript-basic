class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    // Set a random chassis number
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log('You are not allowed to change this chassis number!');
  }

}


const car1 = new Car('BMW', 'red', 200);
const car2 = new Car('Audi', 'blue', 220);
const car3 = new Car('BMW', 'black', 250);
console.log(car3.chassisNumber);
car3.chassisNumber = "BMW-1"
console.log(car3.chassisNumber);

console.log(car1);
console.log(car2);
console.log(car3);

// TODO? Ada 2 tipe property yakni data property dan accessor property
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User('Zaenal', 'Alfian');
console.log(user);
console.log(user.fullName);

user.fullName = 'Haikal FF';
console.log(user);
console.log(user.fullName);



class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }

  // Method
  send() {
    console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
  }

  sendLater(delay) {
    console.log(`Sending after ${delay} ms`);
    setTimeout(() => {
      this.send();
    }, delay)
  }

  saveAsDraft() {
    console.log('Saving mail as draft');
  }
}

const pesan = new Mail('Zaenal Alfian', 'Haikal FF', 'Undangan acara', 'bla bla bla bla bla');
console.log(pesan);
pesan.send();
pesan.sendLater(10000);
pesan.saveAsDraft();