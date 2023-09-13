const user = {
  firstName: "Zaenal",
  lastName: "Alfian",
  age: 20,
  isStudent: true,
  "greeting":"salam kenal!"
};


console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun, ${user["greeting"]}`);

const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light Gray",
};

spaceship.color = "Metal Gray";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);
console.log(spaceship["manufacturer"]);
// TODO Perhatikan: mengubah nilai berbeda dengan menginisialisasi ulang nilai
/** Ketika membuat sebuah object, kita tidak terikat dengan properti di dalamnya sehingga kita bisa
 * memodifikasi nilainya. Berbeda jika kita menginisialisasi ulang variabel dari object-nya
 */
// spaceship = { name: "AstroSpace" }; error
let myspaceship = spaceship.name = "Astro";
console.log(myspaceship);
spaceship.class = "Armageddon Striker"; // property/key baru akan ditambahkan kalo memang tidak ada
console.log(spaceship);

// TODO! Menghapus property pada object menggunakan keyword "delete"
delete spaceship["manufacturer"];
delete spaceship.color;
console.log(spaceship);


