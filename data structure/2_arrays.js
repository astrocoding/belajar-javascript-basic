let myArr = ["Nasi Garing", 45.3, 20, true, 'Coding'];
console.log(myArr);
console.log(typeof(myArr));

console.log(myArr[1]); // Array dimulai dari indeks 0 sehingga output-nya adalah 45.3
// TODO Mencoba mengakses index di luar ukuran array-nya
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);
console.log(myArr[4]);
console.log(myArr[5]); // Hasil index yang tidak ada akan menjadi undefined

console.log("Panjang nilai dari myArr adalah: " + myArr.length);
// TODO? Menambahkan data ke dalam array di akhir "push()"
myArr.push('Ngopi'); 
console.log(myArr);



// TODO? Mengeluarkan data atau elemen terakhir dari array dengan "pop()"
myArr.pop();
console.log(myArr);

// TODO? Mengeluarkan data/elemen pertama dari array dengan "shift()" dan menambahkan elemen di awal array dengan "unshift()"
myArr.shift();
console.log(myArr);
myArr.unshift('Java');
console.log(myArr);

// TODO! Menghapus data dari array dengan keyword "delete"
delete myArr[1];
console.log(myArr); // Hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong

// TODO! Menghapus elemen pada array dengan "splice()"
myArr.splice(2, 1); // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArr);


const month = ['January', 'March', 'April', 'May'];
console.log("Data Array sebelum di splice:", month);
month.splice(1, 0, 'February');
console.log("Data Array sesudah di splice: ", month);



