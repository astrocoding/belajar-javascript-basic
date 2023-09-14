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
