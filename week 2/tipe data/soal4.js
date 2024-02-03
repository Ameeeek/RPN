/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
  let count = 0;
  let currMax = 0;
  let currOccurMax = 0;
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr.toSpliced(i, 1);
    if (arr[0] == arr[i]) {
      currOccurMax = -1;
    }
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] == arr[i]) {
        count++;
        if ((currMax = 0)) {
          currMax = count;
        } else if (count > currMax) {
          currMax = count;
          currOccurMax = newArr[j];
        }
      }
    }
    count = 0;
  }
  return currOccurMax == 0 ? -1 : currOccurMax;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
