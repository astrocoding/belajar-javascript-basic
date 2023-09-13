// TODO Declaring function
function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 5);

console.log(result);

function add(x, y) {
  result = x + y;
  return result;
}

console.log(add(5, 7));

function salam() {
  console.log("Selamat pagi semuanya!");
}

salam();

function greeting(name, language) {
  if(language == "English") {
    console.log(`Good morning, ${name}!`);
  } else if(language == "French") {
    console.log(`Bonjour ${name}!`);
  } else {
    console.log(`Selamat pagi, ${name}!`);
  }
}

greeting("Zaenal Alfian", "English");

// TODO Expression Function
const hello = function(name, language) {
  if(language == "English") {
    return `Good morning, ${name}!`;
  } else if(language == "French") {
    return `Bonjour, ${name}!`;
  } else {
    return `Selamat pagi, ${name}!`;
  }
}

console.log(hello("Zaenal", "French"));
