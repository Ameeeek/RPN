/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri
 dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
 Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
  Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let x = 0;
  let o = 0;
  let near = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "o") {
      o = i;
    }
    if (arr[i] == "x") {
      x = i;
    }
    x - 0 != 0 ? near.push(x - o) : 0;
  }
  return x == 0
    ? 0
    : +near
        .sort()
        .map((a) =>
          a.toString().length > 1 ? a.toString().split("")[1] : a
        )[0];
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
