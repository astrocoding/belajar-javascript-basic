const visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let zaenal = { name: "Zaenal"};
countUser(zaenal) // Menambahkan user "Zaenal"

zaenal = null; // Data object "Zaenal" dihapus

// TODO Delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(visitsCountMap);
}, 10000);

const { inspect } = require('util');

const CountMap = new WeakMap(); // Menyimpan daftar user

function hitungUser(user) {
  let count = CountMap.get(user) || 0;
  CountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
hitungUser(jonas);  // Menambahkan user "Jonas"

jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(inspect(CountMap, { showHidden: true }));
}, 10000);

