// TODO? Pure Function, Immutability, Recursive, dan High-Order Function
// TODO Pure Function
/**
 * Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan 
 * fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya
 */

//impure function
let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah


// Pure Function
const luasLingkaran = (jariJari) => {
  return 3.14 * (jariJari * jariJari); 
}

console.log(luasLingkaran(4)); // 50.24
console.log(luasLingkaran(4)); // 50.24
console.log(luasLingkaran(8)); // 200.96
console.log(luasLingkaran(8)); // 200.96

// TODO! Selain dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja. Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.

// Pure function
const createPersonWithAge = (age, person) => {
  return { ...person, age };
};

const person = {
  name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson
});

// TODO Immutability
const user = {
  firstname: 'Harry',
  lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

// TODO Rekursif
const countDown = start => {
  console.log(start);
  if(start > 0) countDown(start-1);
};

countDown(10);


// TODO Higher-Order Function
const hello = () => {
  console.log('Hello!')
};

const say = (someFunction) => {
  someFunction();
}

const sayHello = () => {
  return () => {
    console.log('Hello!');
  }
}

hello();
say(hello);
sayHello()();



const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!` );

console.log({
  names,
  newNames,
});