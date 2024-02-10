/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
  
  if (arrNumber.length <= 1) { // ini base casenya, ngecek kalo panjang array itu kurang dari ato sama dengan satu ya artinya udah keurut ygy
    return arrNumber;
  }

  // Pilih elemen tengah array sebagai pivot
  let pivotIndex = Math.floor(arrNumber.length / 2);
  let pivot = arrNumber[pivotIndex];
  console.log(pivot)

  // Bagi array menjadi dua bagian: yang lebih kecil dari pivot dan yang lebih besar dari pivot
  const leftArray = [];
  const rightArray = [];
  for (let i = 0; i < arrNumber.length; i++) {
    if (i !== pivotIndex) {
      if (arrNumber[i] < pivot) {
        leftArray.push(arrNumber[i]);
      } else {
        arrNumber.push(arrNumber[i]);
      }
    }
  }

  // Gabungkan hasil rekursif untuk kedua bagian array dengan pivot di tengahnya
  return [...recursiveSort(leftArray), pivot, ...recursiveSort(rightArray)];
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

// console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

// console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

// console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

// console.log(mostFrequentLargestNumbers([]));
// //''
