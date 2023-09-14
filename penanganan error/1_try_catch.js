// TODO Try and Catch
try {
  console.log("Awal blok try");   // (1)
  errorCode;                      // (2)
  console.log("Akhir blok try");  // (3)
} catch (error) {
  console.log("Terjadi error!");  // (4)
  console.log(error.name);
  console.log(error.message);
  // console.log(error.stack);
}

// TODO Try, Catch and Finally
try {
  console.log("Awal blok try");
  console.log("Akhir blok try");
} catch (error) {
  console.log("Baris ini diabaikan");
} finally {
  console.log("Akan tetap dieksekusi");
}