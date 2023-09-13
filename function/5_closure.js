// TODO closure
function init() {
  const name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
  function greet() {      // Inner function, merupakan contoh closure
    console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
  }

  greet();
}

init();

function initial() {
  const name = 'Obi Wan';

  function greet() {
    console.log(`Halo, ${name}`);
  }

  return greet;
}

const myFunction = initial();
myFunction();


let counter = 0;

const add = () => {
  return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());


const tambah = () => {
  let counter = 0;
    return () => {
      return ++counter;
  };
}

const addCounter = tambah();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());