function pasanganTerbesar(num) {
    let currPair = ''
    let biggest = ''
    let i = 0
    while(i < num.toString().length){
        currPair = ''
        if(currPair.length < 2){
            currPair += num.toString()[i]
            currPair += num.toString()[i + 1]
            if(+biggest < +currPair){
                biggest = currPair
            }
        }
        i++
    }
    return +biggest
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99