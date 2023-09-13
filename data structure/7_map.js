const myMap = new Map([
  ['1', 'a string key'],
  [2, 'a number key'],
  [true, true],
])

console.log(myMap);

// TODO? Metode get() dan set()
const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"],
])

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));

// TODO! Implementasi MAP yang salah
const wrongMap = new Map();
wrongMap["my key"] = "My Value";
console.log(wrongMap["my key"]);
// TODO? Ini mengakibatkan data tidak tersimpan dalam Map Query dan tidak bisa menggunakan fitur dari Map: .has atau .delete

console.log(wrongMap.has("my key")); // maka nilainya akan false
console.log(wrongMap.delete("my key")); // false

// TODO Pastikan untuk menggunakan metode .set() dan .get() untuk Map