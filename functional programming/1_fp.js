// TODO? Gaya penulisan kode imperatif, maksud dari "How to Solve"
const namas = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamasWithExcMark = [];

for(let i = 0; i < namas.length; i++) {
  newNamasWithExcMark.push(`${namas[i]}!`);
}

console.log(newNamasWithExcMark);

// TODO? Gaya penulisan kode deklaratif, maksud dari "What to Solve
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark);