const favs = ['Seafood', 'Salad', 'BBQ', 'Soup'];
console.log(favs);

// TODO Spread Operator dapat menyebarkan nilai-nilai di dalam array
console.log(...favs);

// TODO? Kode di atas sama seperti kita menulis kode seperti:
console.log(favs[0], favs[1], favs[2], favs[3]);

const others = ['Cake', 'Pie', 'Donut'];
// const allFavs = [favs, others]; menggabungkan 2 arrays

const allFavs = [...favs, ...others];
console.log(allFavs);

// TODO Object Literals
const obj1 = {firstName: 'Zaenal', age: 20};
const obj2 = {lastName: 'Alfian', gender: 'M'};

const newObj = {...obj1, ...obj2};
console.log(newObj);