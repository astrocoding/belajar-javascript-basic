// TODO Function declaration (Regular Function)
function sayHi(greet) {
  console.log(`${greet}`);
};
// TODO Function expression (Regular Function)
const sayName = function (name) {
  console.log(`Nama saya adalah ${name}!`);
};

sayHi("Hi!");
sayName("Zaenal");

// TODO? Arrow function
// Function expression
const sayHello = (salam) => {
  console.log(`${salam}`);
};

const sayNama = nama => { // Apabila fungsi hanya memiliki 1 parameter kita bisa hapus tanda kurungnya
  console.log(`Namaku, ${nama}!`);
};

sayHello("Hello!");
sayNama("Zaenal Alfian");

const salam = () => { // Apabila tidak menggunakan parameter maka tetap tuliskan tanda kurung tetapi kosong
  console.log("Halo semuanya!");
};

salam();

// TODO Arrow function satu baris
const play = () => console.log("Ayo bermain!");
play();

const hitung = (a, b) => console.log(a + b);
hitung(5, 1);

const namaku = nama => console.log(`I am, ${nama}~`);
namaku("Atomic");

const perkalian = (x, y) => x * y;
console.log(perkalian(5, 3));