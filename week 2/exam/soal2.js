/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];

  let tagihan = [];
  arrPenumpang.forEach((a) => {
    tagihan.push({
      penumpang: a[0],
      naikDari: a[1],
      tujuan: a[2],
      bayar: Math.abs(a[1].charCodeAt() - a[2].charCodeAt()) * 2000,
    });
  });
  return tagihan;
}

//TEST CASE
// console.log(
//   naikAngkot([
//     ["Dimitri", "F", "B"],
//     ["Icha", "B", "A"],
//   ])
// );
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
