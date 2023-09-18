const a = [];
const n = prompt('Masukan basis bilangan: ');
const d = prompt('Masukan panjang digit: ');
parseInt(n, d);

// TODO: Input untuk nilai dari array (nilai digit)
for(let i = 0; i < d;i++) {
  a[i] = prompt(`Masukan nilai digit ke-${i+1}`);
}
console.log(a); // Output array a
// TODO: Konversi tipe data untuk array
let numberArr = [];
for(let i = 0; i < a.length; i++) {
  numberArr.push(parseInt(a[i]));
}
// TODO: Operasi perhitungan hasil konversi sistem bilangan
console.log(numberArr); // Output array untuk konversi number
let hasil = 0;
for(let i = 0; i < d; i++) {
  hasil = numberArr[i] + hasil * n;
  console.log(hasil);
}
console.log(`Hasil konversi ke bilangan desimal: ${hasil}`); // output console
alert(`Hasil konversi ke bilangan desimal: ${hasil}`); // output pop up
