const user = {
  id: 24,
  displayName: 'Zaenal',
  fullName: "Zaenal Alfian",
};

function intro({displayName, fullName}) {
  console.log(`Display Name: ${displayName}\nFullname: ${fullName}`);
}

intro(user);

// TODO Default parameter
function expoFormula(baseNumber, exponent = 2) {
  const result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
};

expoFormula(3);

// TODO Rest parameter
function sum(...numbers) {
  let result = 0;
  for(let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));