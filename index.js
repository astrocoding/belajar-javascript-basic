import _ from 'lodash';
const myArray = [1, 2, 3, 4];
const sum = _.sum(myArray);

console.log(sum)
function multiply(num) {
  total = num * num;
}

const hasil = multiply(3);

console.log(hasil);


let x;
x = 7;
x = 'JS is great'
console.log(x);

if((true || false) && (false || false)){
  console.log("It true")
} else {
  console.log("it false")
}

const capital = {
  "Jakarta": "Indonesia"
}

capital["New Delhi"] = "Indonesia";
console.log(capital["Indonesia"]);

function car({brand, maxSpeed, wheelCount}){
  this.brand = brand;
  this.maxSpeed = maxSpeed;
  this.wheelCount = wheelCount;
}

const myCar = new car({brand:'toyota',maxSpeed: 200, wheelCount: 4});
console.log(myCar);

try {
  const arr = [1, 2, 3, 4];
  for (let i = 0; i <= 4; i++) {
  console.log(arr[i]);
  }
  } catch(e) {
  console.log("Out of bounds");
  }


console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");


// const {coffeeStock, isCoffeeMachineReady} = require('./state');

// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);

// const makeCoffee = (type, miligrams) => {
//   if (coffeeStock[type] >= miligrams) {
//     console.log("Kopi berhasil dibuat!");
//   } else {
//     console.log("Biji kopi habis!");
//   }
// }
// makeCoffee("robusta", 80);

// import colorStock from './state2.js'; Untuk satu saja
import { colorStock as stock, isColorReady } from './state2.js';

const displayStock = stock => {
  for (const type in stock) {
    console.log(type);
  }
}

displayStock(stock);
console.log(stock);
console.log(isColorReady);
