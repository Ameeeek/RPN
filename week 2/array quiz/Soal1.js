/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri
 dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
 Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
  Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let indexO = arr.indexOf('o'); // cari index pertama dari 'x' dan 'o' yang langsung ditemukan
  let indexX = arr.indexOf('x');
  if (indexX === -1) {
    return 0; // kalo ga nemu y tinggal di return 0 ygy 
  }

  let terpendek = Math.abs(indexO - indexX); // masukin hasil 'x' dan 'o' pertama yang didapat, 
                                             // and make it as the initial value of our nearest variable
  
  for (let i = 0; i < arr.length; i++) { // nah perulangan disini buat ngecek if there's another x's and o's 
    if (arr[i] === 'o') { // plain and simple, pretty self explanatory you know. 
      indexO = i;
    }
    if (arr[i] === 'x' && Math.abs(indexO - i) < terpendek) { // now this one need's to read over and over
                                                              // to understand what it does
      terpendek = Math.abs(indexO - i);                       // so basically, it checks if i is another x
                                                              // if it's true it checks again, is the 
                                                              // initial nearest variabel was smaller than 
                                                              // this substraction between x and o ? 
                                                              // if yes then reassigned it. 
    }
  } 
  
  return terpendek; // now we returned it to it's parents. my sleep schedule got worse refactoring this code, what am i doing with my life at this point, smh. 
}


// TEST CASES
// console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
// console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", "", " ", "x", "x", "o", " "])); // 1
// console.log(targetTerdekat([" ", " ", "o", " "])); // 0
// console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
