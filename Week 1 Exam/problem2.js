// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka 
//yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    let rubahMenit = Math.floor(menit/60)
    let sisaDetik = menit - rubahMenit * 60
    let bentukFull = `${rubahMenit}:${sisaDetik}`
    if (sisaDetik < 10){
        bentukFull = `${rubahMenit}:0${sisaDetik}`
    }
    if (menit > 60){
    }
    return bentukFull
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

// ------------------------------------
console.log('')
// ------------------------------------

//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    let countX = 0
    let countO = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] == "x"){
            countX++
        }
        else if(str[i] == "o"){
            countO++
        }
    }
    if(countX == countO){
        return true
    } else if(countX != countO){
        return false
    }
}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true