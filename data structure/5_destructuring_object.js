const profil = {
  namaDepan: "Zaenal",
  namaBelakang: "Alfian",
  usia: 20,
}

// TODO Destructuring Object
// const { namaDepan, namaBelakang, usia } = profil;
// console.log(namaDepan, namaBelakang, usia);

let namaDepan = "Hiro";
let namaBelakang = "Kuro";

// TODO Menginisialisasi nilai baru melalui destructuring object
({namaDepan, namaBelakang} = profil); // Harus menggunakan tanda kurung, kalo tidak akan dikenali sebagai block statement
console.log(namaDepan, namaBelakang);

const hero = {
  nama: "Astro",
  kelas: "Melee",
  skill: "Blast",
}

const {nama, kelas, skill, hp = 100} = hero;  // Untuk HP akan undefined kalau tidak didefinisikan nilai default-nya
console.log(nama, kelas, skill, hp);

// TODO Nama lokal variabel berbeda
const lokal = {
  bahasa: "Sunda",
  level: "Fasih",
}
const {bahasa: lokalBahasa, level: lokalLevel} = lokal;
console.log(lokalBahasa);
console.log(lokalLevel);