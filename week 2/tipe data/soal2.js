//cari faktor persekutuan terbesar
//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    angka1 = Math.abs(angka1)
    angka2 = Math.abs(angka2)
    while(angka2){
      let temp = angka2;
      angka2 = angka1 % angka2;
      angka1 = temp 
    }
    return angka1
    // you can only write your code here!
  }
  // TEST CASES
  console.log(fpb(12, 16)); // 4
//   console.log(fpb(50, 40)); // 10
//   console.log(fpb(22, 99)); // 11
//   console.log(fpb(24, 36)); // 12
//   console.log(fpb(17, 23)); // 1

