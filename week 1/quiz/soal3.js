function hitungJumlahKata(kalimat) { 
    return kalimat.split(' ').length
  }
  
//   function hitungJumlahKata(kalimat) { 
//     let itung = 0
//     for(let i = 0; i < kalimat.split(" ").length; i++){
//         itung++ 
//     }
//     return itung 
//   }

  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5