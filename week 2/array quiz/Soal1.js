/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri
 dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
 Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
  Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let indexO = arr.indexOf('o');
  let indexX = arr.indexOf('x');
  
  if (indexO === -1 || indexX === -1) {
    return 0;
  }

  let terpendek = Math.abs(indexO - indexX);
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      indexO = i;
    }
    if (arr[i] === 'x' && Math.abs(indexO - i) < terpendek) {
      terpendek = Math.abs(indexO - i);
    }
  }
  
  return terpendek;
}


// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
