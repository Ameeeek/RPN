//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // ini urutin pake insertion sort
  let res = str.split(""); // ini kita pisah dulu ygy
  for (let i = 1; i < res.length; i++) { 
    /*
    kenapa mulai dari 1? ya karena perulangan pertama ini itu jadi right Element buat pembanding left element 
    gitu gitu lu ngerti kan? 
     */
    let currentValue = res[i];
    for (j = i - 1; j >= 0 && res[j] > currentValue; j--) {
      // simplenya itu disini kondisi perulangannya kayak banding right Element sama left Element gitu
      // kita loop disini buat bandingin karakter
      // yang sekarang ama nilai yang sebelumnya
      // ini kalo nilai sebelumnya lebih gede dari nilai sekarang
      // kita geser dulu e
      res[j + 1] = res[j];
    }
    // baru deh kita masukin nilai sekarang yang sesuai ke posisi yang sekarang
    res[j + 1] = currentValue;
  }
  return res.join("");
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
//   console.log(urutkanAbjad('truncate')); // 'acenrttu'
//   console.log(urutkanAbjad('developer')); // 'deeeloprv'
//   console.log(urutkanAbjad('software')); // 'aeforstw'
//   console.log(urutkanAbjad('aegis')); // 'aegis'
