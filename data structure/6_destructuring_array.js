// TODO Destructuring Array
const favs = ["Beef", "BBQ", "Salad", "Soup", "Nugget"];

const [food1, food2, food3, food4, food5] = favs;

console.log(food1);
console.log(food2);
console.log(food3);
console.log(food4);
console.log(food5);


const sports = ["Football", "Badminton", "Basketball", "Volley"];
const [ , , sport3] = sports; // memilih nilai array berdasarkan index
console.log(sport3);

// TODO Destructuring Assignment
const snacks = ["Ice Cream", "Potato Chip", "Candy", "Gummy"];
let mySnack = "Donut";
let herSnack = "Cake";

[mySnack, herSnack] = snacks;
console.log(mySnack);
console.log(herSnack);

var a = 1;
var b = 2;
var temp;

console.log("Sebelum Swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

temp = a;
a = b;
b = temp;

console.log("Setelah Swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

// TODO SWAP dengan destructuring array
let x = 5;
let y = 10;
console.log("Sebelum Swap");
console.log("Nilai x: " + x);
console.log("Nilai y: " + y);

[x, y] = [y, x]; // Menetapkan nilai a dengan nilai b dan nilai b dengan nilai a
console.log("Setelah Swap");
console.log("Nilai x: " + x);
console.log("Nilai y: " + y);

// TODO Default Values
const games = ["Mortal Kombat"];
const [myGame, hisGame] = games;

console.log(myGame);
console.log(hisGame); // otomatis undefined

const laptops = ["Lenovo"];
const [myLaptop, herLaptop = "Macbook"] = laptops;
console.log(myLaptop);
console.log(herLaptop);




