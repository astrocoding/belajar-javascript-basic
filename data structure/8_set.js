const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet); // data tidak berurutan dan juga tidak di indeks, selain itu set bersifat unik dan tidak ada duplikasi

// TODO menambahkan data ke dalam set dengan add()

numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(numberSet);

numberSet.delete(4);
console.log(numberSet);

// TODO Set tidak memiliki urutan atau index, sehingga argumen yang dimasukan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya

